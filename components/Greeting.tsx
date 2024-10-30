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
              <p className="uppercase regular-32 mt-3 mb-3 text-green-50">
                We are here for you
              </p>
              <div className="flex flex-col gap-5 lg:gap-10">
                <h2 className="bold-32 lg:bold-40">Masters of Plumbing, Experts in Remodeling and New Builds</h2>
                <p className="regular-18 text-gray- xl:max-w-[520px] mx-auto">
                  CP3 Plumbing takes pride in our work and we ensure to deliver the best quality possible with our expertise, experience, and the best team to give our clients peace of mind.
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
              <h4 className="bold-20 mt-2 whitespace-nowrap">2018-Present</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
