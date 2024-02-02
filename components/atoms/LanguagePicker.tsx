'use client'

import Image from 'next/image'
import TranslatorBtn from './Icons/TranslatorBtn'
interface LanguagePickerProps { }

const LanguagePicker: React.FC<LanguagePickerProps> = () => {
  return (
    <>
      <div title="Change Language" className="dropdown dropdown-end ">
        <TranslatorBtn />
        <div className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5">
          <ul className="menu menu-sm gap-1">
            <li><button>
              <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">DE</span> <span className="font-[sans-serif]">Deutsch</span> </button> </li>
            <li><button className="active"><span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">EN</span> <span className="font-[sans-serif]">English</span> </button> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LanguagePicker
