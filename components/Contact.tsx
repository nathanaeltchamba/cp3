"use client";

import { useState } from 'react';

const ContactComponent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const responseData = await res.json();
            setSuccess(responseData.message || 'Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
            setError(errorMessage);
        }

        setLoading(false);
    };

    return (
        <section className="relative w-full min-h-screen flex justify-center items-center bg-[url('/your-background-image.jpg')] bg-cover bg-center">
            <div className="w-full max-w-lg p-8">
                <h2 className="bold-40 lg:bold-64 mb-6 text-center text-gray-100">Contact Us</h2>

                {/* Display success or error messages */}
                {success && <p className="text-green-400 text-2xl text-center mb-4">{success}</p>}
                {error && <p className="text-red-600 text-2xl text-center mb-4">{error}</p>}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg h-40"
                        required
                    />
                    <button
                        type="submit"
                        className="btn_green w-full py-4 rounded-lg flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactComponent;
