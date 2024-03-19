'use client'

import { PageSectionsID } from '@/constants'
import { useTranslations } from 'next-intl'

import LucideIcon from '@/components/atoms/LucideIcon'
import TypewriterText from '@/components/atoms/TypewriterText'
import GlowingText from '../atoms/GlowingText'

interface HeroProps { }

function Hero(props: HeroProps): React.JSX.Element {
  const t = useTranslations('Hero')

  const handleScrollDown = (): void => {
    const nextSection: HTMLElement | null = document.getElementById(PageSectionsID.aboutMe)

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
          <div className="max-w-md lg:max-w-full">
            <h1 className="mb-5">
              <GlowingText text={t('title')} className='text-9xl font-extrabold' />
            </h1>
            <div className="mb-5 min-h-10 w-full" >
              <TypewriterText
                className="text-xl -- text-base-content"
                sentences={['Software Engineer', 'Security Analyst', 'Critical thinker']}
              />
            </div>

            <br />
            <br />

            <div className="flex justify-center bounce-animation" >
              <span onClick={handleScrollDown}>
                <LucideIcon
                  name="ChevronDown"
                  size={64}
                  className='cursor-pointer -- text-accent'
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
