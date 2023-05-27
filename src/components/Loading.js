import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
	height: 100vh;
	background-color: #f4edab;
`;

const ProgressContainer = styled.div`
	// margin-top: 400px;
	height: 10px;
	width: 100%;
	border: 10px solid #f4a261;
	border-radius: 15px;
`;

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  25% {
    width: 50%;
  }
  50% {
    width: 75%;
  }
  75% {
    width: 85%;
  }
  100% {
    width: 100%;
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

function Loading() {
	return (
		<Container>
			<ProgressContainer>
				<ProgressColor />
			</ProgressContainer>
		</Container>
	);
}

export default Loading;
