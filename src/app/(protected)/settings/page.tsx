import React from 'react'
import { auth, signOut } from '@/auth'

const Setting =async () => {
  const session = await auth()
  console.log(session);
  return (
    <div>
      
      <h1>setting</h1>
      <form action={async ()=>{
        "use server"
        await signOut()
      }}>  
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  )
}

export default Setting