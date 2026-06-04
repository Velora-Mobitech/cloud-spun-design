'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = {
    campus: [
      'https://images.unsplash.com/photo-1427120714310-4fc67c7fb027?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1445032519493-61ae25f47dab?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=300&h=300&fit=crop',
    ],
    convocation: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516394775302-28076e50fed1?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178aa50ab812?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=300&fit=crop',
    ],
    hostels: [
      'https://images.unsplash.com/photo-1542632206-7b2b3b773ff7?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1470055285647-3399bab48d8c?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1439024471991-b2966d0aae0d?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1543269865-cbdf26cecb46?w=300&h=300&fit=crop',
    ],
    brahmaputra: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    ],
  }

  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('campus')
  const allImages = categories[activeCategory]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-white to-accent-maroon/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            Convocation Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moments from IITG convocation celebrations and campus memories.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as keyof typeof categories)}
              className={`px-6 py-3 rounded-full font-semibold transition capitalize ${
                activeCategory === cat
                  ? 'bg-accent-maroon text-white'
                  : 'bg-white text-accent-maroon border-2 border-accent-maroon hover:bg-accent-maroon/10'
              }`}
            >
              {cat === 'brahmaputra' ? 'Brahmaputra' : cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-lg"
            >
              <X size={28} />
            </button>

            <div className="relative max-w-4xl w-full">
              <img
                src={allImages[selectedImage]}
                alt="Gallery"
                className="w-full rounded-lg"
              />

              <button
                onClick={() =>
                  setSelectedImage(selectedImage === 0 ? allImages.length - 1 : selectedImage - 1)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-lg"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={() =>
                  setSelectedImage(selectedImage === allImages.length - 1 ? 0 : selectedImage + 1)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-lg"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
