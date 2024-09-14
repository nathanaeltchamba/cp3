import Image from 'next/image'
import Button from './Button'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-48 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-background" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 pt-24">
        <h1 className="bold-52 lg:bold-88 text-white">Reliable Plumbing Services</h1>
        <p className="regular-16 mt-6 text-gray-300 xl:max-w-[520px]">
          We provide top-quality plumbing services for residential and commercial properties. Whether you need urgent repairs or planned installations, our experienced team is here to ensure everything runs smoothly and efficiently.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <p className="regular-16 lg:regular-20 ml-1 text-white">
            Covering the Denver Metro Area
            <span className="bold-16 lg:bold-24 text-yellow-400"> For 20 Years</span>
          </p>

        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href="/contact">
            <Button
              type="button"
              title="Contact Us"
              variant="btn_green"
            />
          </Link>
          <Link href="/about">
            <Button
              type="button"
              title="Learn More"
              variant="btn_dark_green"
            />
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero
