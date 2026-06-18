"use client"
import { createStartup, uploadImageToImgBB } from '@/lib/api';
import { Envelope } from '@gravity-ui/icons';
import { Button, Select, Description, FieldError, Label, ListBox, Modal, TextArea, TextField, Surface, Input } from '@heroui/react';
import React, { useCallback, useRef, useState } from 'react';

const FounderStartup = ({user}) => {

const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const inputRef = useRef(null);

  const handleFile = (file) => {
    setUploadError("");
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Only image files are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size must not exceed 5 MB.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setUploadedFile({ file, previewUrl });
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const removeFile = () => {
    if (uploadedFile?.previewUrl) URL.revokeObjectURL(uploadedFile.previewUrl);
    setUploadedFile(null);
    setUploadError("");
    if (inputRef.current) inputRef.current.value = "";
  };


const [isLoading, setIsLoading] = useState(false);

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const startup = Object.fromEntries(formData.entries());

  try {
    setIsLoading(true);

    // only upload if a file was actually selected
    if (uploadedFile?.file) {
      const imageUrl = await uploadImageToImgBB(uploadedFile.file);
      startup.logo_url = imageUrl;
    }

    startup.status='pending'
    startup.founderId=user?.id;

    const postStartup = await createStartup(company);
    

  } catch (err) {
    console.error('Failed to create startup:', err.message);
  } finally {
    setIsLoading(false);
  }
};

    return (
        <div>
            <Modal>
        <Button variant="secondary">Create Company</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md flex flex-col max-h-[90vh]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Create Company</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below and we'll get back to you. The modal adapts automatically
                  when the keyboard appears on mobile.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6 overflow-y-auto max-h-[70vh]">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">

<div className="flex">
                    <TextField className="w-full" name="company_name" type="text" variant="secondary">
                      <Label>Company Name</Label>
                      <Input placeholder="Enter Company name" />
                    </TextField>

                    <Select className="w-full" name="industry" placeholder="Select one">
                      <Label>Industry / Category</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="technology" textValue="Technology">Technology<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="healthcare" textValue="Healthcare">Healthcare<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="finance" textValue="Finance">Finance<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="education" textValue="Education">Education<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="retail" textValue="Retail">Retail<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="manufacturing" textValue="Manufacturing">Manufacturing<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="real-estate" textValue="Real Estate">Real Estate<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="media" textValue="Media & Entertainment">Media & Entertainment<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="other" textValue="Other">Other<ListBox.ItemIndicator /></ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    </div>

                    <TextField className="w-full" name="website_url" type="url" variant="secondary">
                      <Label>Website URL</Label>
                      <Input placeholder="https://yourcompany.com" />
                    </TextField>

                   <div className="flex">
                     <TextField className="w-full" name="location" type="text" variant="secondary">
                      <Label>Location</Label>
                      <Input placeholder="City, Country" />
                    </TextField>

                    <Select className="w-full" name="employee_count" placeholder="Select one">
                      <Label>Employee Count Range</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="1-10" textValue="1–10 (Solo / Micro)">1–10 (Solo / Micro)<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="11-50" textValue="11–50 (Small)">11–50 (Small)<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="51-200" textValue="51–200 (Mid-size)">51–200 (Mid-size)<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="201-500" textValue="201–500">201–500<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="501-1000" textValue="501–1,000">501–1,000<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="1001-5000" textValue="1,001–5,000">1,001–5,000<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="5000+" textValue="5,000+ (Enterprise)">5,000+ (Enterprise)<ListBox.ItemIndicator /></ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                   </div>

                    {/* Dropzone */}
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium">Company Logo</Label>

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
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/60 hover:bg-muted/40"
                            }
                          `}
                        >
                          {/* Upload icon */}
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="17 8 12 3 7 8" />
                              <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-foreground">
                              {dragActive ? "Drop image here" : "Drag & drop or click to upload"}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              PNG, JPG, WEBP — max 5 MB
                            </p>
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
                        <div className="relative flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3">
                          <img
                            src={uploadedFile.previewUrl}
                            alt="Preview"
                            className="w-12 h-12 rounded-lg object-cover shrink-0 border border-border"
                          />
                          <div className="flex flex-col min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {uploadedFile.file.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="ml-auto shrink-0 flex items-center justify-center w-7 h-7 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove file"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </div>
                      )}

                      {uploadError && (
                        <p className="text-xs text-destructive mt-0.5">{uploadError}</p>
                      )}
                    </div>

                    <TextField
                      isRequired
                      name="description"
                      validate={(value) => {
                        if (value.length < 10) return "Description must be at least 10 characters";
                        return null;
                      }}
                    >
                      <Label>Brief Description</Label>
                      <TextArea placeholder="Tell us about your company's mission and culture..." />
                      <Description>Minimum 10 characters</Description>
                      <FieldError />
                    </TextField>

   <Modal.Footer>
                <Button slot="close" variant="secondary">Cancel</Button>
                <Button type="submit">Create Company</Button>
              </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
           
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
        </div>
    );
};

export default FounderStartup;