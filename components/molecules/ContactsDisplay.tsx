'use client'

import Link from 'next/link'
import LucideIcon, { LucideIconType } from '@/components/atoms/LucideIcon'


interface Contact {
  label: string
  lucideIcon: string
  contact: string
  hrefBuilder: (input: any) => string
}

interface ContactsDisplayProps {
  contacts: Contact[]
  className?: string
}

const ContactsDisplay: React.FC<ContactsDisplayProps> = ({ contacts, className }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <Link
          key={index}
          title={contact.label}
          href={contact.hrefBuilder(contact.contact)}
          target='_blank'
          className='hover:motion-safe:animate-wiggle'
        >
          <LucideIcon
            name={contact.lucideIcon as LucideIconType}
            className={`btn btn-ghost -- bg-neutral text-neutral-content -- ${className}`}
          />
        </Link>
      ))}
    </>
  )
}

export default ContactsDisplay
