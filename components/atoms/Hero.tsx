'use client'

import { MY_CONTACTS } from '@/constants'
import { useTranslations } from 'next-intl'

import LucideIcon from '@/components/atoms/LucideIcon'
import ContactsDisplay from '@/components/molecules/ContactsDisplay'
import next from 'next'

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  const t = useTranslations('Hero')

  const backgroundImage = 'url(assets/hero-bg2.jpg)'

  const handleScrollDown = (): void => {
    const nextSection: HTMLElement | null = document.getElementById('afterTheHeroHeader')

    if (!nextSection) {
      console.error('Could not find the next section')
      return
    }

    nextSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero -- text-neutral-content" style={{ backgroundImage, height: 'calc(100vh - var(--navbar-height))' }}>
      <div
        className="hero-overlay bg-opacity-35"
        style={{ backdropFilter: 'blur(8px)', }}
      >
      </div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 -- text-primary text-5xl font-bold">
            {t('title')}
          </h1>
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

          <br />
          <br />

          <div className="flex justify-center" onClick={handleScrollDown}>
            <LucideIcon
              name="ChevronDown"
              size={64}
              additionalClassName='text-primary -- cursor-pointer bounce-animation'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
