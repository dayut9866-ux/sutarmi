import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Tractor, 
  Sprout, 
  Droplets, 
  Scissors, 
  Package, 
  Wrench, 
  BookOpen, 
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Tractor,
      title: "Pengolahan Lahan",
      description: "Jasa pembajakan, penggemburan, dan persiapan lahan pertanian dengan peralatan modern.",
      features: [
        "Pembajakan lahan dengan traktor",
        "Penggemburan tanah yang optimal",
        "Perataan dan pembuatan bedengan",
        "Pembersihan dari gulma dan batu"
      ],
      price: "Mulai dari Rp 500.000/hektar"
    },
    {
      icon: Sprout,
      title: "Penanaman & Persemaian",
      description: "Bantuan teknis dalam proses penanaman benih dan persemaian bibit unggul.",
      features: [
        "Seleksi benih berkualitas",
        "Teknik persemaian modern",
        "Penanaman dengan jarak optimal",
        "Pemupukan awal yang tepat"
      ],
      price: "Mulai dari Rp 750.000/hektar"
    },
    {
      icon: Droplets,
      title: "Sistem Irigasi",
      description: "Instalasi dan pemeliharaan sistem irigasi untuk ketersediaan air yang optimal.",
      features: [
        "Instalasi sistem irigasi tetes",
        "Pembuatan saluran air",
        "Pompa air dan penyaringan",
        "Pengaturan otomatis irigasi"
      ],
      price: "Mulai dari Rp 1.000.000/hektar"
    },
    {
      icon: Scissors,
      title: "Pemangkasan & Perawatan",
      description: "Pemangkasan tanaman dan perawatan rutin untuk pertumbuhan yang sehat.",
      features: [
        "Pemangkasan formatif",
        "Pengendalian hama penyakit",
        "Pemupukan berkala",
        "Monitoring pertumbuhan tanaman"
      ],
      price: "Mulai dari Rp 600.000/hektar/kunjungan"
    },
    {
      icon: Package,
      title: "Panen & Pasca Panen",
      description: "Bantuan dalam proses panen dan pengolahan hasil pertanian.",
      features: [
        "Penentuan waktu panen optimal",
        "Teknik panen yang benar",
        "Sortir dan grading hasil",
        "Pengemasan dan penyimpanan"
      ],
      price: "Mulai dari Rp 800.000/hektar"
    },
    {
      icon: Wrench,
      title: "Maintenance Alat",
      description: "Perawatan dan perbaikan berbagai peralatan pertanian.",
      features: [
        "Service traktor dan mesin pertanian",
        "Perbaikan alat-alat kecil",
        "Kalibrasi peralatan",
        "Suku cadang dan aksesoris"
      ],
      price: "Mulai dari Rp 150.000/unit"
    }
  ]

  const consultingServices = [
    {
      icon: BookOpen,
      title: "Konsultasi Pertanian",
      description: "Konsultasi teknis dengan ahli pertanian untuk meningkatkan produktivitas.",
      topics: [
        "Analisis kelayakan lahan",
        "Pemilihan komoditas yang tepat",
        "Manajemen pertanian terpadu",
        "Sertifikasi organik",
        "Akses pasar dan pemasaran"
      ],
      price: "Mulai dari Rp 250.000/sesi"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Kami
            </h1>
            <p className="text-xl text-green-100">
              Solusi Lengkap untuk Kebutuhan Pertanian Anda
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Jasa Pertanian
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan pertanian profesional untuk mendukung 
              kesuksesan usaha pertanian Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Layanan meliputi:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-green-700 font-semibold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Konsultasi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dapatkan saran dari ahli pertanian kami untuk optimalisasi hasil panen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-green-700 font-semibold text-lg">{service.price}</p>
                      <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
                        Hubungi Konsultan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Kerja Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proses yang sederhana dan transparan untuk memberikan layanan terbaik
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Konsultasi</h3>
                <p className="text-gray-600 text-sm">
                  Diskusikan kebutuhan pertanian Anda dengan tim kami
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Survey Lokasi</h3>
                <p className="text-gray-600 text-sm">
                  Tim kami melakukan peninjauan lokasi untuk analisis yang akurat
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Penawaran</h3>
                <p className="text-gray-600 text-sm">
                  Kami berikan penawaran harga dan rencana kerja yang detail
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Eksekusi</h3>
                <p className="text-gray-600 text-sm">
                  Pelaksanaan pekerjaan dengan monitoring berkala
                </p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:082310598347" 
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Sekarang
            </a>
            <a 
              href="mailto:info@sutarmi.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}