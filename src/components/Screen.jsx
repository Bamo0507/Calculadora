function Screen({text_display}) {
    return (
        <div id="calc-screen" className="relative w-full h-1/3 rounded-lg bg-[var(--screen-bg)] shadow-[4px_4px_0_#d1eaf0] flex items-center justify-end px-4 my-4 text-4xl font-bold">
            <p className="my-5 text-5xl">{text_display}</p>
        </div>
    )
}
export default Screen