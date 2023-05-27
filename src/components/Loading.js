import styled from 'styled-components';

function Loading() {
	return <Loader>나옵니당</Loader>;
}

export default Loading;

const Loader = styled.button`
	height: 40px;
	width: 40px;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	border: 2px solid rgba(0, 0, 0, 0.4);
	border-top-color: #fff;
	border-bottom-color: #fff;
	animation: spinner3 800ms ease infinite;

  @keyframes spinner3 {
    to {
    transform: rotate(360deg);
    }
`;
