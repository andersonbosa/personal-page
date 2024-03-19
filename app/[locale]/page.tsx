import Hero from '@/components/organisms/Hero'
import AboutMe from '@/components/organisms/AboutMe'
import UnderConstruction from '@/components/atoms/UnderConstruction'
import ContactMe from '@/components/organisms/ContactMe'

export default function IndexPage () {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      <ContactMe />
      <UnderConstruction />
    </main>
  )
}
