import React, { useEffect, useState } from "react";

type Position = "top" | "bottom" | "left" | "right";
type Theme = "primary" | "secondary";
type Size = "small" | "medium";

interface ToolTipProps {
    content: string;
    position?: Position;
    delay?: number;
    theme?: Theme;
    size?: Size;
    showIcon?: boolean;
    children: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({
    content,
    position = "top",
    delay = 0,
    theme = "primary",
    size = "medium",
    showIcon = true,
    children,
}) => {
    // Component states
    const [visible, setVisible] = useState(false);
    const [showTimeout, setShowTimeout] = useState<NodeJS.Timeout | null>(null);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    // Position styles
    const positionStyle = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    };

    // Theme and size styles
    const matrixTheme = "font-mono font-semibold";
    const primaryStyle = "bg-black text-green-400 border border-green-400 shadow-sm shadow-green-800";
    const secondaryStyle = "bg-green-400 text-black border border-black shadow-sm shadow-gray-800";
    const mediumStyle = "w-4 h-6 text-base";
    const smallStyle = " w-2 h-6 text-sm";
    const toolTipStyle = "absolute z-10 px-3 shadow-lg";

    // Determine theme and size based on props
    const themeStyle = theme === "primary" ? primaryStyle : secondaryStyle;
    const sizeStyle = size === "small" ? smallStyle : mediumStyle;

    // Handle functions for state management
    const showToolTip = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        setShowTimeout(
            setTimeout(() => {
                setVisible(true);
            }, delay)
        );
    };

    const hideToolTip = () => {
        if (showTimeout) {
            clearTimeout(showTimeout);
        }
        setHideTimeout(
            setTimeout(() => {
                setVisible(false);
            }, delay)
        );
    };

    // Clean up timeouts on component unmount
    useEffect(() => {
        return () => {
            if (showTimeout) {
                clearTimeout(showTimeout);
            }
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, [showTimeout, hideTimeout]);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={showToolTip}
            onMouseLeave={hideToolTip}
            onFocus={showToolTip}
            onBlur={hideToolTip}
        >
            <div className="flex items-center">
                {children}
                {showIcon && (
                    <span className="ml-2">
                        <div className={`${matrixTheme} ${themeStyle} ${sizeStyle} ${positionStyle[position]} ${toolTipStyle} flex items-center justify-center cursor-pointer`}>
                            i
                        </div>
                    </span>
                )}
            </div>
            {visible && (
                <div className={`${matrixTheme} ${themeStyle} ${sizeStyle} ${positionStyle[position]} ${toolTipStyle}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default ToolTip;
