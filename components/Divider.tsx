import Image from 'next/image'
import React from 'react'

const Divider = () => {
    return (
        <section className="py-20">
            <div className="relative max-container grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10 items-center">
                {/* Top-left (Text) */}
                <div className="flex flex-col">
                    <h2 className="bold-40 text-gray-90">Exceptional Plumbing Solutions</h2>
                    <p className="regular-20 text-gray-50 mt-4">
                        Our team of skilled plumbers provides industry-leading solutions for
                        all your plumbing needs, ensuring every project is done with precision
                        and care. Let us handle your plumbing, so you don’t have to.
                    </p>
                </div>

                {/* Top-right (Image) */}
                <div>
                    <Image
                        src="/blue_home.jpg"
                        alt="Plumbing service image"
                        width={720}
                        height={360}
                        className="w-full object-cover object-center rounded-3xl"
                    />
                </div>

                {/* Bottom-left (Image) */}
                <div>
                    <Image
                        src="/blueprint_pencil.jpg"
                        alt="a blueprint with a pencil."
                        width={720}
                        height={360}
                        className="w-full object-cover object-center rounded-3xl"
                    />
                </div>

                {/* Bottom-right (Text) */}
                <div className="flex flex-col">
                    <h2 className="bold-40 text-gray-90">Professional, Trustworthy Service</h2>
                    <p className="regular-20 text-gray-50 mt-4">
                        At CP3 Plumbing, we are committed to providing reliable and professional
                        service. Whether it's installations or repairs, we strive to exceed your
                        expectations with quality work and dependable solutions.
                    </p>
                </div>
            </div>
        </section>



    )
}

export default Divider
