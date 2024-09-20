import Link from 'next/link';
import React from 'react';

const Action = () => {
    return (
        <section className="relative py-20 bg-green-900 text-white">
            <div className="relative max-w-screen-xl mx-auto w-full">
                <div className="relative w-full bg-green-900 py-8 rounded-3xl">
                    <div className="mx-auto px-6 max-w-screen-xl">
                        <div className="text-center">
                            <p className="uppercase regular-40 mt-3 mb-3 text-white">
                                Start With Us
                            </p>
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <p className="regular-20 xl:max-w-[520px] mx-auto text-gray-100">
                                    Our dedicated team of professionals is here to resolve all your plumbing issues with precision and care.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="inline-block px-4 py-2 bg-white text-green-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                                        Get Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Action;
