import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid';

const EventCard = ({ event }) => {
	return (
		<div className='bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm transition hover:shadow-xl h-full flex flex-col justify-between'>
			<div className='relative'>
				<img
					src={event.image}
					alt={event.title}
					className='w-full h-48 object-cover'
				/>
				<div className='absolute top-3 right-3 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-md'>
					{event.dateShort}
				</div>
			</div>
			<div className='p-5 flex flex-col flex-grow'>
				<div className='flex justify-between items-center'>
					<span className='bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full'>
						{event.category}
					</span>
					<span className='bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full'>
						FREE
					</span>
				</div>
				<h2 className='text-lg font-semibold mt-2 min-h-[40px]'>
					{event.title}
				</h2>
				<div className='text-gray-500 flex items-center text-sm mt-2'>
					<CalendarDaysIcon className='h-4 w-4 mr-1 text-gray-500' />
					{event.date}
				</div>
				<div className='text-gray-500 flex items-center text-sm mt-1'>
					<ClockIcon className='h-4 w-4 mr-1 text-gray-500' />
					{event.time}
				</div>
				<p className='text-sm text-gray-600 mt-2 min-h-[40px]'>
					{event.location}
				</p>
				<div className='mt-4 flex items-center'>
					<span className='text-yellow-500'>⭐</span>
					<a href='#' className='text-blue-600 font-semibold text-sm ml-2'>
						Join others in this event
					</a>
				</div>
				<button className='w-full mt-auto bg-gray-900 text-white py-2 rounded-md transition hover:bg-gray-700'>
					Event Details →
				</button>
			</div>
		</div>
	);
};

export default EventCard;
