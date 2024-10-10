import React from "react";

interface ProgressBarProps {
	progress: number;
	striped: boolean;
}

function roundToNearestTen(num: number): number {
	return Math.round(num / 10);
}

const ProgressBar = ({ progress, striped }: ProgressBarProps) => {
	const indexArray = Array.from({ length: 10 }, (_, index) => index);

	return (
		<div className={"w-96 h-8 border-[0.5px] border-green-400 flex"}>
			{striped ? (
				indexArray.map((i, index) => {
					if (i < roundToNearestTen(progress)) {
						return (
							<div
								key={index}
								className="w-[10%] h-full border-[0.5px] border-green-400 p-1 bg-green-200"
							></div>
						);
					} else {
						return (
							<div
								key={index}
								className="w-[10%] h-full border-[0.5px] border-green-400 p-1"
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
