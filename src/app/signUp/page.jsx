"use client"
import { authClient } from '@/lib/auth-client';
import { uploadImageToImgBB } from '@/lib/api';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, Radio, RadioGroup, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [role, setRole] = useState('collabrator');
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const inputRef = useRef(null);

  const router = useRouter();

  const handleFile = (file) => {
    setUploadError('');
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Only image files are allowed.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must not exceed 5 MB.');
      return;
    }
    setUploadedFile({ file, previewUrl: URL.createObjectURL(file) });
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files?.[0]);
  }, []);

  const handleDragOver = (e) => { e.preventDefault(); setDragActive(true); };
  const handleDragLeave = () => setDragActive(false);
  const handleInputChange = (e) => handleFile(e.target.files?.[0]);

  const removeFile = () => {
    if (uploadedFile?.previewUrl) URL.revokeObjectURL(uploadedFile.previewUrl);
    setUploadedFile(null);
    setUploadError('');
    if (inputRef.current) inputRef.current.value = '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // Upload image if selected, otherwise fall back to empty string
    let imageUrl = '';
    if (uploadedFile?.file) {
      try {
        imageUrl = await uploadImageToImgBB(uploadedFile.file);
      } catch {
        toast.error('Image upload failed. Please try again.');
        return;
      }
    }

    const plan = role === 'collabrator' ? 'collabrator_free' : 'founder_free';

    const { error } = await authClient.signUp.email({
      name: user.name,
      image: imageUrl,
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

          {/* Profile Image Upload */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-semibold text-slate-700">Profile Image</Label>

            {!uploadedFile ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => inputRef.current?.click()}
                className={`
                  relative flex flex-col items-center justify-center gap-2
                  rounded-xl border-2 border-dashed px-6 py-8 cursor-pointer
                  transition-colors duration-200
                  ${dragActive
                    ? 'border-slate-900 bg-slate-50'
                    : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                  }
                `}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-700">
                    {dragActive ? 'Drop image here' : 'Drag & drop or click to upload'}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">PNG, JPG, WEBP — max 5 MB</p>
                </div>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div className="relative flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <img
                  src={uploadedFile.previewUrl}
                  alt="Preview"
                  className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                />
                <div className="flex flex-col min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">{uploadedFile.file.name}</p>
                  <p className="text-xs text-slate-400">{(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="ml-auto shrink-0 flex items-center justify-center w-7 h-7 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Remove file"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            {uploadError && <p className="text-xs text-red-500 mt-0.5">{uploadError}</p>}
          </div>

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
            <RadioGroup defaultValue="collabrator" name="role" orientation="horizontal" onChange={value => setRole(value)}>
              <Radio value="collabrator">
                <Radio.Control><Radio.Indicator /></Radio.Control>
                <Radio.Content>
                  <Label>Collabrator</Label>
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