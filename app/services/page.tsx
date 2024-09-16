import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Features from '@/components/Features';

const Services = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="relative h-[50vh] lg:h-[60vh] bg-gray-900 text-white flex flex-col justify-center items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/bathroom2.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center px-6 lg:px-12">
                    <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                        Services
                    </h1>
                </div>
            </section>


            {/* Services Section */}
            <Features />

            {/* Call to Action Section */}
            <section className="py-20 bg-gray-100 text-center">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-6">
                        Contact us today to schedule a consultation or get a quote for your plumbing needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
                        Contact Us
                    </Link>
                </div>
            </section>


        </div>
    );
};

export default Services;
