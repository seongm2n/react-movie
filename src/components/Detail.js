import PropTypes from 'prop-types';

function Detail({ id, coverImg, title, description_full, genres, year }) {
	return (
		<div>
			<img
				src={coverImg}
				alt={title}
			/>

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

Detail.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	description_full: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
