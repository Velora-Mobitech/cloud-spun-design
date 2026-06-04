import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react'

export function Contact() {
  const contactChannels = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 8876 XXXXXX',
      description: '24/7 support during convocation period',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@convocation2026.com',
      description: 'Response within 2 hours',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 8876 XXXXXX',
      description: 'Quick queries and instant booking support',
    },
    {
      icon: Clock,
      title: 'Available',
      value: '24/7',
      description: 'June 1 - July 15, 2026',
    },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-gradient-to-br from-accent-maroon to-accent-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">Get In Touch</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have questions? Our support team is ready to help you with your convocation travel plans.
          </p>
        </motion.div>

        {/* Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent-gold text-accent-maroon rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{channel.title}</h3>
                <p className="text-accent-gold font-semibold mb-2">{channel.value}</p>
                <p className="text-white/70 text-sm">{channel.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-accent-gold text-3xl sm:text-4xl font-black mb-2">5000+</div>
              <p className="text-white/80">Bookings Confirmed</p>
            </div>
            <div>
              <div className="text-accent-gold text-3xl sm:text-4xl font-black mb-2">4.9★</div>
              <p className="text-white/80">Average Rating</p>
            </div>
            <div>
              <div className="text-accent-gold text-3xl sm:text-4xl font-black mb-2">2 hrs</div>
              <p className="text-white/80">Avg Response Time</p>
            </div>
            <div>
              <div className="text-accent-gold text-3xl sm:text-4xl font-black mb-2">50+</div>
              <p className="text-white/80">Professional Drivers</p>
            </div>
          </div>
        </motion.div>

        {/* Emergency Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-24 bg-accent-gold text-accent-maroon rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Emergency Support?</h3>
          <p className="mb-6 font-semibold">Call our emergency hotline immediately</p>
          <a
            href="tel:+918876XXXXXX"
            className="inline-block text-3xl font-black hover:scale-105 transition"
          >
            +91 8876 XXXXXX
          </a>
        </motion.div>
      </div>
    </section>
  )
}