import Hero from '@/components/molecules/Hero'
import AboutMe from '@/components/molecules/AboutMe'
import UnderConstruction from '@/components/atoms/UnderConstruction'

export default function IndexPage () {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      {/* Minhas Experiências */}
      <UnderConstruction />
    </main>
  )
}
