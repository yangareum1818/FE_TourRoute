import React, { useEffect } from 'react';
import styled from 'styled-components';
import Fastivalaticle from './fastivalaticle/Fastivalaticle';
import Fastivalnav from './fastivalnav/Fastivalnav';
import { useLocation } from 'react-router-dom';
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`;
const FastivalTitle = styled.h1`
	color: #000000;
	font-size: 3.2rem;
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
	const location = useLocation();
	const data = location.state.prop;
	useEffect(() => {
		console.log(location.state.prop);
	}, [location]);
	return (
		<Wrapper>
			<FastivalTitle>
				<FastivalSubTitle>역사가 깊은, 경상도 각지에서 </FastivalSubTitle>열리는 축제를 즐겨보세요!
			</FastivalTitle>
			<SectionDiv>
				<Fastivalaticle props={data} />
				<Fastivalnav props={data} />
			</SectionDiv>
		</Wrapper>
	);
};

export default FastivalPost;
