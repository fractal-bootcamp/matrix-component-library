import React, { useEffect, useState } from "react";

type Theme = "primary" | "secondary"
type Size = "small" | "medium" | "large"

interface DropDownProps {
    options: string[]
    placeholder?: string
    theme?: Theme
    size?: Size
    multiple?: boolean,
    disabled?: boolean
    customOptionRenderer?: (option: string) => React.ReactNode
    onSelect: (value: string | string[]) => void
}

const DropDown: React.FC<DropDownProps> = ({
    options,
    placeholder = "Select an option",
    theme = "primary",
    size = "medium",
    multiple = false,
    disabled = false,
    customOptionRenderer,
    onSelect,
}) => {
    // component states
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedValue, setSelectedValue] = useState<string | string[]>(multiple ? [] : "")
    const [isOpen, setIsOpen] = useState(false)
    const [highLightedIndex, setHighLightedIndex] = useState(0)


    // theme styles
    const matrixTheme = "font-mono font-semibold"
    const primaryStyle = "bg-black text-green-400 border-2 border-green-400 shadow-sm shadow-green-800"
    const secondaryStyle = "bg-green-400 text-black border-2 border-black shadow-sm shadow-gray-800"
    const largeStyle = "px-6 py-3 text-xl"
    const mediumStyle = "px-4 py-2 text-md"
    const smallStyle = "px-2 py-1 text-sm"
    const searchStyle = "w-full px-3 py-2 text-green-400 font-medium bg-transparent border-b border-green-400 hover:bg-gray-800 focus:outline-none"

    // determine styles based on props
    const themeStyle = theme === "primary"
        ? primaryStyle
        : secondaryStyle

    const sizeStyle = size === "small"
        ? smallStyle
        : size === "large"
            ? largeStyle
            : mediumStyle


    // handler functions for state management
    const filteredOptions = options.filter((option) => {
        return option.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const handleSelectedValue = (value: string) => {
        if (multiple) {
            const newValue = Array.isArray(selectedValue)
                ? selectedValue.includes(value)
                    ? selectedValue.filter((item) => item! == value)
                    : [...selectedValue, value]
                : [value]
            setSelectedValue(newValue)
            onSelect(newValue)
            setIsOpen(true)
        } else {
            setSelectedValue(value)
            onSelect(value)
            setIsOpen(false)
        }
    }

    // clear selection
    const handleClearSelection = () => {
        setSelectedValue(multiple ? [] : "")
        onSelect(multiple ? [] : "")
        setIsOpen(false)
        setSearchTerm("")
    }

    // keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") {
            setHighLightedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1))
        } else if (e.key === "ArrowUp") {
            setHighLightedIndex((prev) => Math.max(prev - 1, 0))
        } else if (e.key === "Enter" && filteredOptions.length > 0) {
            handleSelectedValue(filteredOptions[highLightedIndex])
        } else if (e.key === "Escape") {
            setIsOpen(false)
        }
    }

    // Update highlighted index when options change
    useEffect(() => {
        setHighLightedIndex(0)
    }, [filteredOptions])


    return (
        <div
            className={`${matrixTheme} ${themeStyle} ${sizeStyle} w-96 cursor-pointer`}
            onClick={() => !disabled && (!multiple || !isOpen) && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role={"combobox"}
            aria-expanded={isOpen}
        >
            <div className="flex items-center justify-between">
                <span>
                    {Array.isArray(selectedValue) && selectedValue.length > 0
                        ? selectedValue.join(", ")
                        : !Array.isArray(selectedValue) && selectedValue
                            ? selectedValue
                            : placeholder}
                </span>
                {(Array.isArray(selectedValue)) && selectedValue.length > 0 || (!Array.isArray(selectedValue) && selectedValue) && (
                    <button
                        type="button"
                        className="ml-2"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClearSelection()
                        }}
                        disabled={disabled}
                    >
                        x
                    </button>
                )}
                {multiple && Array.isArray(selectedValue) && selectedValue.length > 0 && (
                    <button
                        type="button"
                        className="ml-2"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClearSelection()
                        }}
                        disabled={disabled}
                    >
                        x
                    </button>
                )}
            </div>

            {isOpen && (
                <div className="mt-2 mb-2 w-full bg-gray-800 z-10 shadow-md">
                    <input
                        type="text"
                        className={searchStyle}
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        disabled={disabled}
                    />
                    <ul className="overflow-y-auto">
                        {filteredOptions.length > 0
                            ? (
                                filteredOptions.map((option, index) => (
                                    <li
                                        key={option}
                                        className={`px-3 py-2 cursor-pointer ${highLightedIndex === index ? "bg-green-700" : ""}`}
                                        onClick={() => handleSelectedValue(option)}
                                        onMouseEnter={() => setHighLightedIndex(index)}
                                    >
                                        {customOptionRenderer ? customOptionRenderer(option) : option}
                                    </li>
                                ))
                            ) : (
                                <li className="px-3 py-2 font-medium text-gray-500">
                                    No options found
                                </li>
                            )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropDown