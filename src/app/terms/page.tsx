import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-green-100">
              Aturan Penggunaan Layanan Jasa Pertanian SUTARMI
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Selamat datang di SUTARMI. Syarat & Ketentuan ini mengatur penggunaan 
                  layanan jasa penunjang pertanian yang kami sediakan. Dengan menggunakan 
                  layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda tidak setuju dengan syarat dan ketentuan ini, jangan gunakan 
                  layanan kami. SUTARMI berhak mengubah syarat dan ketentuan ini kapan saja 
                  dengan memberitahukan perubahan tersebut kepada Anda.
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SUTARMI menyediakan berbagai layanan jasa penunjang pertanian termasuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Pengolahan lahan pertanian</li>
                  <li>Penanaman dan persemaian</li>
                  <li>Sistem irigasi</li>
                  <li>Pemangkasan dan perawatan tanaman</li>
                  <li>Panen dan pasca panen</li>
                  <li>Maintenance alat pertanian</li>
                  <li>Konsultasi pertanian</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan 
                  standar profesionalisme yang tinggi.
                </p>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tanggung Jawab Klien</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sebagai klien, Anda bertanggung jawab untuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Memberikan informasi yang akurat tentang lahan dan kebutuhan pertanian Anda</li>
                  <li>Memastikan akses yang aman ke lokasi kerja</li>
                  <li>Memberikan instruksi yang jelas tentang pekerjaan yang dibutuhkan</li>
                  <li>Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                  <li>Mematuhi jadwal yang telah disepakati</li>
                  <li>Memberikan informasi tentang hambatan atau kondisi khusus di lokasi</li>
                  <li>Menyediakan fasilitas dasar jika diperlukan (air, listrik, dll)</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Pembayaran</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ketentuan pembayaran untuk layanan kami:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                  <li>Uang muka minimal 50% diperlukan untuk pekerjaan besar</li>
                  <li>Pelunasan harus dilakukan setelah pekerjaan selesai</li>
                  <li>Biaya tambahan akan dikenakan jika ada perubahan scope pekerjaan</li>
                  <li>Keterlambatan pembayaran dapat dikenakan denda 2% per bulan</li>
                  <li>Struk atau bukti pembayaran akan diberikan untuk setiap transaksi</li>
                </ul>
              </div>

              {/* Service Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Perjanjian Layanan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Setiap penggunaan layanan kami dianggap sebagai perjanjian yang mengikat:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Perjanjian tertulis akan dibuat untuk pekerjaan di atas Rp 10.000.000</li>
                  <li>Perubahan perjanjian harus disetujui kedua belah pihak secara tertulis</li>
                  <li>Kami berhak menolak pekerjaan yang dianggap berbahaya atau tidak layak</li>
                  <li>Waktu penyelesaian adalah estimasi dan dapat berubah tergantung kondisi</li>
                  <li>Kami tidak bertanggung jawab atas kerusakan yang disebabkan oleh force majeure</li>
                </ul>
              </div>

              {/* Cancellation Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Pembatalan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kebijakan pembatalan layanan:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Pembatalan 7 hari sebelum jadwal: pengembalian 100% uang muka</li>
                  <li>Pembatalan 3-6 hari sebelum jadwal: pengembalian 50% uang muka</li>
                  <li>Pembatalan kurang dari 3 hari: tidak ada pengembalian uang muka</li>
                  <li>Pembatalan oleh SUTARMI akan diberikan pengembalian penuh</li>
                  <li>Penjadwalan ulang dapat dilakukan dengan persetujuan kedua belah pihak</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tanggung jawab kami dibatasi sebagai berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Kami tidak bertanggung jawab atas hasil panen yang tidak sesuai harapan</li>
                  <li>Kami tidak bertanggung jawab atas kondisi alam yang tidak dapat diprediksi</li>
                  <li>Kerusakan akibat kelalaian klien tidak menjadi tanggung jawab kami</li>
                  <li>Maksimal tanggung jawab kami adalah nilai kontrak pekerjaan</li>
                  <li>Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</li>
                </ul>
              </div>

              {/* Warranty */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Garansi</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami memberikan garansi untuk layanan kami:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Garansi 30 hari untuk pekerjaan pengolahan lahan</li>
                  <li>Garansi 7 hari untuk perbaikan peralatan</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat penggunaan yang salah</li>
                  <li>Klaim garansi harus disertai dengan bukti pembayaran</li>
                  <li>Kami berhak memeriksa klaim garansi sebelum persetujuan</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Semua materi di website dan materi promosi SUTARMI dilindungi oleh 
                  hak cipta dan hak kekayaan intelektual lainnya. Anda tidak boleh:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Menggunakan nama atau logo SUTARMI tanpa izin tertulis</li>
                  <li>Menyalin, mendistribusikan, atau menampilkan materi kami</li>
                  <li>Menggunakan metode atau teknik pertanian kami untuk kepentingan komersial</li>
                  <li>Membuat karya turunan dari materi kami</li>
                </ul>
              </div>

              {/* Confidentiality */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kerahasiaan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami berkomitmen untuk menjaga kerahasiaan informasi klien dan tidak akan 
                  membagikan informasi tentang lahan, hasil panen, atau praktik pertanian 
                  Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan 
                  oleh hukum.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Negosiasi damai antara kedua belah pihak</li>
                  <li>Mediasi dengan pihak ketiga netral</li>
                  <li>Arbitrase jika mediasi gagal</li>
                  <li>Penyelesaian melalui pengadilan di wilayah hukum Sragen</li>
                </ol>
              </div>

              {/* Force Majeure */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak bertanggung jawab atas keterlambatan atau kegagalan dalam 
                  melaksanakan kewajiban kami jika disebabkan oleh kejadian di luar 
                  kendali kami termasuk bencana alam, perang, kerusuhan, pandemi, atau 
                  peraturan pemerintah yang menghalangi pelaksanaan pekerjaan.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
                <p className="text-gray-700 leading-relaxed">
                  Syarat & Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                  Republik Indonesia. Setiap sengketa akan diselesaikan di pengadilan 
                  yang berwenang di wilayah Kabupaten Sragen, Jawa Tengah.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>SUTARMI</strong><br />
                    KLITIK 003/003 Desa/Kelurahan Karang Tengah<br />
                    Kecamatan Sragen, Kabupaten Sragen<br />
                    Provinsi Jawa Tengah
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@sutarmi.com<br />
                    <strong>Telepon:</strong> 0823-1059-8347
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Syarat & Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID')}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}