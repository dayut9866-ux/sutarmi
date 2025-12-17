import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="SUTARMI Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">SUTARMI</h3>
                <p className="text-green-300 text-sm">Jasa Penunjang Pertanian</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Mitra terpercaya untuk semua kebutuhan jasa penunjang pertanian Anda. 
              Kami berkomitmen untuk meningkatkan produktivitas pertanian Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-100 hover:text-white transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-100 hover:text-white transition-colors text-sm">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-green-100 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informasi Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-100 text-sm">
                    KLITIK 003/003 Desa/Kelurahan Karang Tengah
                  </p>
                  <p className="text-green-100 text-sm">
                    Kec. Sragen, Kab. Sragen, Prov. Jawa Tengah
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-300 flex-shrink-0" />
                <p className="text-green-100 text-sm">0823-1059-8347</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-300 flex-shrink-0" />
                <p className="text-green-100 text-sm">info@sutarmi.com</p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-green-100 hover:text-white transition-colors text-sm">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-green-100 hover:text-white transition-colors text-sm">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-300 text-sm">
              © 2024 SUTARMI. Hak Cipta Dilindungi.
            </p>
            <p className="text-green-300 text-sm mt-2 md:mt-0">
              Developed with ❤️ for Indonesian Agriculture
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}