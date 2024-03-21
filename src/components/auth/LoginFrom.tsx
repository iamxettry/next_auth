"use client"
import React, { useState, useTransition } from 'react'
import { CardWrapper } from './CardWrapper'
import { set, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form ,FormControl,FormField,FormItem,FormLabel,FormMessage} from '../ui/form'
import * as z from 'zod'
import { LoginSchema } from '@/Schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { login } from '@/actions/login'
export const LoginFrom = () => {
    const [err, setErr] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })

    const onSubmit = (data:z.infer<typeof LoginSchema>)=>{ 
        setErr("")
        setSuccess("") 
        startTransition(()=>{
            login(data).then(data=>{
                setErr(data.error)
                setSuccess(data.success)
            })
        })
    }
  return (
    <CardWrapper
    headerLabel='Welcome back'
    backButtonLabel="Don't have an account?"
    backButtonHref="/auth/register"
    showSocial

    >

       <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'> 

            <div className='space-y-4'>

                <FormField control={form.control} name='email' render={({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder='example@gmail.com' disabled={isPending} {...field}  className='border border-slate-400' />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} />


<FormField control={form.control} name='password' render={({field})=>(
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password"  disabled={isPending} placeholder='*****' {...field}  className='border border-slate-400' />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} />

            </div>
            <FormError message={err}/>
            <FormSuccess message={success}/>

            <Button  disabled={isPending} type='submit' size='lg' variant='default' className='w-full'>Login In</Button>
            
        </form>

       </Form>
        
    </CardWrapper>
  )
}
