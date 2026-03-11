import ContactComponent from '@/components/Contact';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-1] w-full h-full">
                <Image
                    src="/contactus1.jpg"
                    alt="Contact Us Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
            </div>

            {/* Contact Form */}
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
                <ContactComponent />
            </div>
        </div>
    );
};

export default Contact;


// "use client";

// import { useState } from 'react';
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// const ContactComponent = () => {
//     const { executeRecaptcha } = useGoogleReCaptcha();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//         honeypot: '', // Hidden field to catch bots
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         setSuccess('');

//         if (!executeRecaptcha) {
//             setError("reCAPTCHA not ready");
//             setLoading(false);
//             return;
//         }

//         const token = await executeRecaptcha("contact_form");

//         try {
//             const res = await fetch('/api/send-email', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ ...formData, reCaptchaToken: token }),
//             });

//             if (!res.ok) {
//                 const errorData = await res.json();
//                 throw new Error(errorData.message || 'Something went wrong');
//             }

//             const responseData = await res.json();
//             setSuccess(responseData.message || 'Message sent successfully!');
//             setFormData({ name: '', email: '', message: '', honeypot: '' });
//         } catch (err) {
//             const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
//             setError(errorMessage);
//         }

//         setLoading(false);
//     };

//     return (
//         <section className="relative w-full min-h-screen flex justify-center items-center bg-[url('/your-background-image.jpg')] bg-cover bg-center">
//             <div className="w-full max-w-lg p-8">
//                 <h2 className="bold-40 lg:bold-64 mb-6 text-center text-gray-100">Contact Us</h2>

//                 {success && <p className="text-green-400 text-2xl text-center mb-4">{success}</p>}
//                 {error && <p className="text-red-600 text-2xl text-center mb-4">{error}</p>}

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//                     <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg" />

//                     <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg" />

//                     <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg h-40" />

//                     {/* Honeypot: hidden from real users, bots will fill it in */}
//                     <input
//                         type="text"
//                         name="honeypot"
//                         value={formData.honeypot}
//                         onChange={handleChange}
//                         style={{ display: 'none' }}
//                         tabIndex={-1}
//                         autoComplete="off"
//                         aria-hidden="true"
//                     />

//                     <button type="submit" className="btn_green w-full py-4 rounded-lg" disabled={loading}>
//                         {loading ? 'Sending...' : 'Send Message'}
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default ContactComponent;