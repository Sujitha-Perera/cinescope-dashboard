import React from 'react'
import { LoginForm } from './login-form'
// this is the server component SSR
export default function LoginPage() {
  return (

    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className=' w-full max-w-sm '> 
        <LoginForm/>

        </div>
    </div>
  )
}
