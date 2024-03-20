'use client'

import Section from '../theme/Section'

interface MyExperiencesProps {
  children?: React.ReactNode
  className?: string
}

function MyExperiences(props: MyExperiencesProps): React.JSX.Element {
  return (
    <>
      <Section className={`${props.className}`}>
        {props.children}
      </Section>
    </>
  )
}

export default MyExperiences
