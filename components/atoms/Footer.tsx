'use client'

import React from 'react'
import { MY_CONTACTS } from '@/constants'
import ContactsDisplay from '../molecules/ContactsDisplay'

interface FooterProps { }

function Footer(props: FooterProps): React.JSX.Element {
  return (
    <>
      <footer className="footer footer-center p-10 -- bg-base-300 text-base-content ">
        {/*
        <nav>
          <div className="grid grid-flow-col gap-4">
          </div>
        </nav>
         */}
        <aside>
          <p>Created By <a href="#contacts" className="link">Anderson Bosa</a></p>
        </aside>
      </footer>
    </>
  )
}

export default Footer
