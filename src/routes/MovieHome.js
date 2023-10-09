import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';
import CategoryNav from '../components/CategoryNav';
import Loading from '../components/Loading';

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
		<div>
			{!loading && <CategoryNav />}
			<Container>
				{loading ? (
					<Loading />
				) : (
					<Movies>
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								coverImg={movie.medium_cover_image}
								title={movie.title}
								genres={movie.genres}
							/>
						))}
					</Movies>
				)}
			</Container>
		</div>
	);
}

export default MovieHome;

const Container = styled.section`
	position: relative;
	margin: auto;
	overflow: hidden;
`;

const Movies = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;
