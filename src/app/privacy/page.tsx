import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-green-100">
              Perlindungan Data Pribadi Anda Adalah Prioritas Kami
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Selamat datang di SUTARMI. Kami memahami bahwa privasi Anda sangat penting. 
                  Kebijakan Privasi ini menjelaskan bagaimana SUTARMI mengumpulkan, menggunakan, 
                  melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan 
                  layanan jasa penunjang pertanian kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda setuju dengan praktik yang dijelaskan 
                  dalam kebijakan ini. Jika Anda tidak setuju dengan praktik kami, jangan 
                  gunakan layanan kami.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi yang Kami Kumpulkan</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami dapat mengumpulkan informasi pribadi berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat lengkap</li>
                  <li>Informasi pembayaran (jika berlaku)</li>
                  <li>Informasi tentang lahan pertanian Anda</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Non-Pribadi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami juga dapat mengumpulkan informasi non-pribadi seperti:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Informasi tentang penggunaan website</li>
                  <li>Data teknikal seperti alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Waktu akses</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cara Kami Menggunakan Informasi</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Menyediakan layanan jasa pertanian yang Anda minta</li>
                  <li>Memproses pembayaran dan transaksi</li>
                  <li>Mengkomunikasikan dengan Anda tentang layanan kami</li>
                  <li>Memberikan dukungan pelanggan</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Mengirim informasi promosi (dengan persetujuan Anda)</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian Informasi</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda 
                  kepada pihak ketiga, kecuali dalam situasi berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Untuk memproses pembayaran (dengan penyedia pembayaran)</li>
                  <li>Untuk menyediakan layanan yang Anda minta</li>
                  <li>Untuk mematuhi hukum atau peraturan yang berlaku</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Keamanan Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi 
                  informasi pribadi Anda dari akses tidak sah, penggunaan, atau perubahan. 
                  Langkah-langkah ini meliputi:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Keamanan fisik dan elektronik</li>
                  <li>Pemantauan keamanan rutin</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Namun, tidak ada metode transmisi internet atau penyimpanan elektronik 
                  yang 100% aman. Kami tidak dapat menjamin keamanan absolut.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Website kami dapat menggunakan cookies untuk meningkatkan pengalaman Anda. 
                  Cookies adalah file kecil yang disimpan di browser Anda. Anda dapat mengatur 
                  browser untuk menolak cookies, tetapi ini dapat mempengaruhi fungsionalitas website.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privasi Anak</h2>
                <p className="text-gray-700 leading-relaxed">
                  Layanan kami tidak ditujukan untuk anak-anak di bawah 18 tahun. 
                  Kami tidak sengaja mengumpulkan informasi pribadi dari anak-anak. 
                  Jika kami mengetahui bahwa kami telah mengumpulkan informasi dari 
                  anak di bawah 18 tahun, kami akan mengambil langkah untuk menghapus 
                  informasi tersebut segera.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                  Perubahan akan diposting di halaman ini dengan tanggal revisi terbaru. 
                  Kami akan memberi tahu Anda tentang perubahan material melalui email 
                  atau pemberitahuan di website kami.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau 
                  ingin menggunakan hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>SUTARMI</strong><br />
                    KLITIK 003/003 Desa/Kelurahan Karang Tengah<br />
                    Kecamatan Sragen, Kabupaten Sragen<br />
                    Provinsi Jawa Tengah
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> info@sutarmi.com<br />
                    <strong>Telepon:</strong> 0823-1059-8347
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID')}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}