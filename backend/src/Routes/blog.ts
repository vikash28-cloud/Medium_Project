import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
}>();

// create blog post
blogRouter.post("/", async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const blog = await prisma.post.create({
    data: {
        title: body.title,
        content:body.content,
        authorId: 1  //but we get it from user using middleware
    }
  })

  return c.json({
    id:blog.id,
    msg:"post created successfully"
  });
});

// update blog post
blogRouter.put("/api/v1/blog", (c) => {
  return c.text("update");
});

blogRouter.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});

blogRouter.get("/api/v1/blog/bulk", (c) => {
  return c.text("bulk");
});
