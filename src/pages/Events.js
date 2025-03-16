import React, { useState } from 'react';
import EventCard from '../components/eventCard';

const dummyEvents = [
	{
		id: 1,
		title: 'Ram Navami Festival 2025',
		category: 'Religious',
		date: 'Monday, March 17, 2025 - Wednesday',
		dateShort: 'MAR 17',
		time: '4:00 PM IST - 10:00 PM IST',
		location: 'Ayodhya, India',
		image: '/images/charity.jpg',
	},
	{
		id: 2,
		title: 'Eid-ul-Fitr',
		category: 'Religious',
		date: 'Sunday, March 30, 2025',
		dateShort: 'MAR 30',
		time: '5:30 AM IST',
		location: 'Mecca, Saudi Arabia',
		image: '/images/charity.jpg',
	},
	{
		id: 3,
		title: 'Mahavir Jayanti',
		category: 'Religious',
		date: 'Thursday, April 10, 2025 - Saturday',
		dateShort: 'APR 10',
		time: '5:30 AM IST - 5:30 AM IST',
		location: 'Pawapuri, India',
		image: '/images/charity.jpg',
	},
	{
		id: 4,
		title: 'Good Friday Service',
		category: 'Religious',
		date: 'Friday, April 18, 2025 - Saturday',
		dateShort: 'APR 18',
		time: '5:30 AM IST - 5:30 AM IST',
		location: 'Vatican City',
		image: '/images/charity.jpg',
	},
	{
		id: 5,
		title: 'Community Clean-Up Drive',
		category: 'Charity',
		date: 'Saturday, June 14, 2025',
		dateShort: 'JUN 14',
		time: '8:00 AM IST - 12:00 PM IST',
		location: 'Delhi, India',
		image: '/images/charity.jpg',
	},
	{
		id: 6,
		title: 'Food Donation Camp',
		category: 'Charity',
		date: 'Sunday, July 20, 2025',
		dateShort: 'JUL 20',
		time: '10:00 AM IST - 2:00 PM IST',
		location: 'Bangalore, India',
		image: '/images/charity.jpg',
	},
	{
		id: 7,
		title: 'Cultural Fest 2025',
		category: 'Social',
		date: 'Friday, August 22, 2025',
		dateShort: 'AUG 22',
		time: '5:00 PM IST - 11:00 PM IST',
		location: 'Kolkata, India',
		image: '/images/charity.jpg',
	},
];

const Event = () => {
	const [events, setEvents] = useState(dummyEvents);
	const [category, setCategory] = useState('All');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newEvent, setNewEvent] = useState({
		title: '',
		category: 'Religious',
		date: '',
		time: '',
		location: '',
		image: null,
		imagePreview: null,
	});

	const filteredEvents =
		category === 'All'
			? events
			: events.filter((event) => event.category === category);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewEvent({ ...newEvent, [name]: value });
	};
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setNewEvent({ ...newEvent, image: file, imagePreview: reader.result });
			};
			reader.readAsDataURL(file);
		}
	};
	const handleAddEvent = () => {
		if (
			!newEvent.title ||
			!newEvent.date ||
			!newEvent.time ||
			!newEvent.location
		) {
			alert('Please fill all fields!');
			return;
		}

		const formattedDate = new Date(newEvent.date).toDateString().split(' ');
		const dateShort = `${formattedDate[1].toUpperCase()} ${formattedDate[2]}`;

		const newEventData = {
			id: events.length + 1,
			title: newEvent.title,
			category: newEvent.category,
			date: newEvent.date,
			dateShort: dateShort,
			time: newEvent.time,
			location: newEvent.location,
			image: newEvent.imagePreview || '/images/charity.jpg',
		};

		setEvents([...events, newEventData]);
		setIsModalOpen(false);
		setNewEvent({
			title: '',
			category: 'Religious',
			date: '',
			time: '',
			location: '',
			image: null,
			imagePreview: null,
		});
	};

	return (
		<div className='max-w-6xl mx-auto p-4'>
			<h1 className='text-3xl font-bold text-gray-800'>Upcoming Events</h1>

			<div className='mt-6 flex items-center gap-4'>
				<div className='relative'>
					<select
						className='border border-gray-300 bg-white rounded-xl px-5 py-3 text-lg font-semibold shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:bg-gray-100 transition appearance-none cursor-pointer pr-10'
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value='All'>All Categories</option>
						<option value='Religious'>Religious</option>
						<option value='Social'>Social</option>
						<option value='Charity'>Charity</option>
					</select>
				</div>

				<button
					className='bg-gray-600 text-white px-4 py-2 rounded-xl px-5 py-3 text-lg shadow-lg hover:bg-gray-700 transition'
					onClick={() => setIsModalOpen(true)}
				>
					+ Add Event
				</button>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
				{filteredEvents.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
			{isModalOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
					<div className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full'>
						<h2 className='text-2xl font-bold mb-4'>Add New Event</h2>
						<input
							type='text'
							name='title'
							placeholder='Event Title'
							value={newEvent.title}
							onChange={handleChange}
							className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-3'
						/>
						<select
							name='category'
							value={newEvent.category}
							onChange={handleChange}
							className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-3'
						>
							<option value='Religious'>Religious</option>
							<option value='Social'>Social</option>
							<option value='Charity'>Charity</option>
						</select>
						<input
							type='date'
							name='date'
							value={newEvent.date}
							onChange={handleChange}
							className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-3'
						/>
						<input
							type='text'
							name='time'
							placeholder='Event Time'
							value={newEvent.time}
							onChange={handleChange}
							className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-3'
						/>
						<input
							type='text'
							name='location'
							placeholder='Location'
							value={newEvent.location}
							onChange={handleChange}
							className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-3'
						/>
						<input
							type='file'
							accept='image/*'
							onChange={handleImageUpload}
							className='mb-3'
						/>
						{newEvent.imagePreview && (
							<img
								src={newEvent.imagePreview}
								alt='Preview'
								className='w-full h-40 object-cover rounded-lg mb-3'
							/>
						)}
						<div className='flex justify-end gap-3'>
							<button
								className='px-4 py-2 bg-gray-400 rounded-lg'
								onClick={() => setIsModalOpen(false)}
							>
								Cancel
							</button>
							<button
								className='px-4 py-2 bg-gray-600 text-white rounded-lg'
								onClick={handleAddEvent}
							>
								Add Event
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Event;
