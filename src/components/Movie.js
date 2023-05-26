import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';
import styled from 'styled-components';

const MovieCover = styled.div`
	width: 230px;
	height: 345px;
	margin: 10px 0px 0px 10px;
	position: relative;
	cursor: pointer;
`;

const MovieCard = styled.div`
	&:hover {
		opacity: 0.3;
	}
	&:hover div {
		transition: opacity 0.3s ease;
		opacity: 1;
		background-color: #fee25b;
		border-radius: 30px;
	}
`;
const MovieImg = styled.div`
	position: relative;
`;

const Img = styled.img`
	display: block;
	border-radius: 30px;
`;

const MovieData = styled.div`
	width: 230px;
	height: 345px;
	display: flex;
	transform: translate(0, -100%);
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	color: dark-gray;
	opacity: 0;
	position: absolute;
	box-sizing: border-box;
`;

const MovieTitle = styled.h2`
	margin: 20px;
`;

function Movie({ id, coverImg, title, description_full, genres, year }) {
	return (
		<MovieCover>
			{/* <div className='movie__swipe'></div> */}
			<MovieCard>
				<MovieImg>
					<Link to={`/movie/${id}`}>
						<Img
							src={coverImg}
							alt={title}
						/>
					</Link>
				</MovieImg>
				<MovieData>
					<MovieTitle className='movie__title'>{title}</MovieTitle>
					<h3 className='movie__year'>{year}</h3>
					<p className='movie__description'>{description_full}</p>
					<ul className='genres'>
						{genres.map((g) => (
							<li key={g}>{g}</li>
						))}
					</ul>
				</MovieData>
			</MovieCard>
		</MovieCover>
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
