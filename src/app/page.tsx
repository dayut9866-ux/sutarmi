import Link from 'next/link'
import { ArrowRight, Sprout, Users, Award, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SUTARMI
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              Jasa Penunjang Pertanian Terpercaya
            </p>
            <p className="text-lg mb-8 text-green-50 max-w-2xl mx-auto">
              Mitra profesional untuk semua kebutuhan pertanian Anda. 
              Kami menyediakan berbagai layanan penunjang untuk meningkatkan 
              produktivitas dan kualitas hasil pertanian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
              >
                Lihat Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>0823-1059-8347</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Karang Tengah, Sragen, Jawa Tengah</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Buka: Senin - Sabtu, 08:00 - 17:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih SUTARMI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik untuk mendukung kesuksesan pertanian Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Layanan Lengkap
              </h3>
              <p className="text-gray-600">
                Berbagai layanan penunjang pertanian dari persiapan lahan hingga pasca panen
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tim Profesional
              </h3>
              <p className="text-gray-600">
                Tenaga ahli berpengalaman yang siap membantu meningkatkan produktivitas pertanian Anda
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kualitas Terjamin
              </h3>
              <p className="text-gray-600">
                Standar layanan tinggi dengan hasil kerja yang memuaskan dan berkualitas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang SUTARMI
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SUTARMI adalah penyedia jasa penunjang pertanian profesional yang berlokasi 
                di Sragen, Jawa Tengah. Dengan pengalaman bertahun-tahun, kami telah membantu 
                banyak petani meningkatkan produktivitas dan kualitas hasil pertanian mereka.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Kami memahami tantangan yang dihadapi petani modern dan menyediakan solusi 
                yang tepat untuk kebutuhan pertanian Anda, mulai dari pengolahan lahan, 
                pemilihan benih, hingga manajemen pasca panen.
              </p>
              <Link 
                href="/about" 
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Alamat</p>
                    <p className="text-gray-600 text-sm">
                      KLITIK 003/003 Desa/Kelurahan Karang Tengah, Kec. Sragen, 
                      Kab. Sragen, Prov. Jawa Tengah
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Telepon</p>
                    <p className="text-gray-600 text-sm">0823-1059-8347</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <p className="text-gray-600 text-sm">info@sutarmi.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Produktivitas Pertanian Anda?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi pertanian 
            yang tepat untuk kebutuhan Anda.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center text-lg"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}