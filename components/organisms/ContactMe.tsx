'use client'

import { MY_CONTACTS, PageSectionsID } from '@/constants'
import ContactsDisplay from '../molecules/ContactsDisplay'
import Header from '../theme/Header'
import Section from '../theme/Section'
import { useTranslations } from 'next-intl'

interface ContactMeProps { }

function ContactMe(props: ContactMeProps): React.JSX.Element {
  const t = useTranslations('ContactMe')
  return (
    <Section id={PageSectionsID.contacts}>
      <div className="max-w-[40rem]" >
        <Header>{t('title')}</Header>

        <p>{t('contact_me')}</p>

        <br />
        <br />

        <div className='flex justify-center flex-wrap gap-[1rem]'>
          <ContactsDisplay contacts={MY_CONTACTS} className='bg-accent text-accent-content' />
        </div>
      </div>
    </Section>
  )
}

export default ContactMe
