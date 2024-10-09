import React from "react";

type Theme = "primary" | "secondary"
type Size = "small" | "medium" | "large"

interface DropDownProps {
    options: string[]
    placeholder?: string
    theme?: Theme
    size?: Size
    onSelect: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = ({
    options,
    placeholder = "Select an option",
    theme = "primary",
    size = "medium",
    onSelect,
}) => {
    // theme styles
    const matrixTheme = "font-mono font-semibold"
    const primaySyle = "bg-black text-green-400 border-2 border-green-400 shadow-sm shadow-green-800 hover:bg-gray-800  focus:outline-none"
    const secondaryStyle = "bg-green-400 text-black border-2 border-black shadow-sm shadow-gray-800 hover:bg-green-500 focus:outline-none"
    const largeStyle = "px-6 py-3 text-xl"
    const mediumStyle = "px-4 py-2 text-md"
    const smallStyle = "px-2 py-1 text-sm"

    // determine styles based on props
    const themeStyle = theme === "primary"
        ? primaySyle
        : secondaryStyle

    const sizeStyle = size === "small"
        ? smallStyle
        : size === "large"
            ? largeStyle
            : mediumStyle

    return (
        <select
            className={`${matrixTheme} ${themeStyle} ${sizeStyle} rounded cursor-pointer`}
            onChange={(e) => onSelect(e.target.value)}
            defaultValue=""
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default DropDown