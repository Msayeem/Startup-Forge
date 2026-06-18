"use client";

import React, { useState } from "react";
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError,
    Select,
    ListBox,
    Switch,
    Button,

} from "@heroui/react";
import { Briefcase, Globe } from "@gravity-ui/icons";

import { redirect } from "next/navigation";

import toast from "react-hot-toast";
import { createOpportunity } from "@/lib/api";

const NewOpportunityForm = ({ startup }) => {


    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const newErrors = {};
        if (!data.roleTitle) newErrors.roleTitle = "Role title is required";
        if (!data.commitmentLevel) newErrors.commitmentLevel = "Commitment level is required";
        if (!data.workType) newErrors.workType = "Work type is required";
        if (!data.deadline) newErrors.deadline = "Application deadline is required";
        if (!data.requirements) newErrors.requirements = "Requirements are required";
        console.log("Validation errors:", newErrors);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const payload = {
            ...data,
            opportunityId: startup._id,
            opportunityName: startup.startup_name,
            companyLogo: startup.logo_url,
            status: "active",
            isPubliclyVisible: true,
        };

        const res = await createOpportunity(payload)
        if (res.insertedId) {
            toast.success("Opportunity posted successfully!");
            e.target.reset();
            redirect('/dashboard/founder/opportunities')
        }


    };

    // Dark styles styled to match your image_988c20.png reference layout
    const textInputClass = "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-600 outline-none transition-all";
    const textAreaClass = "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg p-3 text-sm placeholder:text-zinc-600 outline-none transition-all";

    const selectBoxClass = "w-full";
    const triggerClasses = "w-full flex items-center justify-between bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] h-12 rounded-lg px-3 text-white transition-all text-sm outline-none data-[focused=true]:border-zinc-600 data-[invalid=true]:border-danger";
    const popoverClasses = "bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg shadow-xl p-1";
    const listItemClasses = "flex items-center justify-between p-2 rounded-md hover:bg-zinc-800 cursor-pointer text-sm text-zinc-200 outline-none data-[focused=true]:bg-zinc-800";

    return (
        <div className="min-h-screen bg-[#0d0d0e] text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-2xl">

                {/* Form Header block */}
                <div className="border-b border-zinc-800 pb-6 mb-8">
                    <h1 className="text-2xl font-semibold tracking-tight">Post a New Opportunity</h1>
                    <p className="text-zinc-400 text-sm mt-1">
                        Fill out the details below to publish your open position.
                    </p>

                    {/* Company verification status panel */}
                    <div className="mt-4 inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
                        <Briefcase size={14} className="text-zinc-500" />
                        Posting as: <span className="font-semibold text-zinc-300">{startup.startup_name}</span>
                        <span className="text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">{startup.status}</span>
                    </div>
                </div>

                {/* Hero UI Main Form Handler */}
                {
                    startup.status == 'pending' && <h1>Please wait to get approval.</h1>

                }
                {
                    startup.status == 'pending' &&
                    <Form onSubmit={handleSubmit} className="space-y-8" validationErrors={errors} validationBehavior='aria'>

                        {/* SECTION 1: Job Information */}
                        <Fieldset className="space-y-6 w-full">
                            <legend className="text-lg font-medium text-zinc-300 border-b border-zinc-900 w-full pb-2 mb-2">
                                Opportunity Information
                            </legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <TextField name="roleTitle" isInvalid={!!errors.roleTitle} className="flex flex-col gap-1 w-full">
                                    <Label className="text-zinc-400 font-medium text-sm">Role Title</Label>
                                    <Input placeholder="e.g. Senior Frontend Engineer" className={textInputClass} />
                                    {errors.roleTitle && <FieldError className="text-xs text-danger mt-1">{errors.roleTitle}</FieldError>}
                                </TextField>

                                <Select className={selectBoxClass} name="commitmentLevel" isInvalid={!!errors.commitmentLevel}>
                                    <Label className="text-zinc-400 font-medium text-sm mb-1 block">Commitment Level</Label>
                                    <Select.Trigger className={triggerClasses}>
                                        <Select.Value className="text-white placeholder:text-zinc-600" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    {errors.commitmentLevel && <span className="text-xs text-danger mt-1">{errors.commitmentLevel}</span>}
                                    <Select.Popover className={popoverClasses}>
                                        <ListBox className="outline-none">
                                            <ListBox.Item id="full-time" textValue="Full-time (40+ hrs/week)">
                                                Full-time (40+ hrs/week) <ListBox.ItemIndicator />
                                            </ListBox.Item>

                                            <ListBox.Item id="part-time" textValue="Part-time (10–20 hrs/week)">
                                                Part-time (10–20 hrs/week) <ListBox.ItemIndicator />
                                            </ListBox.Item>

                                            <ListBox.Item id="contract" textValue="Project-based / Contract">
                                                Project-based / Contract <ListBox.ItemIndicator />
                                            </ListBox.Item>

                                            <ListBox.Item id="advisory" textValue="Advisory / Mentorship">
                                                Advisory / Mentorship <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between mb-1">


                                        {/* Updated Switch using v3 Compound Component Syntax */}
                                        <Select className={selectBoxClass} name="workType" isInvalid={!!errors.workType}>
                                            <Label className="text-zinc-400 font-medium text-sm mb-1 block">Work Type</Label>
                                            <Select.Trigger className={triggerClasses}>
                                                <Select.Value className="text-white placeholder:text-zinc-600" />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            {errors.workType && <span className="text-xs text-danger mt-1">{errors.workType}</span>}
                                            <Select.Popover className={popoverClasses}>
                                                <ListBox className="outline-none">
                                                    <ListBox.Item id="remote" className={listItemClasses} textValue="Remote">
                                                        Remote
                                                    </ListBox.Item>

                                                    <ListBox.Item id="hybrid" className={listItemClasses} textValue="Hybrid">
                                                        Hybrid
                                                    </ListBox.Item>

                                                    <ListBox.Item id="onsite" className={listItemClasses} textValue="On-site">
                                                        On-site
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>


                                </div>

                                <TextField name="deadline" isInvalid={!!errors.deadline} className="flex flex-col gap-1 w-full">
                                    <Label className="text-zinc-400 font-medium text-sm">Deadline</Label>
                                    <Input type="date" className={textInputClass} />
                                    {errors.deadline && <FieldError className="text-xs text-danger mt-1">{errors.deadline}</FieldError>}
                                </TextField>
                            </div>
                        </Fieldset>

                        {/* SECTION 2: Job Description */}
                        <Fieldset className="space-y-6 w-full">




                            <TextField name="requirements" isInvalid={!!errors.requirements} className="flex flex-col gap-1 w-full">
                                <Label className="text-zinc-400 font-medium text-sm">Requirements</Label>
                                <TextArea
                                    placeholder="List required experience, skills, and certifications..."
                                    rows={4}
                                    className={textAreaClass}
                                />
                                {errors.requirements && <FieldError className="text-xs text-danger mt-1">{errors.requirements}</FieldError>}
                            </TextField>


                        </Fieldset>

                        {/* Form Actions */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800 w-full">
                            <Button
                                type="button"
                                variant="bordered"
                                className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 rounded-lg px-6 font-medium h-11"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11"
                            >
                                Post Opportunity
                            </Button>
                        </div>
                    </Form>
                }
            </div>
        </div>
    );
};

export default NewOpportunityForm;