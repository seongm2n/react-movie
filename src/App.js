import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import MovieDetail from './routes/MovieDetail';
import MovieHome from './routes/MovieHome';
import Category from './routes/Category';

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
				<Route
					path='/movie/'
					element={<MovieHome />}
				/>
				<Route
					path={'/:category'}
					element={<Category />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
