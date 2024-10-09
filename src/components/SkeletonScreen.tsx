// Description: A placeholder skeleton screen for loading states
// Requirements:
// - Skeleton shapes (rectangles, circles, lines)
// - Different sizes and layouts
// - Animation speed

import React, { useEffect, useState } from "react";

interface SkeletonScreenProps {
	letters: string;
}

const SkeletonScreen = ({ letters }: SkeletonScreenProps) => {
	const LETTERS = letters.split("");
	const [letterColumns, setLetterColumns] = useState<string[][]>([]);

	// Initialize columns with empty arrays
	useEffect(() => {
		const columns = Array.from({ length: 12 }, () => []);
		setLetterColumns(columns);
	}, []);

	// Add new letters
	useEffect(() => {
		const intervalId = setInterval(() => {
			setLetterColumns((prevColumns) =>
				prevColumns.map((column) => {
					const randomLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
					return [...column.slice(-10), randomLetter];
				})
			);
		}, 100);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="relative flex justify-around h-64 overflow-hidden">
			{letterColumns.map((column, columnIndex) => (
				<div key={columnIndex} className="relative w-10">
					{column.map((letter, letterIndex) => (
						<span
							key={letterIndex}
							className={`absolute text-matrixGreen text-xl left-1/2 transform -translate-x-1/2 animate-drop`}
							style={{
								top: `${letterIndex * 40}px`,
								animationDelay: `${columnIndex * 0.5}s`,
								textShadow: "0 0 10px rgba(0, 255, 0, 0.7)",
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
