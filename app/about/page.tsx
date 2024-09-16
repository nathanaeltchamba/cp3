import Image from 'next/image';

const About = () => {
    return (
        <section className="min-h-screen w-full bg-white pt-20">
            {/* About Us Section */}
            <div
                className="relative max-w-screen-xl mx-auto py-20 px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-12">
                {/* Overlay for readability */}
                <div className="absolute inset-0"></div>

                <div className="relative z-10 lg:flex-1 text-center lg:text-left">
                    <h1 className="bold-52 lg:bold-88 text-green-50">About Us</h1>
                </div>

                <div className="relative z-10 lg:flex-1">
                    <p className="regular-20 text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0">
                        CP3 Plumbing has been providing reliable plumbing services for over 20 years. Our expertise covers residential and commercial projects, ensuring that every client's plumbing needs are met with precision and professionalism.
                    </p>
                </div>
            </div>

            {/* Section 1 */}
            <div className="bg-gray-100 py-20">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-0">
                    {/* Text on the left */}
                    <div className="lg:flex-1">
                        <h2 className="bold-40 text-green-50">Our Mission</h2>
                        <p className="regular-20 text-gray-600 mt-4">
                            Our mission is to provide exceptional plumbing services that offer lasting solutions to our clients' problems. We aim to build trust and offer value with every project, big or small.
                        </p>
                    </div>
                    {/* Image on the right */}
                    <div className="lg:flex-1">
                        <Image
                            src="/kitchen3.jpg"  // Add the correct image path
                            alt="Our mission"
                            width={720}
                            height={480}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 - Alternating layout */}
            <div className="py-20">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 px-6 lg:px-0">
                    {/* Text on the right */}
                    <div className="lg:flex-1">
                        <h2 className="bold-40 text-green-50">Why Choose Us</h2>
                        <p className="regular-20 text-gray-600 mt-4">
                            CP3 Plumbing stands out for its dedication to customer satisfaction and its commitment to providing timely, reliable, and high-quality plumbing solutions. From small repairs to large installations, we do it all.
                        </p>
                    </div>
                    {/* Image on the left */}
                    <div className="lg:flex-1">
                        <Image
                            src="/kitchen2.jpg"  // Add the correct image path
                            alt="Why Choose Us"
                            width={720}
                            height={480}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-100 py-20">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-0">
                    {/* Text on the left */}
                    <div className="lg:flex-1">
                        <h2 className="bold-40 text-green-50">Our Values</h2>
                        <p className="regular- text-gray-600 mt-4">
                            Integrity, quality, and trust form the foundation of our work. We believe in transparent communication, fair pricing, and delivering results that last.
                        </p>
                    </div>
                    {/* Image on the right */}
                    <div className="lg:flex-1">
                        <Image
                            src="/open-kitchen.jpg" 
                            alt="Our Values"
                            width={720}
                            height={480}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
