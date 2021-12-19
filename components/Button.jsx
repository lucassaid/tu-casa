export default function Button({
  children,
  className,
}) {

  return (
    <button
      className={`appearance-none px-3 py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  )
}