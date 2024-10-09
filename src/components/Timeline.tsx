// description: a timeline component for displaying chronological events
// requirements:
// - Vertical or horizontal orientation
// - Customizable event markers
// - Detailed event description on click or hover
// - Support for images and icons in events
// - Collapsible event groups

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
	return (
		<div className="relative flex flex-col items-start font-mono">
			{/* Vertical timeline line */}
			<div className="absolute w-1 bg-gray-300 h-[90%] left-[20%] transform -translate-x-1/2"></div>

			{events.map((item, index) => (
				<div key={index} className="relative flex items-start mb-8 items-center">
					<div className="w-8 h-8 flex items-center justify-center text-black mr-4">
						{item.year}
					</div>
					<div className="w-3 h-3 bg-black rounded-full mr-2"></div>
					<div className="ml-1 text-lg">{item.title}</div>
				</div>
			))}
		</div>
	);
};

const TimelineHorizontal = ({ events }: { events: Event[] }) => {
	return (
		<div className="relative flex items-center font-mono">
			<div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
			{events.map((item, index) => (
				<div key={index} className=" z-10 flex flex-col items-center m-1">
					<div className="p-2">{item.year}</div>
					<div className="p-1.5 bg-black rounded-full m-1.5"></div>
					<div className="p-2 border-[0.5px]">{item.title}</div>
				</div>
			))}
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
