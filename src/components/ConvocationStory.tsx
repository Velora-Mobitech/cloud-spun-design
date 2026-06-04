'use client'

import { motion } from 'framer-motion'

export function ConvocationStory() {
  const stories = [
    {
      title: 'Four Years Ago',
      description: 'You stepped into campus with dreams, countless memories waiting to be made.',
    },
    {
      title: 'Hostel Nights',
      description: 'Late-night conversations, impromptu road trips, friendships that changed your life.',
    },
    {
      title: 'Projects & Placements',
      description: 'You built. You learned. You grew. Every challenge made you stronger.',
    },
    {
      title: 'Now',
      description: 'It\'s time to return. To celebrate. To walk across that stage one final time.',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            Your IITG Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Four unforgettable years. Countless memories. Now it's time to celebrate one last journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-accent-burgundy/5 to-accent-gold/5 border border-accent-gold/20 rounded-2xl p-8 h-full">
                {/* Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-accent-gold text-accent-burgundy rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-accent-maroon mt-4 mb-3">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed">{story.description}</p>
              </div>

              {/* Connector Line */}
              {index < stories.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-gold to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <p className="text-xl sm:text-2xl text-accent-maroon font-semibold">
            Let us handle the journey. You focus on the celebration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
