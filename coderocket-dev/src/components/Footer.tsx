export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="https://fortuneonevistaa.in/images/logo-white.svg" 
              alt="Fortune One Vista" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience luxury living at its finest in our exclusive villa community 
              near Nandi Hills, Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#infrastructure" className="text-gray-300 hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#connectivity" className="text-gray-300 hover:text-white transition-colors">Connectivity</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Near Nandi Hills</p>
              <p>Bangalore, Karnataka</p>
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Email: info@fortuneonevista.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Fortune One Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}