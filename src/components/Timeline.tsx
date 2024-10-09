// description: a timeline component for displaying chronological events
// requirements:
// - Vertical or horizontal orientation --
// - Customizable event markers
// - Detailed event description on click or hover --
// - Support for images and icons in events
// - Collapsible event groups

import { useState } from "react";

type Event = {
	title: string;
	description: string;
	year: number;
};

interface TimelineProps {
	orientation: "vertical" | "horizontal";
	events: Event[];
}

const TimelineVertical = ({ events }: { events: Event[] }) => {
	const [description, setDescription] = useState<string>("");
	const handleSetEventDescription = (index: number) => {
		const newDescription = events[index].description;
		setDescription(newDescription);
	};
	return (
		<div className="flex font-mono">
			<div className="text-sm p-3 pr-4 min-w-96">{description}</div>
			<div className="relative flex flex-col items-start">
				{/* Vertical timeline line */}
				<div className="absolute w-1 bg-gray-300 h-full left-[34%] transform -translate-x-1/2"></div>

				{events.map((item, index) => (
					<div key={index} className="relative flex items-center mb-8">
						<div className="w-8 h-8 flex items-center justify-center text-black mr-4 p-2">
							{item.year}
						</div>
						<div className="p-2 relative z-10 bg-black rounded-full mr-2"></div>
						<button
							onClick={() => handleSetEventDescription(index)}
							className="ml-1 text-sm text-start border-[0.5px] p-2"
						>
							{item.title}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

const TimelineHorizontal = ({ events }: { events: Event[] }) => {
	const [description, setDescription] = useState<string>("");
	const handleSetEventDescription = (index: number) => {
		const newDescription = events[index].description;
		setDescription(newDescription);
	};
	return (
		<div className="font-mono flex flex-col">
			<div className="relative flex items-center justify-center">
				<div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
				{events.map((item, index) => (
					<div key={index} className=" z-10 flex flex-col items-center m-1">
						<div className="p-2">{item.year}</div>
						<div className="p-1.5 bg-black rounded-full m-1.5"></div>
						<button
							onClick={() => handleSetEventDescription(index)}
							className="p-2 border-[0.5px]"
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

const Timeline = ({ orientation, events }: TimelineProps) => {
	return (
		<>
			{orientation === "vertical" ? (
				<TimelineVertical events={events} />
			) : (
				<TimelineHorizontal events={events} />
			)}
		</>
	);
};

export default Timeline;
