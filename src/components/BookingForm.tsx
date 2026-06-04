'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rollNumber: '',
    department: '',
    program: '',
    journeyType: 'arrival',
    flightTrain: 'flight',
    flightNumber: '',
    trainNumber: '',
    arrivalDate: '',
    arrivalTime: '',
    departureDate: '',
    departureTime: '',
    passengers: 1,
    adults: 1,
    children: 0,
    seniors: 0,
    luggage: 1,
    specialAssistance: false,
    bundle: 'round-trip',
    sharingPreference: 'auto-match',
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (step < 6) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const steps = [
    {
      number: 1,
      title: 'Personal Details',
      fields: ['name', 'email', 'phone', 'rollNumber', 'department', 'program'],
    },
    {
      number: 2,
      title: 'Travel Details',
      fields: ['journeyType', 'flightTrain', 'flightNumber', 'trainNumber', 'arrivalDate', 'arrivalTime', 'departureDate', 'departureTime'],
    },
    {
      number: 3,
      title: 'Passengers',
      fields: ['passengers', 'adults', 'children', 'seniors', 'luggage', 'specialAssistance'],
    },
    {
      number: 4,
      title: 'Bundle',
      fields: ['bundle'],
    },
    {
      number: 5,
      title: 'Sharing',
      fields: ['sharingPreference'],
    },
    {
      number: 6,
      title: 'Review',
      fields: [],
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-accent-maroon mb-4">Book Your Ride</h2>
          <p className="text-gray-600">Easy 6-step booking process. Takes just 5 minutes.</p>
        </motion.div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-12">
          {steps.map((s, i) => (
            <motion.div key={i} className="flex-1 flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                  step >= s.number
                    ? 'bg-accent-gold text-accent-maroon'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {s.number}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded transition ${
                    step > s.number ? 'bg-accent-gold' : 'bg-gray-200'
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Form Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-gray-50 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-accent-maroon mb-6">{steps[step - 1].title}</h3>

          {step === 1 && (
            <div className="space-y-4">
              <input placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg" name="name" onChange={handleChange} />
              <input placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" name="email" onChange={handleChange} />
              <input placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg" name="phone" onChange={handleChange} />
              <input placeholder="Roll Number" className="w-full p-3 border border-gray-300 rounded-lg" name="rollNumber" onChange={handleChange} />
              <input placeholder="Department" className="w-full p-3 border border-gray-300 rounded-lg" name="department" onChange={handleChange} />
              <input placeholder="Program" className="w-full p-3 border border-gray-300 rounded-lg" name="program" onChange={handleChange} />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <select className="w-full p-3 border border-gray-300 rounded-lg" name="journeyType" onChange={handleChange}>
                <option value="arrival">Arrival</option>
                <option value="departure">Departure</option>
                <option value="round-trip">Round Trip</option>
              </select>
              <select className="w-full p-3 border border-gray-300 rounded-lg" name="flightTrain" onChange={handleChange}>
                <option value="flight">Flight</option>
                <option value="train">Train</option>
              </select>
              <input placeholder="Flight/Train Number" className="w-full p-3 border border-gray-300 rounded-lg" name="flightNumber" onChange={handleChange} />
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" name="arrivalDate" onChange={handleChange} />
              <input type="time" className="w-full p-3 border border-gray-300 rounded-lg" name="arrivalTime" onChange={handleChange} />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <input type="number" placeholder="Total Passengers" className="w-full p-3 border border-gray-300 rounded-lg" name="passengers" onChange={handleChange} />
              <input type="number" placeholder="Adults" className="w-full p-3 border border-gray-300 rounded-lg" name="adults" onChange={handleChange} />
              <input type="number" placeholder="Children" className="w-full p-3 border border-gray-300 rounded-lg" name="children" onChange={handleChange} />
              <input type="number" placeholder="Luggage Count" className="w-full p-3 border border-gray-300 rounded-lg" name="luggage" onChange={handleChange} />
              <label className="flex items-center gap-2">
                <input type="checkbox" name="specialAssistance" onChange={handleChange} />
                <span>I need special assistance</span>
              </label>
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'one-way', label: 'One Way', price: '₹649' },
                { id: 'round-trip', label: 'Round Trip', price: '₹1249' },
                { id: 'round-trip-campus', label: 'Round Trip + Campus', price: '₹1649' },
                { id: 'packages', label: 'Packages', price: 'Custom' },
              ].map((b) => (
                <div
                  key={b.id}
                  onClick={() => setFormData({ ...formData, bundle: b.id })}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    formData.bundle === b.id
                      ? 'border-accent-gold bg-accent-gold/10'
                      : 'border-gray-300 hover:border-accent-gold'
                  }`}
                >
                  <h4 className="font-bold">{b.label}</h4>
                  <p className="text-accent-gold font-bold">{b.price}</p>
                </div>
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: 'private', label: 'Private Ride', desc: 'Full vehicle for you' },
                { id: 'shared', label: 'Shared Ride', desc: 'Choose your group' },
                { id: 'auto-match', label: 'Auto Match Me', desc: 'We find your group' },
              ].map((s) => (
                <div
                  key={s.id}
                  onClick={() => setFormData({ ...formData, sharingPreference: s.id })}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    formData.sharingPreference === s.id
                      ? 'border-accent-gold bg-accent-gold/10'
                      : 'border-gray-300 hover:border-accent-gold'
                  }`}
                >
                  <h4 className="font-bold">{s.label}</h4>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          )}

          {step === 6 && (
            <div className="bg-white rounded-lg p-6 space-y-3">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Roll Number:</strong> {formData.rollNumber}</p>
              <p><strong>Bundle:</strong> {formData.bundle}</p>
              <p><strong>Sharing:</strong> {formData.sharingPreference}</p>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrev}
            variant="outline"
            className="rounded-lg"
            disabled={step === 1}
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {steps.map((s) => (
              <button
                key={s.number}
                onClick={() => setStep(s.number)}
                className={`w-3 h-3 rounded-full transition ${
                  step === s.number ? 'bg-accent-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {step === 6 ? (
            <Button className="bg-accent-gold hover:bg-accent-gold/90 text-black font-bold rounded-lg gap-2">
              Complete Booking <ChevronRight size={16} />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-accent-maroon hover:bg-accent-burgundy text-white font-bold rounded-lg gap-2"
            >
              Next <ChevronRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
