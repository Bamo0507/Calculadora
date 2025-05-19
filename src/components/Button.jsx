function Button({ label, onClick, type }) {
    const baseClasses = "relative w-full h-full p-6 text-black rounded-lg transition duration-200 ease-in-out shadow-[3px_3px_0_#3384a0] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#3384a0]"
  
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${type}`}
      >
        <p className="text-2xl">{label}</p>
      </button>
    )
}

export default Button