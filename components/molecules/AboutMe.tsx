'use client'

import Image from 'next/image'

interface AboutMeProps { }

const AboutMe: React.FC<AboutMeProps> = ({ }) => {
  return (
    <section
      id="afterTheHeroHeader"
      className="min-h-screen -- flex flex-wrap -- text-neutral-content"
    >
      <div className="flex justify-center items-center w-full md:w-1/2">
        <Image
          className="mask mask-squircle"
          src={'https://github.com/andersonbosa.png'}
          height={321}
          width={321}
          alt="Perfil image"
        />
      </div>

      <div className="w-full md:w-1/2 text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Olá! Eu sou o Anderson</h1>
        <p className="text-justify mb-8">
          Mollit ad officia cillum laborum veniam voluptate cillum. Cillum
          officia ad non fugiat esse. Tempor minim nulla nostrud esse esse
          officia ut incididunt laborum non mollit nisi laborum elit.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
