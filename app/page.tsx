import { Approach } from '@/components/Approach'
import { Clients } from '@/components/Clients'
import { Experiences } from '@/components/Experiences'
import { Footer } from '@/components/Footer'
import { Grid } from '@/components/Grid'
import { Hero } from '@/components/Hero'
import { RecentProjects } from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { navItems } from '@/data'

export default function Home() {
  return (
    <main
      className="relative mx-auto flex flex-col items-center justify-center overflow-clip
        bg-black-100 px-5 sm:px-10"
    >
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}
