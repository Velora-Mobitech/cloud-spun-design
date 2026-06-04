import { Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { ConvocationStory } from './components/ConvocationStory'
import { ConvocationInfo } from './components/ConvocationInfo'
import { WhyBookWithUs } from './components/WhyBookWithUs'
import { TravelOptions } from './components/TravelOptions'
import { CabSharing } from './components/CabSharing'
import { TourismPackages } from './components/TourismPackages'
import { ParentsSection } from './components/ParentsSection'
import { Gallery } from './components/Gallery'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BookingPage } from './pages/Booking'
import { BookingConfirmation } from './pages/BookingConfirmation'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="convocation-story" aria-label="Convocation story section">
          <ConvocationStory />
        </section>
        <section id="convocation-info" aria-label="Convocation information section">
          <ConvocationInfo />
        </section>
        <section id="why-book" aria-label="Why book with us section">
          <WhyBookWithUs />
        </section>
        <section id="travel-options" aria-label="Travel options section">
          <TravelOptions />
        </section>
        <section id="cab-sharing" aria-label="Cab sharing section">
          <CabSharing />
        </section>
        <section id="tourism-packages" aria-label="Tourism packages section">
          <TourismPackages />
        </section>
        <section id="parents" aria-label="Parents section">
          <ParentsSection />
        </section>
        <section id="gallery" aria-label="Gallery section">
          <Gallery />
        </section>
        <section id="faq" aria-label="FAQ section">
          <FAQ />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
    </Routes>
  )
}