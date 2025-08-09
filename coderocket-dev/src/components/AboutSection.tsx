export function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://fortuneonevistaa.in/images/misc/flower.svg" 
              alt="Decorative flower" 
              className="mx-auto mb-6 w-20 h-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fortune One
            <br />
            <span className="text-2xl text-gray-600">Vista</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Jost, sans-serif' }}>
            Nestled in the serene outskirts of Bangalore, near Nandi Hills, this villa community redefines modern living. 
            Designed to seamlessly blend the futuristic with the natural, Fortune One Vista offers an unparalleled lifestyle 
            experience where luxury meets tranquility.
          </p>
        </div>
      </div>
    </section>
  )
}