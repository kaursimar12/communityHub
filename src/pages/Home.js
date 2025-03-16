import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='relative flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6'>
			<h1 className='text-5xl font-extrabold text-gray-900 leading-tight'>
				Connect Communities
			</h1>
			<p className='mt-3 text-lg text-gray-600 max-w-xl'>
				Bridging gaps between faiths with tech and a dash of fun!
			</p>
			<div className='flex flex-wrap justify-center items-center mt-6 space-x-4'>
				<span className='bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full'>
					🔹 Unlimited Advantages
				</span>
				<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full'>
					👥 +8 peoples
				</span>
			</div>
			<div className='flex justify-center items-center mt-10 space-x-6'>
				<div className='w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white'>
					<img
						src='/images/community.jpg'
						alt='Community'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white'>
					<img
						src='/images/discussion.jpg'
						alt='Discussion'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white'>
					<img
						src='/images/community.jpg'
						alt='Workshop'
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
			<Link to='/events'>
				<button className='mt-8 bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-all'>
					Explore Events →
				</button>
			</Link>
		</div>
	);
}

export default Home;
