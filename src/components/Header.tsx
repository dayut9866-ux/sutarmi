'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="SUTARMI Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-green-800">SUTARMI</h1>
              <p className="text-xs text-green-600">Jasa Penunjang Pertanian</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Tentang
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Layanan
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Kontak
            </Link>
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>0823-1059-8347</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-3 border-t border-gray-200">
                <Phone className="h-4 w-4" />
                <span>0823-1059-8347</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}