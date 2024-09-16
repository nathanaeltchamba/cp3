import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="relative -mt-52">
      <div className="relative max-w-screen-xl mx-auto w-full">
        <Image
          src="/bathroom1.jpg"
          alt="pipes"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl"
        />

        <div className="w-full pb-24 relative z-10 bg-white pt-10">
          <div className="mx-auto px-6 max-w-screen-xl">
            <div className="text-center">
              <p className="uppercase regular-18 mt-3 mb-3 text-green-50">
                We are here for you
              </p>
              <div className="flex flex-col gap-5 lg:gap-10">
                <h2 className="bold-40 lg:bold-52">Masters of Plumbing Experts in Service</h2>
                <p className="regular-16 text-gray- xl:max-w-[520px] mx-auto">
                  Our plumbing services ensure you never face a leak or clog alone. With our expert team, you can trust that your plumbing needs are met efficiently and professionally. From installation to repairs, we’re here to help you keep your pipes in top shape.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Location </p>
                <p className="bold-16 text-black"> Denver, CO</p>
              </div>
              <p className="bold-20 mt-2 text-green-50">CP3 Plumbing</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Since</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">2015-Present</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
