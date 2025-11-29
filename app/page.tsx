import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Schedule } from "@/components/schedule"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Schedule />
      <Footer />
    </main>
  )
}
