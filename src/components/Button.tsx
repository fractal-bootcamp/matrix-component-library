import { on } from "events"
import React from "react"

type Size = "small" | "medium" | "large"

interface ButtonProps {
    label: string
    primary?: boolean
    size?: Size
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
    label,
    primary = true,
    size = "medium",
    onClick,
}) => {
    // theme styles
    const primaySyle = "bg-black text-green-400 border border-green-400 hover:bg-gray-800  focus:outline-none"
    const secondaryStyle = "bg-green-400 text-black border border-black hover:bg-green-500 focus:outline-none"
    const largeStyle = "px-6 py-3 text-xl"
    const mediumStyle = "px-4 py-2 text-md"
    const smallStyle = "px-2 py-1 text-sm"

    // determine button style based on props
    const mode = primary ? primaySyle : secondaryStyle

    // determine button size based on props
    const sizeClass = size === "small"
        ? smallStyle
        : size === "large"
            ? largeStyle
            : mediumStyle

    return (
        <button
            type="button"
            className={`font-mono font-semibold ${mode} ${sizeClass} `}
            onClick={onclick}
        >
            {label}
        </button>
    )
}

export default Button