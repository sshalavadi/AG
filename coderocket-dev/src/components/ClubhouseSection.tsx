export function ClubhouseSection() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://fortuneonevistaa.in/images/fortune-one-09.jpg" 
                alt="Clubhouse interior" 
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://fortuneonevistaa.in/images/fortune-one-12.jpg" 
                alt="Clubhouse amenity" 
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://fortuneonevistaa.in/images/fortune-one-10.jpg" 
                alt="Clubhouse facility" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://fortuneonevistaa.in/images/fortune-one-11.jpg" 
                alt="Clubhouse exterior" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-light mb-6 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
              A Haven of Comfort and Ease
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Jost, sans-serif' }}>
              The Atrium Clubhouse, spanning an expansive 5500 sqft., is the epitome of luxury and exclusivity, 
              designed to serve the residents of our select community. This architectural marvel combines contemporary 
              design with world-class amenities, creating a space where relaxation and recreation seamlessly blend.
            </p>

            <div className="space-y-4 text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                <span>State-of-the-art fitness center</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                <span>Swimming pool with deck area</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                <span>Multi-purpose banquet hall</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                <span>Children's play area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}