// description: a timeline component for displaying chronological events
// requirements:
// - Vertical or horizontal orientation --
// - Customizable event markers
// - Detailed event description on click or hover --
// - Support for images and icons in events
// - Collapsible event groups
import React from "react";
import { useState } from "react";

type Event = {
	title: string;
	description: string;
	year: number;
};

interface TimelineProps {
	orientation: "vertical" | "horizontal";
	color: "green" | "black";
	events: Event[];
}

const TimelineVertical = ({ events, color }: { events: Event[]; color: string }) => {
	const [description, setDescription] = useState<string>("");
	const handleSetEventDescription = (index: number) => {
		const newDescription = events[index].description;
		setDescription(newDescription);
	};

	const markerColor = color === "green" ? "bg-green-400" : "bg-black";
	const borderColor = color === "green" ? "border-green-400" : "";
	const textColor = color === "green" ? "text-green-400" : "";

	return (
		<div className={"flex font-mono " + textColor}>
			<div className="text-sm mr-20 max-w-96">{description}</div>
			<div className="relative flex flex-col items-start">
				{events.map((item, index) => (
					<div key={index} className="relative flex items-center mb-8">
						<div className="w-8 h-8 flex items-center justify-center mr-4 p-2">
							{item.year}
						</div>
						<div
							className={
								"p-2 relative z-10 bg-black rounded-full mr-2 " + markerColor
							}
						></div>
						<button
							onClick={() => handleSetEventDescription(index)}
							className={
								"ml-1 text-sm text-start border-[0.5px] p-2 hover:bg-green-400 hover:text-white " +
								borderColor
							}
						>
							{item.title}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

const TimelineHorizontal = ({ events, color }: { events: Event[]; color: string }) => {
	const [description, setDescription] = useState<string>("");
	const handleSetEventDescription = (index: number) => {
		const newDescription = events[index].description;
		setDescription(newDescription);
	};

	const markerColor = color === "green" ? "bg-green-400" : "bg-black";
	const borderColor = color === "green" ? "border-green-400" : "";
	const textColor = color === "green" ? "text-green-400" : "";

	return (
		<div className={"font-mono flex flex-col " + textColor}>
			<div className="relative flex items-center justify-center">
				{events.map((item, index) => (
					<div key={index} className=" z-10 flex flex-col items-center m-1">
						<div className="p-2">{item.year}</div>
						<div className={"p-1.5 rounded-full m-1.5 " + markerColor}></div>
						<button
							onClick={() => handleSetEventDescription(index)}
							className={
								"p-2 border-[0.5px] hover:bg-green-400 hover:text-white " +
								borderColor
							}
						>
							{item.title}
						</button>
					</div>
				))}
			</div>
			<div className="text-sm p-2 min-h-48">{description}</div>
		</div>
	);
};

const Timeline = ({ orientation, color, events }: TimelineProps) => {
	return (
		<>
			{orientation === "vertical" ? (
				<TimelineVertical events={events} color={color} />
			) : (
				<TimelineHorizontal events={events} color={color} />
			)}
		</>
	);
};

export default Timeline;
