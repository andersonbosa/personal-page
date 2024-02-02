'use client'

import { useEffect, useState } from 'react'
import TranslatorBtn from '../atoms/Icons/TranslatorBtn'
import Image from 'next/image'
import { LanguageItem } from '@/types'

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
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" >
          <TranslatorBtn />
        </div>

        <ul className="menu menu-sm gap-1 dropdown-content z-[1] -- bg-base-200 text-base-content -- top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto -- rounded-box border border-white/5 shadow-2xl outline outline-1 outline-black/5">
          {availableLanguages.map(createLanguageListItem)}
        </ul>
      </div>
    </>
  )
}

export default LanguagePicker
