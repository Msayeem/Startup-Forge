"use client"
import { postApplication } from '@/lib/api';
import { LayoutHeaderCells } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { ArrowRight, FileText, Link } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ApplyForm = ({opportunity, user}) => {

    console.log(opportunity)

    const [formData, setFormData] = useState({
        resumeLink: '',
        portfolioLink: '',
        additionalNotes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Combine the pre-existing job/applicant data with the new form data
        const submissionData = {
            opportunityId: opportunity?._id,
            roleTitle: opportunity?.roleTitle,
            opportunityName: opportunity?.opportunityName,
            founderId:opportunity.founderId,
                workType:opportunity?.workType,
            applicantId: user?.id,
            applicantName: user?.name,
            applicantEmail: user?.email,
        
            status:"pending",
            ...formData
        };

        try {
            console.log('Submitting Application:', submissionData);
            const res = await postApplication(submissionData);

            if (res?.insertedId) {
               toast.success('Applied successfully!')
                setFormData({ resumeLink: '', portfolioLink: '', additionalNotes: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
           toast.error('Failed to submit application.')
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
       <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
            {/* Header Section */}
            <div className="mb-6">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Application Form
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
                    Apply for {opportunity?.title || opportunity?.roleTitle || 'this position'}
                </h2>
                {user?.name && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Applying as: <span className="font-medium text-zinc-700 dark:text-zinc-300">{user.name}</span> ({user.email})
                    </p>
                )}
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800 mb-6" />

            {/* Hero UI Form wrapper */}
            <Form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

                {/* 1. Resume Link (Required) */}
                <TextField isRequired name="resumeLink" className="w-full">
                    <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
                        <FileText className="w-4 h-4 text-zinc-400" />
                        Resume Link
                    </Label>
                    <Input
                        type="url"
                        placeholder="https://drive.google.com/... or dropbox.com/..."
                        value={formData.resumeLink}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                    />
                    <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                        Provide a public link to your resume (Google Drive, Notion, Dropbox, etc.)
                    </Description>
                    <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>

                {/* 2. Portfolio Link (Optional) */}
                <TextField isRequired name="portfolioLink" className="w-full">
                    <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
                        <Link className="w-4 h-4 text-zinc-400" />
                        Portfolio / Website
                    </Label>
                    <Input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        value={formData.portfolioLink}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                    />
                    <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                        Link to your GitHub, Behance, or personal website.
                    </Description>
                </TextField>

                {/* 3. Additional Notes / Cover Letter (Optional) */}
                <TextField isRequired name="additionalNotes" className="w-full">
                    <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
                        <LayoutHeaderCells className="w-4 h-4 text-zinc-400" />
                        Motivational Message
                    </Label>
                    <textarea
                        name="additionalNotes"
                        rows={4}
                        placeholder="Write your motivation you'd like to share with the founder..."
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition resize-none"
                    />
                </TextField>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                    <Button
                        type="reset"
                        isDisabled={isSubmitting}
                        onClick={() => setFormData({ resumeLink: '', portfolioLink: '', additionalNotes: '' })}
                        className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition disabled:opacity-50"
                    >
                        Clear Form
                    </Button>
                    <Button
                        type="submit"
                        isDisabled={isSubmitting}
                        className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm flex items-center gap-2 transition disabled:opacity-70"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ApplyForm;