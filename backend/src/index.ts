import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, jwt, sign, verify } from "hono/jwt";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
}>();

// signin Route
app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
    },
  });

  const token = await sign({ id: user.id },c.env.JWT_SECRET_KEY);

  return c.json({
    msg:"User regestered successfully",
    jwtToken: token,
  });
});




app.post("/api/v1/user/signin", (c) => {
  return c.text("signin");
});

app.post("/api/v1/blog", (c) => {
  return c.text("blog");
});

app.put("/api/v1/blog", (c) => {
  return c.text("update");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("bulk");
});

export default app;
