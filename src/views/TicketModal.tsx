import type { TicketTier } from '../models/types'

interface TicketModalProps {
  selectedTicket: TicketTier | null
  onCloseModal: () => void
}

export function TicketModal({
  selectedTicket,
  onCloseModal,
}: TicketModalProps) {
  if (!selectedTicket) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card p-8 rounded-3xl max-w-md w-full border-[#00f2ff]/40 space-y-6 text-center relative">
        <button
          type="button"
          onClick={onCloseModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>
        <div className="text-4xl">🎟️</div>
        <h4 className="text-2xl font-orbitron font-bold text-white">
          {selectedTicket.name}
        </h4>
        <p className="text-sm text-gray-300">
          Registration for{' '}
          <span className="text-[#00f2ff] font-semibold">
            {selectedTicket.name} ({selectedTicket.price})
          </span>{' '}
          is confirmed! Complete your profile setup to receive your pass barcode.
        </p>
        <button
          type="button"
          onClick={onCloseModal}
          className="w-full py-3 rounded-xl font-orbitron font-bold text-sm bg-gradient-to-r from-[#00f2ff] to-[#aa3bff] text-slate-950 uppercase"
        >
          Confirm Pass
        </button>
      </div>
    </div>
  )
}
