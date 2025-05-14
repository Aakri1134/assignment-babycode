import { useGlobalContext } from "../context/GlobalContext"

const ModeToggle = ({ className }: { className?: string }) => {
  const context = useGlobalContext()
  return (
    <button onClick={context?.toggleMode} className={` ${className}`}>
      {context?.mode}
    </button>
  )
}

export default ModeToggle
