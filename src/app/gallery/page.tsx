import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Image as ImageIcon, CheckCircle, Star } from 'lucide-react'

export default function GalleryPage() {
  const portfolioItems = [
    {
      title: "Pengolahan Lahan Padi",
      description: "Pembajakan dan persiapan lahan seluas 2 hektar untuk tanaman padi",
      category: "Pengolahan Lahan",
      location: "Sragen",
      completed: "2024"
    },
    {
      title: "Instalasi Irigasi Tetes",
      description: "Pemasangan sistem irigasi modern untuk kebun sayuran organik",
      category: "Irigasi",
      location: "Karanganyar",
      completed: "2024"
    },
    {
      title: "Panen Jagung Hibrida",
      description: "Panen dan pasca panen jagung hibrida seluas 5 hektar",
      category: "Panen",
      location: "Boyolali",
      completed: "2024"
    },
    {
      title: "Persemaian Bibit Cabai",
      description: "Pembuatan persemaian bibit cabai unggul dengan teknologi modern",
      category: "Persemaian",
      location: "Sukoharjo",
      completed: "2023"
    },
    {
      title: "Pemangkasan Tanaman Buah",
      description: "Pemangkasan formatif dan perawatan tanaman buah durian",
      category: "Perawatan",
      location: "Wonogiri",
      completed: "2023"
    },
    {
      title: "Konsultasi Pertanian Terpadu",
      description: "Konsultasi dan perencanaan pertanian untuk perkebunan kelapa sawit",
      category: "Konsultasi",
      location: "Grobogan",
      completed: "2023"
    }
  ]

  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Sragen",
      service: "Pengolahan Lahan",
      rating: 5,
      comment: "Pelayanan SUTARMI sangat profesional. Lahan saya menjadi lebih subur dan hasil panen meningkat 30%."
    },
    {
      name: "Siti Nurhayati",
      location: "Karanganyar", 
      service: "Irigasi",
      rating: 5,
      comment: "Sistem irigasi yang dipasang sangat efisien. Penggunaan air lebih hemat dan tanaman lebih sehat."
    },
    {
      name: "Agus Wijaya",
      location: "Boyolali",
      service: "Panen & Pasca Panen",
      rating: 5,
      comment: "Tim SUTARMI sangat berpengalaman. Proses panen cepat dan hasilnya berkualitas tinggi."
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
              Portfolio & Testimoni
            </h1>
            <p className="text-xl text-green-100">
              Hasil Kerja Kami dan Kepuasan Klien
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berhasil menyelesaikan ratusan proyek pertanian dengan hasil yang memuaskan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                  <ImageIcon className="h-16 w-16 text-green-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.completed}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      📍 {item.location}
                    </span>
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Selesai</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prestasi Kami
            </h2>
            <p className="text-lg text-gray-600">
              Angka yang berbicara tentang kualitas layanan kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
              <p className="text-gray-600">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">300+</div>
              <p className="text-gray-600">Klien Puas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">10+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">98%</div>
              <p className="text-gray-600">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Klien
            </h2>
            <p className="text-lg text-gray-600">
              Testimoni dari para petani yang telah menggunakan layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-green-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabunglah dengan Ratusan Klien Puas Kami
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Rasakan sendiri kualitas layanan pertanian profesional dari SUTARMI 
            dan tingkatkan produktivitas pertanian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Hubungi Kami
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}