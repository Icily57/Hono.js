import { z } from 'zod'

export const userSchema = z.object({
    fullname: z.string(),
    phone: z.string(),
    address: z.string(),
    score: z.number()
})


export const loginUserSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const registerUserSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    role: z.string().optional(),
})


