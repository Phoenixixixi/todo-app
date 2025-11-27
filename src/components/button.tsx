export default function Button({ children }: { children: string }) {
  return (
    <div
      className="p-2 bg-cyan-300 text-white rounded-sm shadow-lg
        cursor-pointer active:scale-95 duration-100"
    >
      {children}
    </div>
  )
}
