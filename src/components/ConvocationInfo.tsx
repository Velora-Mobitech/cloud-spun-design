'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Sparkles, Users } from 'lucide-react'

export function ConvocationInfo() {
  const highlights = [
    {
      icon: Calendar,
      title: 'Dates',
      description: 'July 10–12, 2026',
    },
    {
      icon: MapPin,
      title: 'Venue',
      description: 'IIT Guwahati Campus',
    },
    {
      icon: Sparkles,
      title: 'Ceremonies',
      description: 'Convocation, Awards, Cultural Events',
    },
    {
      icon: Users,
      title: 'Participants',
      description: 'Students, Parents, Alumni, Guests',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-accent-burgundy/5 to-accent-maroon/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            Convocation Details
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendars for three days of celebration, recognition, and unforgettable moments.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-burgundy rounded-full flex items-center justify-center">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-accent-maroon mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Photo Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-24 bg-white rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-accent-maroon mb-6">Photo Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-accent-burgundy mb-2">Convocation Ceremony</h4>
              <p className="text-gray-600">Capture your moment on stage with the convocation robe and hood.</p>
            </div>
            <div>
              <h4 className="font-semibold text-accent-burgundy mb-2">With Family</h4>
              <p className="text-gray-600">Professional photography sessions with your loved ones on campus.</p>
            </div>
            <div>
              <h4 className="font-semibold text-accent-burgundy mb-2">Campus Memories</h4>
              <p className="text-gray-600">Visit your favorite spots and relive four years of memories.</p>
            </div>
            <div>
              <h4 className="font-semibold text-accent-burgundy mb-2">Alumni Meet</h4>
              <p className="text-gray-600">Reconnect with batchmates and seniors at various events.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
