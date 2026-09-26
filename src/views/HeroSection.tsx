import heroBg from '../assets/HERO_BG.jpg'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(7,9,14,0.5), rgba(7,9,14,0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        <h1 className="font-orbitron font-extrabold tracking-tight uppercase leading-none text-white">
          <span className="block text-white text-2xl sm:text-4xl md:text-5xl font-large tracking-[0.2em] mb-2">
            AGAINST ALL ODDS:
          </span>
          <span className="block text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] mb-2">
            ESCAPADE
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-white text-base sm:text-lg md:text-xl font-light leading-relaxed">
          [Description]
        </p>
      </div>
    </section>
  )
}
