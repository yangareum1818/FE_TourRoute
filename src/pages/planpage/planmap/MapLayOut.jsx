import React from 'react';
import KakaoMap from './kakaomap/KakaoMap';
import styled from 'styled-components';
import NextButton from '../nextbutton/NextButton';
const Wrapper = styled.div`
	display: flex;
`;
const MapLayOut = () => {
	return (
		<>
			<Wrapper>
				<KakaoMap />
				<div></div>
			</Wrapper>
			<NextButton />
		</>
	);
};

export default MapLayOut;
