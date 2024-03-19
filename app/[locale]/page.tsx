import Hero from '@/components/organisms/Hero'
import AboutMe from '@/components/organisms/AboutMe'
import UnderConstruction from '@/components/atoms/UnderConstruction'
import ContactMe from '@/components/organisms/ContactMe'
import GlowingText from '@/components/atoms/GlowingText'

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <GlowingText text="component library"/>
      <Hero />
      <AboutMe />
      <ContactMe />
      <UnderConstruction />
    </main>
  )
}
