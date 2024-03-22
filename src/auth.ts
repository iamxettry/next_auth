import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import { getUserById } from "./data/user"

import {JWT} from "next-auth/jwt"
import { UserRole } from "@prisma/client"


// type UserRole = "USER" | "ADMIN"

const isValidRole = (role: string): role is UserRole => {
  return role === "USER" || role === "ADMIN";
};
declare module "next-auth" {
  interface User {

    role: UserRole
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole
  }
}
export const { handlers:{GET,POST}, auth , signIn, signOut} = NextAuth({
  pages:{
    signIn:"/auth/signin",
    error:"/auth/error"
  },
  events:{
     
    async linkAccount({ user }) {
      await db.user.update({  
        where: { id: user.id },
        data: { emailVerified: new Date },
      })
    },
  
  },
  callbacks:{
    
    // async signIn({ user}) {
    //   const existingUser= await getUserById(user.id)
    //   if(!existingUser || !existingUser.emailVerified){
    //     return false
    //   }
    //   return true
    // },
    async session({ session, token  }) {
      if(token.sub && session.user){
        session.user.id=token.sub
      }
      if(token.role && session.user &&isValidRole(token.role)){
        session.user.role=token.role ;
      }
      return session
    },
    async jwt({ token }) {
    
      if(!token.sub) return token;
      const existingUser=await getUserById(token.sub)
      if(!existingUser){
        return token;
      }
      if( existingUser.role && isValidRole(existingUser.role)){

        token.role=existingUser.role
      }
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})