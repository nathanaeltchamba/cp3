import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen text-center text-white py-20 px-6 sm:px-12">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/office_space.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
        {/* Overlay for dimming the background */}
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 leading-tight">
          Reliable Plumbing Services
        </h1>

        <p className="regular-14 sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto py-8">
          We provide top-quality plumbing services for residential and commercial properties.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/contact">
            <Button type="button" title="Contact Us" variant="btn_green" />
          </Link>
          <Link href="/about">
            <Button type="button" title="Learn More" variant="btn_dark_green" />
          </Link>
        </div>

        {/* Container for stars and text */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-base sm:text-lg font-semibold mb-2">
            Covering the Denver Metro Area
            <span className="text-yellow-400"> For 20 Years</span>
          </p>
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
        </div>
      </div>
    </section>
  )
}

export default Hero
