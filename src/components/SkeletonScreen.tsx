import React, { useEffect, useState } from "react";

interface SkeletonScreenProps {
	letters: string;
	dropSpeed: number;
	color: "green" | "black";
}

const SkeletonScreen = ({ letters, dropSpeed, color }: SkeletonScreenProps) => {
	const LETTERS = letters.split("");
	const [letterColumns, setLetterColumns] = useState<string[][]>([]);

	const textColor = color === "green" ? "text-matrixGreen" : "";
	const textShadow = color === "green" ? "0 0 10px rgba(0, 255, 0, 0.7)" : "";

	// Initialize columns with empty arrays
	useEffect(() => {
		const columns = Array.from({ length: 12 }, () => []);
		setLetterColumns(columns);
	}, []);

	// Add new letters
	useEffect(() => {
		const intervalId = setInterval(
			() => {
				setLetterColumns((prevColumns) =>
					prevColumns.map((column) => {
						const randomLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
						return [...column.slice(-10), randomLetter];
					})
				);
			},
			dropSpeed > 0 ? dropSpeed : 100
		);
		return () => clearInterval(intervalId);
	}, [dropSpeed]);

	return (
		<div className="relative flex justify-around h-96 w-full overflow-hidden">
			{letterColumns.map((column, columnIndex) => (
				<div key={columnIndex} className="relative w-10">
					{column.map((letter, letterIndex) => (
						<span
							key={letterIndex}
							className={
								`absolute text-xl left-1/2 transform -translate-x-1/2 animate-drop ` +
								textColor
							}
							style={{
								top: `${letterIndex * 40}px`,
								animationDelay: `${columnIndex * 0.5}s`,
								textShadow: textShadow,
							}}
						>
							{letter}
						</span>
					))}
				</div>
			))}
		</div>
	);
};

export default SkeletonScreen;
