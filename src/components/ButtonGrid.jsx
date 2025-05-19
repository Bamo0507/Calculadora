import Button from "./Button"

function ButtonGrid({buttons, onButtonClick}) {
    const sortedButtons = buttons.sort((a, b) => a.gridLocation - b.gridLocation)

    return(
        <div className="grid grid-cols-4 grid-rows-5 gap-2 h-full">
            {sortedButtons.map(button => (
                <Button
                    key={button.gridLocation}
                    label={button.text}
                    onClick={() => onButtonClick(button)}
                    type={button.type}
                />
            ))}
        </div>
    )
}
export default ButtonGrid