import { Hono } from "hono";;
import {verify } from "hono/jwt";
import { userRouter } from "./Routes/user";
import { blogRouter } from "./Routes/blog";
import { cors } from "hono/cors";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
}>();

// middlware

app.use("/*",cors());
// signin , signup routes
app.route("/api/v1/user",userRouter);
// blog routes
app.route("/api/v1/blog",blogRouter);


export default app;
