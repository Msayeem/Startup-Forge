"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
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

    return (
            <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Login Card Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Login
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form Section */}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          
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
            <Label className="text-sm font-semibold text-slate-700 mb-1">Email address</Label>
            <Input 
              placeholder="john@example.com" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" 
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 mb-1">Password</Label>
            <Input 
              placeholder="Enter your password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" 
            />
            <Description className="text-xs text-slate-400 mt-1.5">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <Button 
              type="submit" 
              className="w-full h-11 bg-green-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Check className="w-4 h-4" />
              Login
            </Button>
            
            {/* Kept the reset button but styled it softly so it doesn't compete with the main submit */}
            <Button 
              type="reset" 
              variant="flat"
              className="w-full h-10 bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium rounded-xl transition-colors"
            >
              Clear Form
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-slate-400">Or continue with</span>
          </div>
        </div>

 

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm text-slate-500">
          Don't have an account?{' '}
          <Link 
            href={`/signUp`}
            className="font-semibold text-slate-900 hover:text-blue-600 hover:underline transition-colors"
          >
            Sign up for free
          </Link>
        </p>
      </div>
      
    </div>
    );
};

export default LoginPage;