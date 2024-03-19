'use client'

import { MY_CONTACTS } from '@/constants'
import ContactsDisplay from '../molecules/ContactsDisplay'

interface ContactMeProps { }

function ContactMe(props: ContactMeProps): React.JSX.Element {
  return (
    <>
      <div className="" >
        <h1 >Contact Me</h1>

        <p>
          Feel free to contact me. My inbox is always open.
          I&apos;ll get back to you as soon as possible, that&apos;s a promise!
        </p>

        <div className='flex justify-center flex-wrap gap-[1rem] '>
          <ContactsDisplay contacts={MY_CONTACTS} className='bg-neutral text-base-100' />
        </div>
      </div>
    </>
  )
}

export default ContactMe
