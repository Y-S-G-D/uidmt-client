import React from 'react'
import Image from 'next/image'

const BackgroundHero = () => {
  return (
    <div
    className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
            src="/background.svg"
            alt="Happy Student"
            fill
            className="object-cover"
        />
    </div>
  )
}

export default BackgroundHero