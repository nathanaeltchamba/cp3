import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className="relative py-60 bg-[url('/kitchen.jpg')] bg-cover bg-center text-white">
            <div className="relative max-w-screen-xl mx-auto w-full">
                <div className="relative w-full z-10 bg-opacity-50 bg-black py-10 rounded-3xl">
                    <div className="mx-auto px-6 max-w-screen-xl">
                        <div className="text-center">
                            <p className="uppercase regular-32 mt-3 mb-3 text-green-500">
                                Expert Plumbing Solutions
                            </p>
                            <div className="flex flex-col gap-5 lg:gap-10">
                                <h2 className="bold-40 lg:bold-64">Dependable Service Every Time</h2>
                                <p className="regular-16 xl:max-w-[520px] mx-auto text-gray-200">
                                Our dedicated team of professionals is here to resolve all your plumbing issues with precision and care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner
