'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export function Hero() {
  const navigate = useNavigate()
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Calculate countdown to July 10, 2026
  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date('2026-07-10T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error('Video autoplay failed:', error))
      }
    }
  }, [])



  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
        >
          <source
            src="https://videos.unsplash.com/video-1492684223066-81342ee5ff30?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-bold text-xl"
          >
            IITG <span className="text-accent-gold">Convocation</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-white text-sm font-medium items-center">
            <a href="#travel-options" className="hover:text-accent-gold transition">
              Travel
            </a>
            <a href="#cab-sharing" className="hover:text-accent-gold transition">
              Ride Sharing
            </a>
            <a href="#tourism-packages" className="hover:text-accent-gold transition">
              Packages
            </a>
            <a href="#contact" className="hover:text-accent-gold transition">
              Contact
            </a>
            <button
              onClick={() => navigate('/booking')}
              className="bg-accent-gold hover:bg-accent-gold/90 text-black font-bold px-6 py-2 rounded-lg transition"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md px-4 py-4 space-y-3 text-white">
            <button
              onClick={() => {navigate('/booking'); setIsMobileMenuOpen(false)}}
              className="w-full bg-accent-gold hover:bg-accent-gold/90 text-black font-bold py-2 rounded-lg transition mb-2"
            >
              Book Now
            </button>
            <a href="#travel-options" className="block py-2 hover:text-accent-gold" onClick={() => setIsMobileMenuOpen(false)}>
              Travel Options
            </a>
            <a href="#cab-sharing" className="block py-2 hover:text-accent-gold" onClick={() => setIsMobileMenuOpen(false)}>
              Ride Sharing
            </a>
            <a href="#tourism-packages" className="block py-2 hover:text-accent-gold" onClick={() => setIsMobileMenuOpen(false)}>
              Packages
            </a>
            <a href="#contact" className="block py-2 hover:text-accent-gold" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-block">
            <span className="text-accent-gold text-sm font-bold tracking-widest uppercase">
              IIT Guwahati Convocation 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Celebrate the Moment.{' '}
            <span className="text-accent-gold">We'll Handle the Journey.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Three unforgettable days. One final journey back to campus. Let us take care of your
            transportation while you celebrate with friends and family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => navigate('/booking')}
              size="lg"
              className="bg-accent-gold hover:bg-accent-gold/90 text-black font-bold text-lg h-14 px-8 rounded-lg"
            >
              Book My Ride
            </Button>
            <Button
              onClick={() => document.getElementById('travel-options')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8 rounded-lg"
            >
              Explore Options
            </Button>
          </div>

          {/* Pricing Display */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-8 max-w-2xl mx-auto"
          >
            <p className="text-sm text-white/80 mb-4">Starting from</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-accent-gold">₹649</p>
                <p className="text-xs text-white/70 mt-1">Airport → Campus</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-gold">₹649</p>
                <p className="text-xs text-white/70 mt-1">Campus → Airport</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-gold">₹1249</p>
                <p className="text-xs text-white/70 mt-1">Round Trip</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-32 left-0 right-0 mx-auto"
        >
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-xs mx-auto">
            <p className="text-white/80 text-sm mb-4 font-medium">Convocation in</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-gold">{countdown.days}</p>
                <p className="text-xs text-white/70">Days</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-gold">{countdown.hours}</p>
                <p className="text-xs text-white/70">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-gold">{countdown.minutes}</p>
                <p className="text-xs text-white/70">Mins</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-gold">{countdown.seconds}</p>
                <p className="text-xs text-white/70">Secs</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <ChevronDown className="text-white/60 size-8" />
        </motion.div>
      </div>

      {/* Volume Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-8 right-8 z-30 bg-accent-gold/20 hover:bg-accent-gold/40 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  )
}