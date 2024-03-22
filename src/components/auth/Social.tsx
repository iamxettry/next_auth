"use client"

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes"

export const Social = () => {
  const onClick = (provider: "google" | "github")=>{
    signIn(provider,{
      redirect:false,
      callbackUrl:DEFAULT_LOGIN_REDIRECT,
    })
  }
  return (
    <div className="flex items-center w-full gap-2">
        <Button variant={'outline'} size={"lg"}  className="w-full border border-gray-400 hover:bg-slate-300"   onClick={()=>onClick("google")}>

        <FcGoogle className="h-5 w-5" />
        </Button>
        <Button variant={'outline'} size={"lg"}  className="w-full border border-gray-400 hover:bg-slate-300" onClick={()=>onClick("github")}>
        <FaGithub className="h-5 w-5"/>

        </Button>
    </div>
  )
}
