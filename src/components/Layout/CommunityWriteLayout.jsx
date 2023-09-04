import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import SubHeader from '../header/SubHeader';
import Footer from '../footer/Footer';
import backgroundimg from 'assets/background_write.png';

const SectionContainer = styled.section`
	display: flex;
	justify-content: center;
`;
const FooterContainer = styled.footer`
	margin-top: 2em;
`;

const LayoutContainer = styled.div`
	margin: 0 auto;
	max-width: 1080px;
`;
const Benner = styled.img`
	background-image: url(${backgroundimg});
`;
const BennerDiv = styled.div``;
const CommunityWriteLayout = () => {
	return (
		<div>
			<BennerDiv>
				<Benner src={backgroundimg} />
			</BennerDiv>
			<LayoutContainer>
				<SectionContainer>
					<Outlet />
				</SectionContainer>
			</LayoutContainer>
		</div>
	);
};

export default CommunityWriteLayout;
