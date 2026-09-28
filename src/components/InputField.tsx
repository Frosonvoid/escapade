interface InputFieldProps {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="font-['Michroma'] text-xs tracking-wider text-gray-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#8AEF26] focus:ring-1 focus:ring-[#8AEF26]"
      />
    </div>
  )
}

export default InputField