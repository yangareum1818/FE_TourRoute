import React from 'react';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
	margin: 0 auto;
	max-width: 1080px;
`;

const HeaderContainer = styled.header``;
const SectionContainer = styled.section`
	display: flex;
`;
const FooterContainer = styled.footer`
	margin-top: 2em;
`;
const Layout = () => {
	return (
		<LayoutContainer>
			<HeaderContainer>
				<Header />
			</HeaderContainer>
			<SectionContainer>
				<Outlet />
			</SectionContainer>
			<FooterContainer>
				<Footer />
			</FooterContainer>
		</LayoutContainer>
	);
};

export default Layout;
