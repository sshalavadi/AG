import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'Amenities', href: '#amenities' },
    { text: 'Infrastructure', href: '#infrastructure' },
    { text: 'Connectivity', href: '#connectivity' },
    { text: 'Gallery', href: '#gallery' },
    { text: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://fortuneonevistaa.in/images/logo-white.svg" 
              alt="Fortune One Vista" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-sm font-medium"
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="block py-2 text-white hover:text-yellow-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}