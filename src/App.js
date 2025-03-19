import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<div className='min-h-screen bg-gray-100'>
				<Home />
			</div>
		</Router>
	);
}

export default App;
