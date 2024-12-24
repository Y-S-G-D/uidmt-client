"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, KeyRound, ArrowRight, User } from "lucide-react";
import { InputWithIcon } from "@/components/input-with-icon";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 flex items-center justify-center p-4 animate-gradient-x">
      <div className="absolute top-16 inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 "></div>
      </div>
      
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl ">
      <CardHeader className="space-y-2 text-center pb-8">
          <div className="space-y-0.5">
            <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Create an Account
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Start your journey with us today
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <InputWithIcon
              id="name"
              label="Full Name"
              placeholder="John Doe"
              icon={User}
              required
            />
            <InputWithIcon
              id="email"
              label="Email"
              type="email"
              placeholder="name@example.com"
              icon={Mail}
              required
            />
            <InputWithIcon
              id="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              icon={KeyRound}
              required
            />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 group"
              // disabled={isLoading}
            >
              {/* {isLoading ? (
                "Creating account..."
              ) : ( */}
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              {/* )} */}
            </Button>
            <p className="text-sm text-zinc-400 text-center">
              Already have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </CardFooter>
        </form>

      </Card>
    </div>
    // <div className="min-h-screen flex items-center justify-center px-4">
    //   <Card className="w-full max-w-md">
    //     <CardHeader className="space-y-1">
    //       <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="name">Full Name</Label>
    //           <Input
    //             id="name"
    //             placeholder="Enter your name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="Enter your email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="password">Password</Label>
    //           <Input
    //             id="password"
    //             type="password"
    //             placeholder="Create a password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //         </div>
    //         <Button type="submit" className="w-full">
    //           Register
    //         </Button>
    //       </form>
    //       <div className="mt-4 text-center text-sm">
    //         <span className="text-muted-foreground">Already have an account? </span>
    //         <Link href="/auth/login" className="text-primary hover:underline">
    //           Login
    //         </Link>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}