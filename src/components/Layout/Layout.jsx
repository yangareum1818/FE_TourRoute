import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from '../header/MainHeader';
import backimg from 'assets/background.png';
const LayoutContainer = styled.div`
	margin: 0 auto;
	max-width: 1080px;
`;

const HeaderContainer = styled.header`
	background-image: url(${backimg});
	background-size: cover;
	background-position: center;
`;
const SectionContainer = styled.section`
	display: flex;
	justify-content: center;
`;
const FooterContainer = styled.footer`
	margin-top: 2em;
`;
const Layout = () => {
	const [Path, SetPath] = useState(window.location.pathname);
	const [Loading, SetLoading] = useState(false);
	const navigate = useNavigate();
	console.log(window.location.pathname);
	useEffect(() => {
		navigate('/');
		Path === '/' ? SetLoading(true) : SetLoading(false);
	}, [Path]);
	return (
		<div>
			{Loading ? (
				<HeaderContainer>
					<MainHeader />
				</HeaderContainer>
			) : (
				<Header />
			)}
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
