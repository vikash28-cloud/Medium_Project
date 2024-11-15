
import zod from "zod"

export const signupInput = zod.object({
    name:zod.string(),
    email: zod.string().email(),
    password: zod.string(),
   
})

export const signinInput = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

export const createblogInput=zod.object({
    title:zod.string(),
    content:zod.string(),
})
export const updateBlogInput = zod.object({
    title:zod.string(),
    content:zod.string(),
    
    id:zod.string()
})
// for frontend react
// type inference in zod
export type SignupInput = zod.infer<typeof signupInput>   
export type SigninInput = zod.infer<typeof signinInput>
export type createblogInput = zod.infer<typeof createblogInput>
export type updateBlogInput= zod.infer<typeof updateBlogInput>