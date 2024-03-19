'use client'

import { MY_CONTACTS } from '@/constants'
import { useTranslations } from 'next-intl'

import LucideIcon from '@/components/atoms/LucideIcon'
import TypewriterText from '@/components/atoms/TypewriterText'
import ContactsDisplay from '@/components/molecules/ContactsDisplay'

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  const t = useTranslations('Hero')

  const handleScrollDown = (): void => {
    const nextSection: HTMLElement | null = document.getElementById('afterTheHeroHeader')

    if (!nextSection) {
      console.error('Could not find the next section')
      return
    }

    nextSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="hero" style={{ height: 'calc(100vh - var(--navbar-height))' }}>
        <div
          className="hero-overlay -- bg-base-100 "
        >
        </div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 -- text-9xl font-bold text-end -- text-primary bg-gradient-to-r from-primary-500 to-accent-700">
              {t('title')}
            </h1>
            <div className="mb-5 min-h-10 w-full" >
              <TypewriterText
                className="text-xl -- text-base-content"
                sentences={['Software Engineer', 'Security Analyst', 'Critical thinker']}
              />
            </div>
            <div className="mb-5 -- flex justify-between flex-wrap gap-[1rem] " >
              <ContactsDisplay contacts={MY_CONTACTS} className='bg-neutral text-base-100' />
            </div>

            <br />
            <br />

            <div className="flex justify-center" >
              <span onClick={handleScrollDown}>
                <LucideIcon
                  name="ChevronDown"
                  size={64}
                  className='cursor-pointer bounce-animation -- text-neutral'
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
