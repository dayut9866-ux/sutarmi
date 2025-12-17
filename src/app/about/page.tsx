import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Users, Award, Sprout, Heart, Target, Clock } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang SUTARMI
            </h1>
            <p className="text-xl text-green-100">
              Mitra Terpercaya untuk Kesuksesan Pertanian Anda
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Company Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cerita Kami
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    SUTARMI didirikan dengan tekad kuat untuk membantu para petani Indonesia 
                    meningkatkan produktivitas dan kualitas hasil pertanian mereka. Berlokasi 
                    di Karang Tengah, Sragen, Jawa Tengah, kami telah menjadi mitra terpercaya 
                    bagi ribuan petani di wilayah tersebut.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Dengan pengalaman bertahun-tahun di bidang jasa penunjang pertanian, 
                    kami memahami betul tantangan dan kebutuhan para petani modern. Oleh karena itu, 
                    kami terus berinovasi dan mengembangkan layanan-layanan yang dapat 
                    mendukung kesuksesan pertanian Anda.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Komitmen kami adalah memberikan layanan berkualitas tinggi dengan harga 
                    yang terjangkau, sehingga setiap petani dapat mengakses teknologi dan 
                    metode pertanian modern untuk meningkatkan hasil panen mereka.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Perusahaan</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Alamat Lengkap</p>
                      <p className="text-gray-700">
                        KLITIK 003/003 Desa/Kelurahan Karang Tengah<br />
                        Kecamatan Sragen<br />
                        Kabupaten Sragen<br />
                        Provinsi Jawa Tengah
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-gray-700">0823-1059-8347</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">info@sutarmi.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Jam Operasional</p>
                      <p className="text-gray-700">
                        Senin - Sabtu: 08:00 - 17:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Nilai-Nilai Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integritas</h3>
                  <p className="text-gray-600">
                    Kami beroperasi dengan kejujuran dan transparansi dalam setiap interaksi dengan klien.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Profesionalisme</h3>
                  <p className="text-gray-600">
                    Tim kami terdiri dari tenaga ahli berpengalaman yang siap memberikan layanan terbaik.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovasi</h3>
                  <p className="text-gray-600">
                    Kami terus mengikuti perkembangan teknologi pertanian modern untuk memberikan solusi terbaik.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kepedulian</h3>
                  <p className="text-gray-600">
                    Kami benar-benar peduli dengan kesuksesan pertanian dan kesejahteraan para petani.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="bg-green-50 p-12 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Keahlian Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Pengalaman Bertahun-tahun
                    </h3>
                    <p className="text-gray-700">
                      Lebih dari 10 tahun pengalaman dalam bidang jasa penunjang pertanian 
                      dengan ribuan klien puas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Tim Ahli Profesional
                    </h3>
                    <p className="text-gray-700">
                      Tenaga terampil yang berpengalaman dalam berbagai aspek pertanian 
                      modern dan tradisional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Peralatan Modern
                    </h3>
                    <p className="text-gray-700">
                      Menggunakan peralatan pertanian terkini untuk memastikan hasil kerja 
                      yang maksimal dan efisien.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Harga Kompetitif
                    </h3>
                    <p className="text-gray-700">
                      Menawarkan layanan berkualitas tinggi dengan harga yang terjangkau 
                      untuk semua kalangan petani.
                    </p>
                  </div>
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