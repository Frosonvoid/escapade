import type { CrewWithEscapeTime } from '../models/crewModel'

interface DeleteConfirmModalProps {
  crew: CrewWithEscapeTime | null
  onClose: () => void
  onConfirm: () => Promise<void>
}

const DeleteConfirmModal = ({
  crew,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) => {
  if (!crew) {
    return null
  }

  const handleDelete = async () => {
    await onConfirm()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080b0d] p-7 shadow-2xl">
        <div className="mb-6">
          <h2 className="font-['Orbitron'] text-xl font-bold text-white">
            Delete Crew
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Are you sure you want to delete{' '}
            <span className="font-semibold text-white">
              {crew.crew_name}
            </span>
            ?
          </p>

          <p className="mt-2 text-xs text-gray-500">
            This will also delete the crew's escape time from the leaderboard.
            This action cannot be undone.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md border border-white/10 bg-white/5 px-5 py-3 font-['Space_Grotesk'] text-sm text-gray-300 transition hover:bg-white/10"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="w-full rounded-md bg-red-500 px-5 py-3 font-['Space_Grotesk'] text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal