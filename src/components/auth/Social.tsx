"use client"

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-2">
        <Button variant={'outline'} size={"lg"}  className="w-full border border-gray-400 hover:bg-slate-300"   onClick={()=>{}}>

        <FcGoogle className="h-5 w-5" />
        </Button>
        <Button variant={'outline'} size={"lg"}  className="w-full border border-gray-400 hover:bg-slate-300" onClick={()=>{}}>
        <FaGithub className="h-5 w-5"/>

        </Button>
    </div>
  )
}
