import React from 'react';
import KakaoMap from './kakaomap/KakaoMap';
import styled from 'styled-components';
const Wrapper = styled.div`
	display: flex;
`;
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
	cursor: pointer;
	align-items: center;
`;
const NextText = styled.span`
	color: white;
	font-size: 16px;
	font-weight: bold;
`;
const MapLayOut = () => {
	return (
		<>
			<Wrapper>
				<KakaoMap />
			</Wrapper>
			<NextBtn>
				<NextText>다음</NextText>
			</NextBtn>
		</>
	);
};

export default MapLayOut;
