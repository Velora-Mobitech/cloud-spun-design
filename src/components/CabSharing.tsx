'use client'

import { motion } from 'framer-motion'
import { Users, Heart, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function CabSharing() {
  const benefits = [
    {
      icon: Heart,
      title: 'Meet Batchmates',
      description: 'Get matched with students from your batch and department',
    },
    {
      icon: Zap,
      title: 'Lower Cost',
      description: 'Share ride costs and save money for celebrations',
    },
    {
      icon: Users,
      title: 'Instant Grouping',
      description: 'Automatic matching based on arrival times and routes',
    },
  ]

  const modes = [
    {
      title: 'Private Ride',
      description: 'Book solo or with your group. Full vehicle for yourself.',
      price: 'Standard pricing',
    },
    {
      title: 'Shared Ride',
      description: 'Select who you want to share with. You control the group.',
      price: '30% savings',
    },
    {
      title: 'Auto Match Me',
      description: 'We find compatible travelers and create the perfect group.',
      price: '40% savings',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-accent-maroon text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Share Your Ride. Save More.
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Connect with fellow IITG alumni and students. Travel together, celebrate together, and save money.
          </p>
        </motion.div>

        {/* Matching System Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 mb-16 sm:mb-24"
        >
          <h3 className="text-2xl font-bold mb-6">How Our Matching Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'You Provide Details',
                desc: 'Share your flight/train info, arrival time, and preferences',
              },
              {
                step: '2',
                title: 'We Find Matches',
                desc: 'Automatic algorithm matches you with compatible travelers',
              },
              {
                step: '3',
                title: 'Travel Together',
                desc: 'Connect with your ride mates, reach campus, celebrate!',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-accent-gold text-2xl font-black mb-2">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-24"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-accent-gold text-accent-maroon rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Pricing Modes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {modes.map((mode, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border-2 transition ${
                index === 2
                  ? 'bg-accent-gold text-accent-maroon border-accent-gold'
                  : 'bg-white/10 backdrop-blur-md border-white/20 text-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-3">{mode.title}</h3>
              <p className={`mb-6 ${index === 2 ? '' : 'text-white/80'}`}>{mode.description}</p>
              <div className="text-3xl font-black mb-6">{mode.price}</div>
              <Button
                className={`w-full font-bold rounded-lg ${
                  index === 2
                    ? 'bg-accent-maroon hover:bg-accent-burgundy text-white'
                    : 'bg-accent-gold text-accent-maroon hover:bg-accent-gold/90'
                }`}
              >
                Choose This Mode
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
