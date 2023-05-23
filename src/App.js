import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import MovieDetail from './routes/MovieDetail';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/movie/:id'
					element={<MovieDetail />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
