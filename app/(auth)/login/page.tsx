"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/app/stores/auth-store";
import { Mail, KeyRound } from "lucide-react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { login } = useAuthStore();

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    // Handle login logic here
  };

  return (
    <div className="min-h-[90vh] w-full  flex items-center justify-center p-4 animate-gradient-x ">
      {/* <div className="absolute top-16 inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 "></div>
      </div> */}
      
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl ">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight text-white">Welcome back</CardTitle>
          <CardDescription className="text-zinc-200">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-300" />
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  required
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 h-5 w-5 text-zinc-300" />
                <Input
                  id="password"
                  type="password"
                  required
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
              // disabled={isLoading}
            >
              {/* {isLoading ? "Signing in..." : "Sign in"} */}
              Sign in
            </Button>
            <p className="text-sm text-zinc-300 text-center">
              Don&apos;t have an account?{' '}
              <a href="/register" className="text-purple-300 hover:text-purple-200 underline underline-offset-4">
                Sign up
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}