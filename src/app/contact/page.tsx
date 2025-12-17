'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-green-100">
              Siap Membantu Kebutuhan Pertanian Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-700">0823-1059-8347</p>
              <p className="text-sm text-gray-500 mt-1">Senin - Sabtu, 08:00 - 17:00</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">info@sutarmi.com</p>
              <p className="text-sm text-gray-500 mt-1">Respon 24 jam</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
              <p className="text-gray-700 text-sm">
                Karang Tengah, Sragen<br />
                Jawa Tengah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Silakan isi formulir di bawah ini dan kami akan menghubungi Anda segera.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-700">Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700">Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="pengolahan-lahan">Pengolahan Lahan</option>
                    <option value="penanaman">Penanaman & Persemaian</option>
                    <option value="irigasi">Sistem Irigasi</option>
                    <option value="pemangkasan">Pemangkasan & Perawatan</option>
                    <option value="panen">Panen & Pasca Panen</option>
                    <option value="maintenance">Maintenance Alat</option>
                    <option value="konsultasi">Konsultasi Pertanian</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan pertanian Anda..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Alamat Lengkap</h3>
                      <p className="text-gray-700">
                        KLITIK 003/003<br />
                        Desa/Kelurahan Karang Tengah<br />
                        Kecamatan Sragen<br />
                        Kabupaten Sragen<br />
                        Provinsi Jawa Tengah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                      <p className="text-gray-700">0823-1059-8347</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">info@sutarmi.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                      <p className="text-gray-700">
                        Senin - Sabtu: 08:00 - 17:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-green-700 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Butuh Bantuan Cepat?</h3>
                <p className="text-green-100 mb-4">
                  Hubungi kami langsung untuk konsultasi gratis dan penawaran terbaik.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:082310598347" 
                    className="block bg-white text-green-700 py-2 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                  >
                    📞 Hubungi Sekarang
                  </a>
                  <a 
                    href="https://wa.me/6282310598347" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition-colors text-center"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}