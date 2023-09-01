import React from 'react';
import styled from 'styled-components';
import Fastivalaticle from './fastivalaticle/Fastivalaticle';
import Fastivalnav from './fastivalnav/Fastivalnav';
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`;
const FastivalTitle = styled.h1`
	color: #000000;
	font-size: 32px;
	margin-bottom: 1rem;
`;
const FastivalSubTitle = styled.span`
	color: #3ad0ff;
`;

const SectionDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
const FastivalPost = () => {
	return (
		<Wrapper>
			<FastivalTitle>
				<FastivalSubTitle>역사가 깊은, 경상도 각지에서 </FastivalSubTitle>열리는 축제를 즐겨보세요!
			</FastivalTitle>
			<SectionDiv>
				<Fastivalaticle />
				<Fastivalnav />
			</SectionDiv>
		</Wrapper>
	);
};

export default FastivalPost;
