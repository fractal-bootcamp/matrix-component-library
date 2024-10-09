// Description: a progress bar to indicate the completion percentage of a task
// Behavior:
// - Color
// - Linear / Circular
// - Customizable progress percentage
// - Color customization based on progress
// - Striped and animated stipes option
import React from "react";

interface ProgressBarProps {
	// color: string;
	border: "linear" | "circular";
	progress: number;
}

const ProgressBar = ({ border, progress }: ProgressBarProps) => {
	const styleBorder = border === "linear" ? "" : "rounded-lg";
	return (
		<div className={"w-96 h-8 border-2 border-black " + styleBorder}>
			<div
				className={"bg- h-full shadow-md bg-matrixGreen " + styleBorder}
				style={{ width: `${progress}%` }}
			></div>
			{/* {color}
			{border}
			{progress} */}
		</div>
	);
};

export default ProgressBar;
