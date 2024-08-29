import React, { LegacyRef, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm('service_erxgbwh', 'template_zqmjxft', form.current!, {
                publicKey: 'C-5EKvRey2-TwNGR2',
            })
            .then(
                () => {
                    (e.target as EventTarget & HTMLFormElement).reset()
                },
                (_error) => {
                    console.log('FAILED...');
                    (e.target as EventTarget & HTMLFormElement).reset()
                },
            );
    };

    return (
        <form ref={form as unknown as LegacyRef<HTMLFormElement> | undefined} onSubmit={sendEmail} className='flex flex-col gap-3 w-full md:w-[70%]'>
            <label>Name</label>
            <input type="text" name="user_name" className='rounded-lg bg-indigo-950' required/>
            <label>Email</label>
            <input type="email" name="user_email" className='rounded-lg bg-indigo-950' required/>
            <label>Message</label>
            <textarea name="message" className='rounded-lg bg-indigo-950' required/>
            <div className='flex justify-center w-full p-3'>
                <input type="submit" value="Send" className='w-max text-indigo-500 font-mono font-bold cursor-pointer' />
            </div>
        </form>
    );
}
