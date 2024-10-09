import React from "react"

type Size = "small" | "medium" | "large"

interface ButtonProps {
    label: string
    primary: boolean
    size?: Size
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
    label,
    primary = true,
    size = "medium",
    onClick,
}) => {
    //const mode = primary ? "storybook-button--primary" : "storybook-button-secondary"
    return (
        <button
            type="button"
            className=""
        >
            {label}
        </button>
    )
}

export default Button