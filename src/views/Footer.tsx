import gdgLogo from '../assets/GDG_LOGO.png'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 bg-[#040609] text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <img
            src={gdgLogo}
            alt="GDG Logo"
            className="h-8 w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-orbitron tracking-widest text-gray-400 uppercase">
              AGAINST ALL ODDS:
            </span>
            <span className="text-base font-orbitron font-bold text-white uppercase">
              ESCAPADE
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-500 font-sans">
          &copy; {new Date().getFullYear()} Google Developer Group USLS. All
          rights reserved.
        </p>

        <div className="flex items-center gap-6 font-orbitron text-xs">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState(null, '', '/')
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hover:text-[#00f2ff] transition-colors"
          >
            Home
          </a>
          <a
            href="/tickets"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState(null, '', '/tickets')
              document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hover:text-[#00f2ff] transition-colors"
          >
            Tickets
          </a>
          <a
            href="/leaderboard"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState(null, '', '/leaderboard')
              document.getElementById('leaderboard')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hover:text-[#00f2ff] transition-colors"
          >
            Leaderboard
          </a>
        </div>
      </div>
    </footer>
  )
}
