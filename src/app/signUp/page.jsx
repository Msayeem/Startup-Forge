"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, Radio, RadioGroup, TextField } from '@heroui/react';
import { Briefcase, Rocket, RotateCcw, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [role, setRole] = useState('collaborator');
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const plan = role === 'collaborator' ? 'collaborator_free' : 'founder_free';

    const { error } = await authClient.signUp.email({
      name: user.name,
      image: user.image,
      email: user.email,
      password: user.password,
      role,
      plan,
      status: 'active',
      rememberMe: true,
    });

    if (error) {
      toast.error('Sign Up failed. Please retry again with different values.');
      return;
    }

    toast.success('Sign Up successfully');
    router.push('/');
  };

  return (
    <div className="min-h-[95vh] w-full flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-[#030408] relative overflow-hidden antialiased selection:bg-indigo-500/30 selection:text-white">
      
      {/* Background Liquid Plasma Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-purple-600/15 to-indigo-600/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none mix-blend-screen animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Premium Liquid Glass Card Container */}
      <div className="relative w-full max-w-lg bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 rounded-[32px] border border-white/[0.08] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden text-white z-10">
        
        {/* Subtle Overhead Reflection Strip */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Header Section */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex mx-auto mb-2 items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] shadow-inner text-indigo-400">
            <UserPlus className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white uppercase sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
            Create Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-400  max-w-[280px] mx-auto leading-relaxed">
            Initialize your profile node to begin cross-border networking
          </p>
        </div>

        {/* Form Section */}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>

          {/* Full Name */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 ml-1">Full Name</Label>
            <Input 
              placeholder="Your Name" 
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner" 
            />
            <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
          </TextField>

          {/* Profile Image URL */}
          <TextField name="image" type="url" className="w-full">
            <Label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 ml-1">Profile Image URL</Label>
            <Input 
              placeholder="https://example.com/avatar.jpg" 
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner" 
            />
            <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
          </TextField>

          {/* Email Address */}
          <TextField 
            isRequired 
            name="email" 
            type="email" 
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return 'Please enter a valid email address';
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

          {/* Password */}
          <TextField 
            isRequired 
            minLength={8} 
            name="password" 
            type="password" 
            className="w-full"
            validate={(value) => {
              if (value.length < 8) return 'Password must be at least 8 characters';
              if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
              if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
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

          {/* Premium Selector Role Block */}
          <div className="flex flex-col gap-2 mt-1">
            <Label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 ml-1">Select Role</Label>
           

            

     <RadioGroup
  defaultValue="collaborator"
  name="role"
  orientation="horizontal"
  onChange={value => setRole(value)}
  className="w-full"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">

    {/* Collaborator */}
    <Radio
      value="collaborator"
      className="group flex items-start gap-3 p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] data-[selected]:border-indigo-500/60 data-[selected]:bg-indigo-500/[0.04] transition-all duration-200 cursor-pointer"
    >
      <Radio.Control className="hidden">
        <Radio.Indicator />
      </Radio.Control>

      <Radio.Content className="flex items-start gap-3 w-full">
        {/* Icon */}
        <div className="mt-0.5 p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-indigo-400 group-data-[selected]:border-indigo-500/40 group-data-[selected]:bg-indigo-500/10 transition-all duration-200">
          <Briefcase className="w-3.5 h-3.5" />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1">
          <span className="text-xs font-bold text-white tracking-wide">Collaborator</span>
          <span className="text-[10px] text-slate-500 mt-0.5 font-bold">Discover opportunities</span>
        </div>

        {/* Check badge */}
        <div className="mt-0.5 w-4 h-4 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center group-data-[selected]:border-indigo-500 group-data-[selected]:bg-indigo-500 transition-all duration-200">
          <Check className="w-2.5 h-2.5 text-white opacity-0 group-data-[selected]:opacity-100 transition-opacity duration-200" />
        </div>
      </Radio.Content>
    </Radio>

    {/* Founder */}
    <Radio
      value="founder"
      className="group flex items-start gap-3 p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] data-[selected]:border-purple-500/60 data-[selected]:bg-purple-500/[0.04] transition-all duration-200 cursor-pointer"
    >
      <Radio.Control className="hidden">
        <Radio.Indicator />
      </Radio.Control>

      <Radio.Content className="flex items-start gap-3 w-full">
        {/* Icon */}
        <div className="mt-0.5 p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-purple-400 group-data-[selected]:border-purple-500/40 group-data-[selected]:bg-purple-500/10 transition-all duration-200">
          <Rocket className="w-3.5 h-3.5" />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1">
          <span className="text-xs font-bold text-white tracking-wide">Founder</span>
          <span className="text-[10px] text-slate-500 mt-0.5 font-bold">Build Startup & create opportunities</span>
        </div>

        {/* Check badge */}
        <div className="mt-0.5 w-4 h-4 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center group-data-[selected]:border-purple-500 group-data-[selected]:bg-purple-500 transition-all duration-200">
          <Check className="w-2.5 h-2.5 text-white opacity-0 group-data-[selected]:opacity-100 transition-opacity duration-200" />
        </div>
      </Radio.Content>
    </Radio>

  </div>
</RadioGroup>

          
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              type="submit" 
              className="w-full h-12 bg-white text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 shadow-[0_4px_25px_rgba(255,255,255,0.12)] active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
            >
              <Check className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              SignUp
            </Button>
            
            <Button 
              type="reset" 
              variant="flat"
              className="w-full h-11 bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] font-bold rounded-xl flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Workspace
            </Button>
          </div>
        </Form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-xs text-slate-400  tracking-wide">
          Already have an account?{' '}
          <Link 
            href="/login" 
            className="font-bold text-white hover:text-indigo-400 underline underline-offset-4 transition-colors ml-1"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;