'use client'

import { ArrowUpToLine } from 'lucide-react'
import { useEffect, useState } from 'react'
import ToolTip from './ToolTip'
import { useTranslations } from 'next-intl'

// const StyledScrollToTopButton = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   background-color: #007bff; /* Cor de fundo do botão */
//   color: #fff; /* Cor do texto do botão */
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   cursor: pointer;
//   z-index: 1000; /* Garante que o botão seja exibido acima de outros elementos */

//   &:hover {
//     background-color: #0056b3; /* Cor de fundo do botão ao passar o mouse */
//   }
// `

interface ScrollToTopButtonProps { }

function ScrollToTopButton(props: ScrollToTopButtonProps): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(
    () => {
      // Function to verify that the page was rolled down
      const handleScroll = () => {
        // Height in pixels to consider that the page was rolled down
        const threshold = window.innerHeight - 128
        if (window.scrollY > threshold) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      // Adds a scroll event listener when the component is assembled
      window.addEventListener('scroll', handleScroll)

      // Removes the scroll event listener when the component is dismantled
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    []
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const t = useTranslations('ScrollToTopButton')
  return (
    <>
      {isVisible && (
        <button
          className="fixed p-2 -- bottom-4 right-4 *:-- btn btn-circle -- btn-neutral btn-outline"
          onClick={scrollToTop}
        >
          <ToolTip tip={t('tooltip')} className='tooltip-left'>
            <ArrowUpToLine />
          </ToolTip>
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
