import React from "react"

type Theme = "primary" | "secondary"
type Size = "small" | "medium" | "large"
interface ButtonProps {
    label: string
    theme?: Theme
    size?: Size
    onClick: () => void
    disabled?: boolean
    loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
    label,
    theme = "primary",
    size = "medium",
    onClick,
    disabled = false,
    loading = false,
}) => {
    // theme styles
    const matrixTheme = "font-mono font-semibold"
    const primaryStyle = "bg-black text-green-400 border-2 border-green-400 shadow-sm shadow-green-800 hover:bg-gray-800  focus:outline-none"
    const secondaryStyle = "bg-green-400 text-black border-2 border-black shadow-sm shadow-gray-800 hover:bg-green-500 focus:outline-none"
    const largeStyle = "px-6 py-3 text-xl"
    const mediumStyle = "px-4 py-2 text-base"
    const smallStyle = "px-2 py-1 text-sm"
    const disabledStyle = "opacity-60 cursor-not-allowed"

    // determine button style based on props
    const themeStyle = theme === "primary"
        ? primaryStyle
        : secondaryStyle

    // determine button size based on props
    const sizeStyle = size === "small"
        ? smallStyle
        : size === "large"
            ? largeStyle
            : mediumStyle

    // handle props
    const handleClick = () => {
        if (!disabled && !loading) {
            onClick()
        }
    }


    return (
        <button
            type="button"
            className={`${matrixTheme} ${themeStyle} ${sizeStyle} ${disabled ? disabledStyle : ""}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {loading ? (
                <div className="flex items-center">
                    <span className="loader mr-2">
                        Loading...
                    </span>
                </div>
            ) : (
                label
            )}
        </button>
    )
}

export default Button