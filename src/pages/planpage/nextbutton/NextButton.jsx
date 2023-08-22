import React from 'react';
import styled from 'styled-components';

const NextBtn = styled.div`
	background-color: #3ad0ff;
	width: 40rem;
	height: 6rem;
	margin: 3rem auto;
	border-radius: 8px;
	border: 0;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const NextText = styled.span`
	color: white;
	font-size: 16px;
	font-weight: bold;
`;
const NextButton = () => {
	return (
		<NextBtn>
			<NextText>다음</NextText>
		</NextBtn>
	);
};

export default NextButton;
