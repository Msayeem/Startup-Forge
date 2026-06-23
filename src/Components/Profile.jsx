"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { Check, RotateCcw, Sparkles, UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react';
import toast from 'react-hot-toast';

const Profile = ({user}) => {

    const router=useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

   const { error } = await authClient.updateUser({
    name: data.name,
    image: data.image,
    bio: data.bio,
    skills: data.skills,
  });

    if (error) {
      toast.error('Update Failed.');
      return;
    }

    toast.success('Profile updated successfully');
    router.refresh()
  };

    return (
      <div className="relative w-full max-w-2xl mx-auto my-8 p-6 md:p-10 rounded-[32px] bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] overflow-hidden antialiased text-white">
            
            {/* Liquid Background Light Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-70" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-60" />
            
            {/* Header Identity Block */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-white/[0.06]">
                
                {/* Premium Liquid Profile Avatar Frame */}
                <div className="relative group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl p-[1.5px] bg-gradient-to-b from-white/40 to-white/10 shadow-xl overflow-hidden bg-[#0a0b12]">
                        <Image
                        width={100}
                        height={100}
                            src={user?.image} 
                            alt={user?.name} 
                            className="w-full h-full object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105"
                        >
                            </Image>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 rounded-[14px] cursor-pointer">
                            <UploadCloud className="size-5 text-white/80" />
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-left space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-sm">
                        <Sparkles className="size-3 text-indigo-400" />
                        Account Settings
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight">{user?.name || "Forge Member"}</h2>
                    <p className="text-xs text-slate-400  max-w-sm">
                        Update your professional persona, manage skills tags, and customize identity visibility across the collaborator network.
                    </p>
                </div>
            </div>

            {/* Main Form Entry */}
            <Form className="relative z-10 flex w-full flex-col gap-6" onSubmit={onSubmit}>

                {/* Grid Structure for Compact Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name TextField */}
                    <TextField defaultValue={user?.name}  name="name" type="text" className="w-full">
                        <Label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2 ml-1">Full Name</Label>
                        <Input 
                            placeholder="Your Name" 
                            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner" 
                        />
                        <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
                    </TextField>

                    {/* Profile Image URL TextField */}
                    <TextField defaultValue={user?.image} name="image" type="url" className="w-full">
                        <Label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2 ml-1">Profile Image URL</Label>
                        <Input 
                            placeholder="https://example.com/avatar.jpg" 
                            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner" 
                        />
                        <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
                    </TextField>
                </div>

                {/* Skills TextField */}
                <TextField defaultValue={user?.skills} name="skills" className="w-full">
                    <Label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2 ml-1">Skills Stack</Label>
                    <Input
                       
                        placeholder="e.g. React, Node.js, MongoDB, Figma"
                        className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner"
                    />
                    <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
                </TextField>

                {/* Bio TextArea */}
                <TextField defaultValue={user?.bio} name="bio" className="w-full">
                    <Label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2 ml-1">Professional Bio</Label>
                    <TextArea
                        
                        placeholder="Tell the forge community a little about your journey, capabilities, and startup interests..."
                        className="w-full min-h-[120px] resize-none bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all duration-200 shadow-inner leading-relaxed"
                    />
                    <FieldError className="text-xs text-rose-400 font-medium mt-1.5 ml-1" />
                </TextField>

                {/* Form Action Submissions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                    <Button 
                        type="submit" 
                        className="w-full sm:w-auto sm:flex-1 h-12 bg-white text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 shadow-[0_4px_20px_rgba(255,255,255,0.1)] active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
                    >
                        <Check className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                        Save Profile Edits
                    </Button>
                    
                    <Button 
                        type="reset" 
                        variant="flat" 
                        className="w-full sm:w-auto px-6 h-12 bg-white/[0.04] hover:bg-white/[0.07] text-slate-300 hover:text-white border border-white/[0.06] hover:border-white/[0.12] font-bold rounded-xl flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Profile;