import Image from 'next/image'
import React from 'react'

const Test = () => {
    return (
        <section className="relative py-60 bg-[url('/pipes.jpg')] bg-cover bg-center text-white">
            <div className="relative max-w-screen-xl mx-auto w-full">
                <div className="relative w-full z-10 bg-opacity-70 bg-black py-10 rounded-3xl">
                    <div className="mx-auto px-6 max-w-screen-xl">
                        <div className="text-center">
                            <p className="uppercase regular-18 mt-3 mb-3 text-green-50">
                                We are here for you
                            </p>
                            <div className="flex flex-col gap-5 lg:gap-10">
                                <h2 className="bold-40 lg:bold-64">Your Trusted Plumbing Guide</h2>
                                <p className="regular-16 xl:max-w-[520px] mx-auto text-gray-300">
                                    Our plumbing services ensure you never face a leak or clog alone. With our expert team, you can trust that your plumbing needs are met efficiently and professionally. From installation to repairs, we’re here to help you keep your pipes in top shape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Test
