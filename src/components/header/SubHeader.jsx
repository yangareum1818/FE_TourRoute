import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SubLogoImg from 'assets/sub_logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Wrapper = styled.header`
	padding: 2rem;
	margin: 0 auto;
	max-width: 108rem;
	display: flex;
	justify-content: space-between;
	background: transparent;
`;
const Logo = styled.h1`
	display: flex;
	align-items: center;
`;
const LogoImg = styled.img`
	width: 13rem;
	height: 20px;
	cursor: pointer;
`;
const NavBar = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;
`;
const Category = styled.li`
	cursor: pointer;

	& > * {
		font-size: 1.6rem;
		font-weight: 400;
		color: #000;
	}
`;
const SubHeader = () => {
	const [Token, setToken] = useState(null);
	const HandleLogout = useCallback(() => {
		setToken(window.localStorage.removeItem('token'));
	}, []);
	useEffect(() => {
		setToken(window.localStorage.getItem('token'));
	}, [setToken]);
	return (
		<Wrapper>
			<Logo>
				<Link to="/">
					<LogoImg src={SubLogoImg} />
				</Link>
			</Logo>
			<NavBar>
				<Category>
					<Link to="/tourplan/1">여행계획</Link>
				</Category>
				<Category>
					<Link to="/festival/all">지역축제</Link>
				</Category>
				<Category>
					<Link to="/community">커뮤니티</Link>
				</Category>
				<Category>
					<Link to="/tourplanInfo">투어라우트</Link>
				</Category>
			</NavBar>
			{Token ? (
				<NavBar>
					<Category>
						<Link to="/" style={{ color: '#959696' }} onClick={HandleLogout}>
							로그아웃
						</Link>
					</Category>
					<Category>
						<Link to="/my/profile" style={{ color: '#959696' }}>
							마이페이지
						</Link>
					</Category>
				</NavBar>
			) : (
				<NavBar>
					<Category>
						<Link to="/login" style={{ color: '#959696' }}>
							로그인
						</Link>
					</Category>
					<Category>
						<Link to="/auth/signup" style={{ color: '#959696' }}>
							회원가입
						</Link>
					</Category>
				</NavBar>
			)}
		</Wrapper>
	);
};

export default SubHeader;
