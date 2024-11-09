import { Hono } from "hono";
import { verify } from "hono/jwt";
export const authMiddleware = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET_KEY: string;
      };
}>();

authMiddleware.use('/api/v1/blog/*',async(c,next)=>{
    // 1. get the header 
    // 2. verify the header
    // 3. if the header is correct proceed 
    // 4. if not , we return a user 403 status code
    const header = c.req.header("authorization")||"";
    const token = header.split(" ")[1];   //if Bearer enfvoeiroerjfeiorfe
    const response  = await verify(token,c.env.JWT_SECRET_KEY);
  
    if(response.id){
      next();
    }
    else{
        c.status(403);
        return c.json({"msg":"unauthorized user"})
    }
  })