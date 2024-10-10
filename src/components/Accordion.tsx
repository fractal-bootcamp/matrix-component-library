import React, { useState } from 'react';

export type Theme = "primary" | "secondary";
export type Size = "small" | "medium" | "large";

export interface AccordionItemProps {
    header: string;
    content: React.ReactNode;
    subItems?: AccordionItemProps[]
}

export interface AccordionProps {
    items: AccordionItemProps[];
    allowMultiple?: boolean
    theme?: Theme;
    size?: Size;
}

// Theme and size styles
const matrixTheme = "font-mono font-semibold";
const primaryStyle = "bg-black text-green-400 border-2 border-green-400 shadow-sm shadow-green-800";
const secondaryStyle = "bg-green-400 text-black border-2 border-black shadow-sm shadow-gray-800";
const largeStyle = "px-2 py-2 text-xl";
const mediumStyle = "px-2 py-2 text-base";
const smallStyle = "px-2 py-2 text-sm";

// Determine theme and size based on props
const getStyle = (theme: Theme, size: Size) => {
    const themeStyle = theme === "primary" ? primaryStyle : secondaryStyle
    const sizeStyle = size === "small" ? smallStyle : size === "large" ? largeStyle : mediumStyle;
    return { themeStyle, sizeStyle }
}

export const SingleAccordion: React.FC<AccordionProps> = ({
    items,
    theme = "primary",
    size = "medium",
}) => {
    // State to manage open items
    const [openItem, setOpenItem] = useState<number | null>(null);
    const { themeStyle, sizeStyle } = getStyle(theme, size)

    // Handle accordion item toggle
    const handleToggle = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    }

    return (
        <div className={`${matrixTheme} ${themeStyle} ${sizeStyle} min-w-80`}>
            {items.map((item, index) => (
                <div key={index} className="my-2 mx-2">
                    <button
                        onClick={() => handleToggle(index)}
                        className={`w-full text-left ${themeStyle} ${sizeStyle} bg-gray-900 border border-green-600 px-4 py-2`}
                    >
                        {item.header}
                    </button>
                    {openItem === index && (
                        <div className={`${sizeStyle} px-3 bg-gray-800 border-t border-2 border-green-600 text-base text-gray-500`}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export const NestedAccordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    theme = "primary",
    size = "medium"
}) => {
    const [openItems, setOpenItems] = useState<number[]>([])
    const { themeStyle, sizeStyle } = getStyle(theme, size)

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(index)
                    ? prev.filter((item) => item !== index)
                    : [...prev, index]
            )
        } else {
            setOpenItems((prev) =>
                prev.includes(index)
                    ? []
                    : [index]
            )
        }
    }

    return (
        <div className={`${matrixTheme} ${themeStyle} ${sizeStyle} min-w-80`}>
            {items.map((item, index) => (
                <div key={index} className="my-2 mx-2">
                    <button
                        onClick={() => handleToggle(index)}
                        className={`${themeStyle} ${sizeStyle} w-full text-left px-4 py-2`}
                    >
                        {item.header}
                    </button>
                    {openItems.includes(index) && (
                        <div className={`${sizeStyle} px-3 bg-gray-800 border-t border-2 border-green-600 text-base text-gray-500`}>
                            {item.content}
                            {item.subItems && (
                                <SingleAccordion
                                    items={item.subItems}
                                    theme={theme}
                                    size={size}
                                />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default { SingleAccordion, NestedAccordion }