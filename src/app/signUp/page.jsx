"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, Radio, RadioGroup, TextField } from '@heroui/react';
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
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Create an account</h1>
          <p className="text-sm text-slate-500 mt-2">Enter your details below to get started</p>
        </div>

        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>

          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-sm font-semibold text-slate-700 mb-1">Full Name</Label>
            <Input placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField name="image" type="url" className="w-full">
            <Label className="text-sm font-semibold text-slate-700 mb-1">Profile Image URL</Label>
            <Input placeholder="https://example.com/avatar.jpg" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField isRequired name="email" type="email" className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return 'Please enter a valid email address';
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 mb-1">Email address</Label>
            <Input placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField isRequired minLength={8} name="password" type="password" className="w-full"
            validate={(value) => {
              if (value.length < 8) return 'Password must be at least 8 characters';
              if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
              if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 mb-1">Password</Label>
            <Input placeholder="Create a secure password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <Description className="text-xs text-slate-400 mt-1.5">Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <div className="flex flex-col gap-4">
            <Label>Select Role</Label>
            <RadioGroup defaultValue="collaborator" name="role" orientation="horizontal" onChange={value => setRole(value)}>
              <Radio value="collaborator">
                <Radio.Control><Radio.Indicator /></Radio.Control>
                <Radio.Content>
                  <Label>Collaborator</Label>
                  <Description>For side projects</Description>
                </Radio.Content>
              </Radio>
              <Radio value="founder">
                <Radio.Control><Radio.Indicator /></Radio.Control>
                <Radio.Content>
                  <Label>Founder</Label>
                  <Description>Advanced reporting</Description>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <Button type="submit" className="w-full h-11 bg-green-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
              <Check className="w-4 h-4" />
              Sign Up
            </Button>
            <Button type="reset" variant="flat" className="w-full h-10 bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium rounded-xl transition-colors">
              Clear Form
            </Button>
          </div>
        </Form>

        <p className="text-center mt-8 text-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-slate-900 hover:text-blue-600 hover:underline transition-colors">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;