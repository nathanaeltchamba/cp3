import Image from 'next/image';

const ContactComponent = () => {
    return (
        <section className="relative w-full min-h-screen flex justify-center items-center bg-[url('/your-background-image.jpg')] bg-cover bg-center">
            <div className="w-full max-w-lg p-8">
                <h2 className="bold-40 lg:bold-64 mb-6 text-center text-gray-100">Contact Us</h2>
                <form className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-4 regular-16 text-gray-900 bg-white border border-gray-300 rounded-lg h-40"
                    />
                    <button
                        type="submit"
                        className="btn_green w-full py-4 rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactComponent;
