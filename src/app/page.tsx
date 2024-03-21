import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/Login-button'

const font = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

const Home = () => {
  return (
    <section className="h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-700 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
      <div className='space-y-6 text-center'>
        
        <h1 className={cn(
        "flex items-center text-6xl drop-shadow-md font-semibold text-white",
        font.className
        )}>Auth</h1> 
      </div>
        <p className='text-white text-lg '>A simple authentication service</p>
        <div>
            <LoginButton>

            <Button variant={'secondary'} size={'lg'} >Sign In</Button>
            </LoginButton>
        </div>
  </div>
</section>
  )
}

export default Home