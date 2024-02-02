'use client'

import { LanguageItem } from '@/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Dropdown from '../atoms/Dropdown'
import TranslatorBtn from '../atoms/Icons/TranslatorBtn'

interface LanguagePickerProps {
  availableLanguages: LanguageItem[]
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ availableLanguages }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageItem | null>(null)

  const handleLanguageChange = (language: LanguageItem) => {
    // Lógica para alterar a linguagem selecionada
    setSelectedLanguage(language)
    // Adicione qualquer lógica adicional aqui, como trocar a tradução da página
  }

  useEffect(
    () => {
      // Your logic to set the default language on app load
      // Use setSelectedLanguage to update the default language
      // Example: setSelectedLanguage(findLanguageById(defaultLanguage));
    },
    [] // Run once on component mount
  )

  const createLanguageListItem = (language: LanguageItem, index: number): React.ReactElement => {
    return (
      <li key={language.id} tabIndex={index + 1}>
        <button
          className={selectedLanguage?.id === language.id ? 'active' : ''}
          onClick={() => handleLanguageChange(language)}
        >
          <span className="opacity-70">
            <Image src={`assets/icons/flags/${language.icon}.svg`} width={24} height={24} alt={`${language.label} flag`} />
          </span>
          <span className="font-[sans-serif]">{language.label}</span>
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
