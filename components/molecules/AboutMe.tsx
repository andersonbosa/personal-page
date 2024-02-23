'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface AboutMeProps { }

const AboutMe: React.FC<AboutMeProps> = ({ }) => {
  const t = useTranslations('AboutMe')
  return (
    <div
      id="afterTheHeroHeader"
      className="min-h-screen w-full -- flex items-center justify-center content-start gap-10 -- flex-wrap lg:flex-nowrap -- p-8"
    >
      <div className="w-full lg:w-[40%] -- flex justify-center items-center shrink-1 ">
        <Image
          className="mask mask-squircle object-cover  lg:w-[60%] max-w-[500px] min-w-[321px]"
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
          <p>{t('content')}</p>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
