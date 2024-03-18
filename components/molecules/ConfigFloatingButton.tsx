'use client'

import appConfiguration, { IAppConfiguration } from '@/config'
import { setOpen } from '@/lib/features/configButton/configButtonSlice'
import { Settings } from 'lucide-react'
import { useDispatch } from 'react-redux'

interface ConfigFloatingButtonProps { }

const ConfigFloatingButton: React.FC<ConfigFloatingButtonProps> = () => {
  const dispatch = useDispatch()

  const handleButtonClick = (): void => {
    dispatch(setOpen())
  }
  function getPositionFromConfiguration(appConfig: IAppConfiguration) {
    const mappedPositions = {
      top: {
        left: 'top-3 left-3',
        right: 'top-3 right-3',
      },
      bottom: {
        left: 'bottom-3 left-3',
        right: 'bottom-3 right-3',
      },
    }

    switch (appConfig.features.superButton.position) {
      case 'bottom-right':
        return mappedPositions.bottom.right
      default:
        return mappedPositions.bottom.right
    }
  }

  const buttonPosition = getPositionFromConfiguration(appConfiguration)


  return (
    <button
      className={`btn -- fixed p-3 -- ${buttonPosition} -- rounded-full shadow-lg -- text-base-content -- hover:scale-105`}
      onClick={handleButtonClick}
    >
      <Settings />
    </button>
  )
}

export default ConfigFloatingButton
