import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<ProgressContainer>
				<LoadingBackground />
				<ProgressColor />
			</ProgressContainer>
		</Container>
	);
};

export default Loading;

const Container = styled.div`
	position: relative;
	height: 100vh;
`;

const LoadingBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #dbb8c6;
	opacity: 0;
`;

const ProgressContainer = styled.div`
	margin: auto;
	margin-top: 50px;
	height: 10px;
	width: 100%;
	max-width: 50%;

	border: 10px solid #fee25b;
	border-radius: 15px;
`;

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  35% {
    width: 20%;
  }
  50% {
    width: 30%;
  }
  75% {
    width: 40%;
  }
  100% {
    width: 50%;
  }
`;
const ProgressColor = styled.div`
	position: absolute;
	background-color: #ffffff;
	width: 0px;
	height: 10px;
	border-radius: 15px;
	animation: ${progressAnimation} 4s infinite linear;
`;
