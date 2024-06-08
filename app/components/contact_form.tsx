'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField } from '@mui/material';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission logic here, like sending the data to a server
        console.log(formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <h1  className="mb-4 tracking-tighter">/contact</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <TextField
                    className="w-full"
                    InputProps={{ style: { borderRadius: 0 } }} 
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    className="w-full"
                    label="Email"
                    InputProps={{ style: { borderRadius: 0 } }} 
                    variant="outlined"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    className="w-full"
                    InputProps={{ style: { borderRadius: 0 } }} 
                    label="Subject"
                    variant="outlined"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <TextField
                    className="w-full"
                    InputProps={{ style: { borderRadius: 0 } }} 
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="message"
                
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"

                    className='rounded-none'
                >
                    Submit
                </Button>
            </form>
        </>
    );
}
