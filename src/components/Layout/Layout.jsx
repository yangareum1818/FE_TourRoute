import React from 'react';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import { Outlet } from 'react-router-dom';
import backimg from 'assets/background.png';
import SubHeader from '../header/SubHeader';
const LayoutContainer = styled.div`
	margin: 0 auto;
	max-width: 1080px;
`;
const SectionContainer = styled.section`
	display: flex;
	justify-content: center;
`;
const FooterContainer = styled.footer`
	margin-top: 2em;
	padding-bottom: 4rem;
`;
const Layout = () => {
	return (
		<div>
			<SubHeader />
			<LayoutContainer>
				<SectionContainer>
					<Outlet />
				</SectionContainer>
				<FooterContainer>
					<Footer />
				</FooterContainer>
			</LayoutContainer>
		</div>
	);
};

export default Layout;
