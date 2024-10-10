import React from "react";

interface ProgressBarProps {
	progress: number;
	striped: boolean;
	color: "green" | "black";
}

function roundToNearestTen(num: number): number {
	return Math.round(num / 10);
}

const ProgressBar = ({ progress, striped, color }: ProgressBarProps) => {
	const indexArray = Array.from({ length: 10 }, (_, index) => index);

	const borderColor = color === "green" ? "border-green-400" : "border-black";

	return (
		<div className={"w-96 h-8 border-[0.5px] flex " + borderColor}>
			{striped ? (
				indexArray.map((i, index) => {
					if (i < roundToNearestTen(progress)) {
						return (
							<div
								key={index}
								className={
									"w-[10%] h-full border-[0.5px] p-1 bg-green-200 " + borderColor
								}
							></div>
						);
					} else {
						return (
							<div
								key={index}
								className={"w-[10%] h-full border-[0.5px] p-1 " + borderColor}
							></div>
						);
					}
				})
			) : (
				<div
					className={"bg- h-full shadow-md bg-green-400"}
					style={{ width: `${progress}%` }}
				></div>
			)}
		</div>
	);
};

export default ProgressBar;
