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
    // determine button style based on props
    const primaySyle = "bg-black text-green-500 border border-green-500 hover:bg-gray-800  hover:border-green-500 focus:outline-none"
    const secondaryStyle = "bg-green-500 text-black border border-black hover:bg-green-600  hover:borderblack focus:outline-none"
    const mode = primary ? primaySyle : secondaryStyle
    const sizeClass = size === "small"
        ? "px-2 py-1 text-sm"
        : size === "large"
            ? "px-6 py-3 text-xl"
            : "px-4 py-2 text-md"

    return (
        <button
            type="button"
            className={`font-mono ${mode} ${sizeClass} `}
            onClick={onclick}
        >
            {label}
        </button>
    )
}

export default Button