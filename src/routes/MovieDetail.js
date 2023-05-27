import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

function MovieDetail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	const getMovie = async () => {
		try {
			const response = await fetch(
				`https://yts-proxy.nomadcoders1.now.sh/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
			);
			const json = await response.json();
			setMovie(json.data.movie);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovie();
	}, [id]);

	return (
		<div className='movie__detail'>
			{loading ? (
				<Loading />
			) : (
				<div className='movie'>
					<Navbar />
					<Detail
						key={movie.id}
						id={movie.id}
						coverImg={movie.medium_cover_image}
						title={movie.title}
						year={movie.year}
						rating={movie.rating}
						description_full={movie.description_full}
						genres={movie.genres}
					/>
				</div>
			)}
		</div>
	);
}

export default MovieDetail;
