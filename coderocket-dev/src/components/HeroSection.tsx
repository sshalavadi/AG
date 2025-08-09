import { ContactForm } from './ContactForm'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://fortuneonevistaa.in/images/slider/1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Text */}
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Experience Luxury
            <br />
            <span className="text-yellow-300">from the Moment</span>
            <br />
            you arrive
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-8">
            Fortune One
            <br />
            <span className="text-lg text-gray-300">Vista</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}