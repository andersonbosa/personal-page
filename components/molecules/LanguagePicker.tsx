'use client'

import { LanguageItem } from '@/types'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { updateUrlLocale } from '@/utils'
import { usePathname } from 'next/navigation'
import Dropdown from '../atoms/Dropdown'
import TranslatorBtn from '../atoms/Icons/TranslatorBtn'

interface LanguagePickerProps {
  availableLanguages: LanguageItem[]
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ availableLanguages }) => {
  const t = useTranslations('LocaleSwitcher')
  const currentPathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState<string | undefined>(useLocale())

  const handleLanguageChange = (language: LanguageItem) => {
    setCurrentLocale(language.id)

    const newUrl = updateUrlLocale(currentPathname, language.id)

    console.log('handleLanguageChange', newUrl, currentPathname, language.id)

    window.location.pathname = language.id
  }

  useEffect(
    () => {
      // Your logic to set the default language on app load
      // Use setCurrentLocale to update the default language
      // Example: setCurrentLocale(findLanguageById(defaultLanguage));
      // setCurrentLocale(currentLocale)
    },
    [] // Run once on component mount
  )

  const createLanguageListItem = (language: LanguageItem, index: number): React.ReactElement => {
    return (
      <li key={language.id} tabIndex={index + 1}>
        <button
          className={currentLocale === language.id ? 'active' : ''}
          onClick={() => handleLanguageChange(language)}
          title={t('switchLocale', { locale: language.label })}
        >
          <span className="opacity-70">
            <Image src={`assets/icons/flags/${language.icon}.svg`} width={24} height={24} alt={`${language.label} flag`} />
          </span>
          <span className="font-[sans-serif]">
            {t(`languages.${language.id}`)}
          </span>
          <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
            {language.id}
          </span>
        </button>
      </li>
    )
  }

  return (
    <Dropdown
      additionalClassName='dropdown-end'
      buttonContent={<TranslatorBtn />}
      menuContent={<>{availableLanguages.map(createLanguageListItem)}</>}
    />
  )
}

export default LanguagePicker
