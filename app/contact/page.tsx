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
