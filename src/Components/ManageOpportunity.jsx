"use client"
import { Envelope } from '@gravity-ui/icons';
import { AlertDialog, Button, Description, Select, FieldError, Fieldset, Input, Label, ListBox, Modal, ModalFooter, Surface, TextArea, TextField, Form } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ManageOpportunity = ({opportunity}) => {
            const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    const router=useRouter()

const handleDelete=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${opportunity._id}`, {
        method:'DELETE',
        headers:{
             'content-type':'application/json',
        }
    });

    const result=await res.json();
    toast.error('Startup deleted.');
    router.refresh()
}


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



   
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${opportunity._id}`,{
  method:'PATCH',
  headers:{
     'content-type':'application/json',
     
  },
  body:JSON.stringify(data)
});

const result=await res.json()

        if (res.ok) {
            toast.success("Opportunity posted successfully!");
            router.refresh();
            setIsUpdateOpen(false);
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
        <div className="group relative w-full rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)] transition-all duration-400 hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_20px_50px_-8px_rgba(0,0,0,0.5)]">
            
            {/* Specular glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-2xl" />

            <div className="relative flex flex-col space-y-4">
                
                {/* Header: Title */}
                <div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-[0.15em] uppercase block mb-1">Opportunity</span>
                    <h1 className="text-xl font-bold tracking-tight text-white antialiased">
                        {opportunity.roleTitle}
                    </h1>
                </div>

                {/* Meta Row: Commitment and Work Type pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <span className="text-slate-400 font-medium normal-case mr-1">Commitment:</span> {opportunity.commitmentLevel}
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                        <span className="text-slate-500 font-medium normal-case mr-1">Type:</span> {opportunity.workType}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.02] to-transparent" />

                {/* Requirements Block */}
                <div className="space-y-1">
                    <h1 className="text-[10px] font-bold text-slate-400 tracking-[0.15em] uppercase">Requirements</h1>
                    <h1 className="text-sm text-slate-300 leading-relaxed font-normal antialiased">
                        {opportunity.requirements}
                    </h1>
                </div>

                {/* Footer: Deadline tracking */}
                <div className="pt-2 flex items-center justify-between border-t border-white/[0.04]">
                    <h1 className="text-[10px] font-bold text-slate-500 tracking-[0.1em] uppercase">Application Deadline</h1>
                    <h1 className="text-xs font-semibold font-mono text-amber-400 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                        {opportunity.deadline}
                    </h1>
                </div>

            <div className='flex items-center justify-between'>
                <AlertDialog>
                  <Button variant="danger">Delete Opportunity</Button>
                  <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                      <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                          <AlertDialog.Icon status="danger" />
                          <AlertDialog.Heading>Delete Opportunity permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                          <p>
                            This will permanently delete the Opportunity. This action cannot be undone.
                          </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button slot="close" variant="tertiary">
                            Cancel
                          </Button>
                          <Button onClick={handleDelete} slot="close" variant="danger">
                            Delete Opportunity
                          </Button>
                        </AlertDialog.Footer>
                      </AlertDialog.Dialog>
                    </AlertDialog.Container>
                  </AlertDialog.Backdrop>
                </AlertDialog>

     <Modal isOpen={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
        <Button onPress={() => setIsUpdateOpen(true)} variant="secondary">Update Opportunity</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md flex flex-col max-h-[90vh]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Startup</Modal.Heading>
             
              </Modal.Header>
              <Modal.Body className="p-6 overflow-y-auto max-h-[70vh]">
                <Surface variant="default">
                  
                  <Form onSubmit={handleSubmit} className="space-y-8" validationErrors={errors} validationBehavior='aria'>

                        {/* SECTION 1: Job Information */}
                        <Fieldset className="space-y-6 w-full">
                            <legend className="text-lg font-medium text-zinc-300 border-b border-zinc-900 w-full pb-2 mb-2">
                                Opportunity Information
                            </legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <TextField isRequired defaultValue={opportunity.roleTitle} name="roleTitle" isInvalid={!!errors.roleTitle} className="flex flex-col gap-1 w-full">
                                    <Label className="text-zinc-400 font-medium text-sm">Role Title</Label>
                                    <Input placeholder="e.g. Senior Frontend Engineer" className={textInputClass} />
                                    {errors.roleTitle && <FieldError className="text-xs text-danger mt-1">{errors.roleTitle}</FieldError>}
                                </TextField>

                                <Select isRequired defaultValue={opportunity.commitmentLevel} className={selectBoxClass} name="commitmentLevel" isInvalid={!!errors.commitmentLevel}>
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
                                        <Select isRequired defaultValue={opportunity.workType} className={selectBoxClass} name="workType" isInvalid={!!errors.workType}>
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

                                <TextField isRequired defaultValue={opportunity.deadline} name="deadline" isInvalid={!!errors.deadline} className="flex flex-col gap-1 w-full">
                                    <Label className="text-zinc-400 font-medium text-sm">Deadline</Label>
                                    <Input type="date" className={textInputClass} />
                                    {errors.deadline && <FieldError className="text-xs text-danger mt-1">{errors.deadline}</FieldError>}
                                </TextField>
                            </div>
                        </Fieldset>

                        {/* SECTION 2: Job Description */}
                        <Fieldset className="space-y-6 w-full">




                            <TextField isRequired defaultValue={opportunity.requirements} name="requirements" isInvalid={!!errors.requirements} className="flex flex-col gap-1 w-full">
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
                                Update Opportunity
                            </Button>
                        </div>
                    </Form>

                </Surface>
              </Modal.Body>
           
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
            </div>

            </div>
        </div>
    );
};

export default ManageOpportunity;