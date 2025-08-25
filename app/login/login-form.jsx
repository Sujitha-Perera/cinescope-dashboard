// this is the client component(CSR=Client Site Rendering)
"use client";
import { 
    Card ,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,CardDescription
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <div className="flex flex-col">
        <Card>
            <CardHeader>
                <CardTitle>Login to Your Account</CardTitle>
                <CardDescription>
                    Enter your credintials below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6  ">
                        <div className="grid  gap-3 ">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                            id="email" 
                            name="email " 
                            type="email" 
                            placeholder="Enter your email:"
                            >

                            </Input>
                        </div>
                       <div className="grid gap-3">
                            <div className="flex items-center">
                            <Label htmlFor="email">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button type="submit" className="  w-full ">
                                Login
                            </Button>
                             <Button type="submit" variant="outline" className=" w-full ">
                                Login with Google
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
   </div>
  )
}

