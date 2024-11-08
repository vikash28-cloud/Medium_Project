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

// middlware
app.use('/api/v1/blog/*',async(c,next)=>{
  // 1. get the header 
  // 2. verify the header
  // 3. if the header is correct proceed 
  // 4. if not , we return a user 403 status code
  const header = c.req.header("authorization")||"";
  const token = header.split(" ")[1];
  const response  = await verify(token,c.env.JWT_SECRET_KEY);

  if(response.id){
    next();
  }
  else{
      c.status(403);
      return c.json({"msg":"unauthorized user"})
  }
})

// signup Route
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

  const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);

  return c.json({
    msg: "User regestered successfully",
    jwtToken: token,
  });
});

// signin
app.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      msg: "Invalid email or password",
    });
  }

  const jwtToken = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);

  return c.json({
    msg: "user loggedIn successfully",
    token: jwtToken,
  });
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
