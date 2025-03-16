import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';

function App() {
	return (
		<Router>
			<div className='min-h-screen bg-gray-100'>
				<nav className='bg-white shadow p-4 flex justify-between'>
					<h1 className='text-xl font-bold'>CommunionHub</h1>
					<ul className='flex space-x-4'>
						<li>
							<Link to='/' className='text-blue-500'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/events' className='text-blue-500'>
								Events
							</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/events' element={<Events />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
