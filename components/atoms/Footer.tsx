'use client'

import { MY_CONTACTS } from '@/constants'
import ContactsDisplay from '../molecules/ContactsDisplay'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  const sinceYear = 2019
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer footer-center p-10 -- bg-primary text-primary-content">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <ContactsDisplay contacts={MY_CONTACTS} />
          </div>
        </nav>
        <aside>
          <p>ANB | Copyright © {sinceYear} - {currentYear} | All right reserved.</p>
        </aside>
      </footer>
    </>
  )
}

export default Footer
