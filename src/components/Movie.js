import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, coverImg, title, description_full, genres, year }) {
	return (
		<div className="outside">
			{/* <div className='movie__swipe'></div> */}
			<div className='movie'>
				<div className="movie__img">
				<Link to={`/movie/${id}`}>
					<img
						src={coverImg}
						alt={title}
					/>
				</Link>
				</div>
				<div className='movie__data'>
					<h2 className='movie__title'>{title}</h2>
					<h3 className='movie__year'>{year}</h3>
					<p className='movie__description'>{description_full}</p>
					<ul className='genres'>
						{genres.map((g) => (
							<li key={g}>{g}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	description_full: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
