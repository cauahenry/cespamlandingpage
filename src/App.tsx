import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { WhatsAppFloatingButton } from '@/components/common/WhatsAppButton'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Mission } from '@/components/sections/Mission'
import { Values } from '@/components/sections/Values'
import { Services } from '@/components/sections/Services'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Mission />
        <Values />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </>
  )
}
