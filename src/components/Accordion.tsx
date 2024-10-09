import React, { useState } from 'react';

type Theme = "primary" | "secondary";
type Size = "small" | "medium" | "large";

interface AccordionItemProps {
    header: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
}

interface AccordionProps {
    items: AccordionItemProps[];
    allowMultiple?: boolean;
    theme?: Theme;
    size?: Size;
}

const Accordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    theme = "primary",
    size = "medium",
}) => {
    // State to manage open items
    const [openItems, setOpenItems] = useState<number[]>([]);

    // Theme and size styles
    const matrixTheme = "font-mono font-semibold";
    const primaryStyle = "bg-black text-green-400 border-2 border-green-400 shadow-sm shadow-green-800";
    const secondaryStyle = "bg-green-400 text-black border-2 border-black shadow-sm shadow-gray-800";
    const largeStyle = "px-6 py-3 text-xl";
    const mediumStyle = "px-4 py-2 text-base";
    const smallStyle = "px-2 py-1 text-sm";

    // Determine theme and size based on props
    const themeStyle = theme === "primary" ? primaryStyle : secondaryStyle;
    const sizeStyle = size === "small" ? smallStyle : size === "large" ? largeStyle : mediumStyle;

    // Handle accordion item toggle
    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
            );
        } else {
            setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className={`${matrixTheme} ${themeStyle} ${sizeStyle}`}>
            {items.map((item, index) => (
                <div key={index} className="mb-2">
                    <button
                        onClick={() => handleToggle(index)}
                        className={`w-full text-left ${themeStyle} ${sizeStyle} px-4 py-2`}
                    >
                        {item.header}
                    </button>
                    {openItems.includes(index) && (
                        <div className={`p-4 border-t ${themeStyle}`}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
