"use server"

import * as z from "zod"
import {RegisterSchema} from '@/Schemas'
import bcrypt from 'bcryptjs'
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"
export const register= async (values:z.infer<typeof RegisterSchema>)=>{
    const validateFields = RegisterSchema.safeParse(values)
    if(!validateFields.success){
        return {error:"Invalid fields"}
    }
    const {email,password,name} = validateFields.data
    const salt = await bcrypt.genSalt(10)
    const hashPassowrd = await bcrypt.hash(password,salt)
    const existingUser= await getUserByEmail(email)
    if(existingUser){
        return {error:"Email already in use!"}

    }
    await db.user.create({
        data:{
            name,
            email,
            password:hashPassowrd
        }
    })
    return {success:"User Created!"}
}