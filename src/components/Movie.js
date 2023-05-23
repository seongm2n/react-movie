import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, description_full, genres, year }) {
	return (
		<div>
			<Link to={`/movie/${id}`}>
				<img
					src={coverImg}
					alt={title}
				/>
			</Link>
			<h2>{title}</h2>
			<h3>{year}</h3>
			<p>{description_full}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
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
