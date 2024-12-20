import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { authMiddleware } from "../Middleware/authMiddleware";
import {
  createblogInput,
  updateBlodInput
} from "@vikashsharma2896/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("*", authMiddleware);

// create blog post
blogRouter.post("/createBlog", async (c) => {
  const body = await c.req.json();
  const { success } = createblogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "enter valid credentials" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const authorId = c.get("userId"); //take it from auth middleware
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId), //but we get it from user using middleware
    },
  });
  c.status(200);
  return c.json({
    id: blog.id,
    msg: "post created successfully",
  });
});

// update blog post
blogRouter.put("/updateBlog", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlodInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "enter valid credentials" });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    msg: "blog updated successfully",
    id: blog.id,
  });
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany({
    select:{
      content:true,
      title:true,
      id:true,
      author:{
        select:{
          name:true,
        }
      }
    }
  });
  return c.json({
    blogs,
  });
});

blogRouter.get("/:id", async (c) => {
  const id:string = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });
    if (!blog) {
      c.status(404)
      return c.json({
        msg: "Blog post not found",
      });
    }
    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    c.json({
      msg: "error while fetching blog post",
    });
  }
});
