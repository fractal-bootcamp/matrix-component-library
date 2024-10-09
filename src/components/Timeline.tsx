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
	events: Event[];
}

const Timeline = ({ events }: TimelineProps) => {
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

export default Timeline;
