'use client'

import { useTranslations } from 'next-intl'
import ContactsDisplay from '../molecules/ContactsDisplay'
import { MY_CONTACTS } from '@/constants'

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  const t = useTranslations('Hero')

  const backgroundImage = 'url(assets/hero-bg2.jpg)'
  return (
    <div className="hero" style={{ backgroundImage, height: 'calc(100vh - var(--navbar-height))' }}>
      <div
        className="hero-overlay bg-opacity-35"
        style={{ backdropFilter: 'blur(8px)', }}
      >
      </div>
      <div className="hero-content text-center -- text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{t('title')}</h1>
          <p className="mb-5">
            Job titles animated. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque
            aut repudiandae et a id nisi.
          </p>
          <div className="mb-5 -- flex justify-between flex-wrap gap-y-[1rem]" >
            <ContactsDisplay
              className='btn-primary  btn-outline -- flex justify-between'
              contacts={MY_CONTACTS}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
