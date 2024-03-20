'use client'

import { ArrowDown, ArrowUpToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import ToolTip from '../theme/ToolTip'


interface ScrollControllerProps {
}

function ScrollController({ }: ScrollControllerProps): React.JSX.Element {
  const t = useTranslations('ScrollController')

  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollToBottom = () => {
    scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    })
  }

  // const observerRef: IntersectionObserver | any = useRef(null)

  const scrollToIntersectionedSection = (entries: any[]) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        console.log('target id', entry.target.id)
        console.log('isIntersecting', entry.isIntersecting)
        document.getElementById(entry.target.id)?.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-3 right-3 -- flex flex-col" >
          <ToolTip tip={t('tooltip_up')} className='tooltip-left'>
            <button
              className="relative -- scale-75 -- btn btn-circle md:btn-outline btn-neutral"
              onClick={scrollToTop}
            >
              <ArrowUpToLine />
            </button>
          </ToolTip>
          <button
            className="relative -- scale-75 -- btn btn-circle btn-outline btn-neutral -- hidden md:flex"
            onClick={scrollToBottom}
          >
            <ArrowDown />
          </button>
        </div>
      )}
    </>
  )
}

export default ScrollController
