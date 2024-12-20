import { Hono, MiddlewareHandler } from "hono";
import { verify } from "hono/jwt";
const app = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET_KEY: string;
      },
      Variables:{
        "userID":string
      }
}>();

export const authMiddleware:MiddlewareHandler= async(c,next)=>{
    // 1. get the header 
    // 2. verify the header
    // 3. if the header is correct proceed 
    // 4. if not , we return a user 403 status code
    const authHeader = c.req.header("Authorization")||"";
    // const token = header.split(" ")[1];   //if Bearer enfvoeiroerjfeiorfe
    const user  = await verify(authHeader,c.env.JWT_SECRET_KEY);
  
    if(user){
      c.set("userId",user.id)
      await next();
    }
    else{
        c.status(403);
        return c.json({"msg":"you are not logged in"})
    }
  }