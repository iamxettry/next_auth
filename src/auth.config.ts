import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./Schemas"
import { getUserByEmail } from "./data/user"
import bcrypt from "bcryptjs"
export default {

  providers: [
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGGLE_CLIENT_SECRET
    }),
    GitHub({
      clientId:process.env.AUTH_GITHUB_ID,
      clientSecret:process.env.AUTH_GITHUB_SECRET
    }),
    credentials({
      name: "Credentials",
      async authorize(credentials){
          const validateFields=LoginSchema.safeParse(credentials)
          if(!validateFields.success){
              return null;
          }
          const {email,password}=validateFields.data;
          const user=await getUserByEmail(email)
          if(!user || !user.password){
              return null;
          }
          const isValid=user && bcrypt.compareSync(password,user.password)
          if(!isValid){
              return null; 
          }
          return user;
      }
    })
  ],
} satisfies NextAuthConfig