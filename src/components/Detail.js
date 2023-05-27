import PropTypes from 'prop-types';
import styled from 'styled-components';

function Detail({ id, coverImg, title, description_full, genres, year }) {
	return (
		<DetailPage>
			<img
				src={coverImg}
				alt={title}
				style={{ borderRadius: '30px' }}
			/>
			<div
				className='detail__data'
				style={{
					backgroundColor: 'yellow',
					borderRadius: '30px',
					marginLeft: '20px',
					padding: '15px',
				}}
			>
				<h2 style={{ textAlign: 'center' }}>{title}</h2>
				<h3>{year}</h3>
				<p>{description_full}</p>
				<ul style={{ listStyle: 'none', padding: 0 }}>
					{genres.map((g) => (
						<li key={g}> 👉🏻 {g}</li>
					))}
				</ul>
			</div>
		</DetailPage>
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

const DetailPage = styled.div`
	display: flex;
	// text-align: center;
	padding: 50px;
	margin: 50px;
`;
