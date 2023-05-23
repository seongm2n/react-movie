import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function MovieHome() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	//async - await
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts-proxy.nomadcoders1.now.sh/list_movies.json
				?minimum_rating=6.9&sort_by=year&query_term=2023`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<section className='container'>
			{loading ? (
				<div className='loader'>
					<span className='loader__text'> Loading...</span>
				</div>
			) : (
				<div className='movies'>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							// year={movie.year}
							// description_full={movie.description_full}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</section>
	);
}

export default MovieHome;