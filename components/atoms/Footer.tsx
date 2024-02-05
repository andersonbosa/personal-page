'use client'

import Link from 'next/link'
import LucideIcon, { LucideIconType } from './LucideIcon'
import { MY_CONTACTS } from '@/constants'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  const sinceYear = 2019
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer footer-center p-10 -- bg-primary text-primary-content">
        <nav>
          <div className="grid grid-flow-col gap-4">
            {MY_CONTACTS.map((contact, index) => (
              <Link key={index} href={contact.hrefBuilder(contact.contact)} title={contact.label} target='_blank'>
                <LucideIcon additionalClassName='text-primary-content -- btn btn-ghost' name={contact.lucideIcon as LucideIconType} />
              </Link>
            ))}
          </div>
        </nav>
        <aside>
          <p>Copyright © {sinceYear} - {currentYear} - All right reserved</p>
        </aside>
      </footer>
    </>
  )
}

export default Footer
