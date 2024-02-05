'use client'

import { setOpen } from '@/lib/features/configButton/configButtonSlice'
import { Settings } from 'lucide-react'
import { useDispatch } from 'react-redux'

interface ConfigFloatingButtonProps { }

const ConfigFloatingButton: React.FC<ConfigFloatingButtonProps> = () => {
  const dispatch = useDispatch()

  const handleButtonClick = (): void => {
    dispatch(setOpen())
  }

  const floatingPositions = {
    top: {
      left: 'top-3 left-3',
      right: 'top-3 right-3',
    },
    bottom: {
      left: 'bottom-3 left-3',
      right: 'bottom-3 right-3',
    },
  }

  return (
    <button
      className={`btn -- fixed p-3 -- ${floatingPositions.bottom.right} -- rounded-full shadow-lg --  text-base-content`}
      onClick={handleButtonClick}
    >
      <Settings />
    </button>
  )
}

export default ConfigFloatingButton
