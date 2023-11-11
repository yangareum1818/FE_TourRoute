import React from 'react';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import backimg from 'assets/background.png';
import MainContainer from '../../pages/mainpage/MainContainer';
import MainHeader from '../header/MainHeader';
const LayoutContainer = styled.div`
	margin: 0 auto;
	max-width: 108rem;
	padding: 0rem 2rem;
`;

const HeaderContainer = styled.header`
	background-image: url(${backimg});
	background-size: cover;
	background-position: center;
	height: 60rem;
`;
const SectionContainer = styled.section`
	display: flex;
	justify-content: center;
`;
const FooterContainer = styled.footer`
	margin-top: 2em;
`;
const Layout = () => {
	return (
		<div>
			<HeaderContainer>
				<MainHeader />
			</HeaderContainer>
			<LayoutContainer>
				<SectionContainer>
					<MainContainer />
				</SectionContainer>
				<FooterContainer>
					<Footer />
				</FooterContainer>
			</LayoutContainer>
		</div>
	);
};

export default Layout;
