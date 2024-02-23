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
        <Link key={index} href={contact.hrefBuilder(contact.contact)} title={contact.label} target='_blank'>
          <LucideIcon
            name={contact.lucideIcon as LucideIconType}
            additionalClassName={`btn btn-ghost -- ${className}`}
          />
        </Link>
      ))}
    </>
  )
}

export default ContactsDisplay
