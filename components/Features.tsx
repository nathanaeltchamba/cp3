import { PLUMBING_FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-20 pb-52">
      <div className="max-container padding-container relative w-full">
        <div className="z-20 flex w-full flex-col lg:w-[80%] mx-auto">
          <div className='relative'>
            <h2 className="bold-40 lg:bold-64 text-gray-90 text-center">Our Solutions For Your Problems</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {PLUMBING_FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features