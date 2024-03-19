'use client'

import { TECHNOLOGIES } from '@/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface AboutMeProps { }

const AboutMe: React.FC<AboutMeProps> = ({ }) => {
  const t = useTranslations('AboutMe')
  return (
    <div
      id="afterTheHeroHeader"
      className="min-h-screen w-full -- p-8 -- flex items-center justify-center content-start gap-10 -- flex-wrap lg:flex-nowrap"
    >
      <div className="w-full lg:w-[30%] -- flex justify-center items-center shrink-1 ">
        <Image
          className="mask mask-squircle object-cover -- w-[40%] lg:w-[40%] max-w-[300px] min-w-[256px] "
          src={'https://github.com/andersonbosa.png'}
          height={321}
          width={321}
          style={{ color: 'transparent' }}
          alt="Perfil image"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:max-w-[600px] -- basis-9/12 grow -- text-center  ">
        <h1 className="text-4xl font-bold -- text-primary">
          {t('title')}
        </h1>
        <br />

        <section className="text-justify">
          <p>{t('aboutMeContent')}</p>
        </section>
        <br />

        <section className="text-justify">
          <p>{t('recentTechnologies')}</p>
          <br />
          <>
            <div className='flex flex-col gap-2'>
              <div>
                <ul className='flex gap-2'>
                  {TECHNOLOGIES.frontend.map((tech: any) => {
                    return (
                      <>
                        <li className="badge badge-outline">{tech.label}</li>
                      </>
                    )
                  })}
                </ul>
              </div>
              <div>
                <ul className='flex gap-2'>
                  {TECHNOLOGIES.backend.map((tech: any) => {
                    return (
                      <>
                        <li className="badge badge-outline">{tech.label}</li>
                      </>
                    )
                  })}                </ul>
              </div>
              <div>
                <ul className='flex gap-2'>
                  <li className="badge badge-outline">lorem3</li>
                </ul>
              </div>
              <div>
                <ul className='flex gap-2'>
                  <li className="badge badge-outline">lorem4</li>
                </ul>
              </div>
            </div>
          </>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
