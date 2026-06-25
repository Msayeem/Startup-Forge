"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { RotateCcw, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const LoginPage = () => {

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      rememberMe: true,
callbackURL:"/"
    });

    if(error){
      toast.error("Login Failed")
    }
    else{
      toast.success("Login Successful");
      
    }

  };

const handleGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

    return (
       <div className="min-h-[90vh] w-full flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-[#030408] relative overflow-hidden antialiased selection:bg-indigo-500/30 selection:text-white">
      
      {/* Background Liquid Plasma Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Premium Liquid Glass Card Container */}
      <div className="relative w-full max-w-md bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 rounded-[32px] border border-white/[0.08] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden text-white z-10">
        
        {/* Subtle Overhead Reflection Strip */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Header Section */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex mx-auto mb-2 items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] shadow-inner text-indigo-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white uppercase sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-slate-400  max-w-[280px] mx-auto leading-relaxed">
            Enter your credentials to access your secure forge portal
          </p>
        </div>

        {/* Form Section */}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          
          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 ml-1">Email address</Label>
            <Input 
              placeholder="john@example.com" 
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner" 
            />
            <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Password must contain an uppercase letter";
              if (!/[0-9]/.test(value)) return "Password must contain a number";
              return null;
            }}
          >
            <Label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 ml-1">Password</Label>
            <Input 
              placeholder="••••••••" 
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner" 
            />
            <Description className="text-[11px] text-slate-500 mt-1.5 ml-1 leading-normal">
              Requires 8+ characters, 1 uppercase, and 1 digit
            </Description>
            <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
          </TextField>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <Button 
              type="submit" 
              className="w-full h-12 bg-white text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 shadow-[0_4px_25px_rgba(255,255,255,0.12)] active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
            >
              <Check className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              Login
            </Button>
            
            <Button 
              type="reset" 
              variant="flat"
              className="w-full h-11 bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] font-bold rounded-xl flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Form
            </Button>
          </div>
        </Form>

        {/* Translucent Glass Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.08]"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-wider">
            <span className="px-4 bg-[#0a0b10]/40 backdrop-blur-sm text-slate-500 font-bold text-[10px]">Or continue with</span>
          </div>
        </div>

        {/* Google OAuth Button */}
        <button 
          onClick={handleGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white/[0.02] border border-white/[0.08] text-slate-200 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] h-12 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm uppercase tracking-wider cursor-pointer active:scale-[0.99]"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="opacity-90 group-hover:opacity-100">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>

        {/* Footer Link */}
        <p className="text-center mt-8 text-xs text-slate-400  tracking-wide">
          Don't have an account?{' '}
          <Link 
            href={`/signUp`}
            className="font-bold text-white hover:text-indigo-400 underline underline-offset-4 transition-colors ml-1"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
    );
};

export default LoginPage;