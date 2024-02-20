import Hero from '@/components/molecules/Hero'
import AboutMe from '@/components/molecules/AboutMe'

export default function IndexPage () {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <AboutMe />
    </main>
  )
}
