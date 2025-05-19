function Body({digital_screen, buttons}) {
    return (
        <div id="calc-body" className="relative rounded-lg w-auto h-auto border-2 border-[#add8e6] flex flex-col items-center p-5 bg-[var(--background-calculator)] shadow-[6px_6px_0_#add8e6]">
            {/* Digital Screen */}
            {digital_screen}
            {/* Spacer */}
            <div className="h-4"></div>            
            {/* Buttons */}
            {buttons}
            {/* Spacer */}
            <div className="h-4"></div>      
        </div>
    )
}
export default Body