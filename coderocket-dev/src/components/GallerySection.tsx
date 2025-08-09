export function GallerySection() {
  const galleryImages = [
    'https://fortuneonevistaa.in/images/gallery/001.jpg',
    'https://fortuneonevistaa.in/images/gallery/002.jpg',
    'https://fortuneonevistaa.in/images/gallery/003.jpg',
    'https://fortuneonevistaa.in/images/gallery/004.jpg',
    'https://fortuneonevistaa.in/images/gallery/005.jpg'
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Gallery
          </h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Jost, sans-serif' }}>
            Discover the beauty and elegance of Fortune One Vista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}