import { useState } from 'react'
import InputField from '../components/InputField'
import { loginUser } from '../controllers/authController'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      const admin = await loginUser({
        user_name: userName,
        password,
      })

      console.log('Logged in admin:', admin)

      window.location.href = '/dashboard'
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010206] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/HERO_BG.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#010206]/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#010206]/20 via-[#010206]/40 to-[#010206]/80" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">

        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#080b0d]/75 p-7 shadow-2xl backdrop-blur-md sm:p-8">

          <div className="mb-7">
            <h2 className="font-['Orbitron'] text-2xl font-bold">
              Log in
            </h2>

            <p className="mt-2 font-['Space_Grotesk'] text-sm leading-5 text-gray-400">
              Enter your details below to continue.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            <InputField
              label="Username"
              type="text"
              placeholder="Enter username"
              value={userName}
              onChange={setUserName}
            />

            <div className="space-y-2">
              <label className="font-['Michroma'] text-xs tracking-wider text-gray-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 pr-16 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#8AEF26] focus:ring-1 focus:ring-[#8AEF26]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 transition hover:text-[#8AEF26]"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-[#8AEF26] px-6 py-3 font-['Space_Grotesk'] text-sm font-semibold text-black transition hover:bg-[#76d91d] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>

          </form>

        </div>
      </div>
    </main>
  )
}

export default Login