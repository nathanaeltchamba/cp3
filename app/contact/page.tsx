import ContactComponent from '@/components/Contact';

const Contact = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background Image with Blur Effect */}
            <div className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/contactus1.jpg')" }}>
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
