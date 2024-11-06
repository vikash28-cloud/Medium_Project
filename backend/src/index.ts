import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/api/v1/user/signup",(c) => {
      return c.text("signup")
})

app.post("/api/v1/user/signin",(c)=>{
  return c.text("efjejf");
})

app.post("/api/v1/blog",(c)=>{
  return c.text("blog");
})

app.put("/api/v1/blog",(c)=>{
  return c.text("update");
})

app.get("/api/v1/blog/:id",(c)=>{
  const id = c.req.param('id');
  console.log(id);
  return c.text("get blog route");
})

app.get("/api/v1/blog/bulk",(c)=>{
  return c.text("bulk");
})

export default app
