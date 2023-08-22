import React from 'react';
import styled from 'styled-components';
import Logoimage from 'assets/logo.png';

const Wrapper = styled.div`
	margin: 3rem auto;
	max-width: 1080px;
	display: flex;
	justify-content: space-between;
	background: transparent;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
`;
const LogoImg = styled.img`
	width: 13rem;
	height: 20px;
`;
const NavBar = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Register = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Category = styled.li`
	margin-left: 4rem;
	list-style-type: none;
	font-size: 16px;
	font-weight: normal;
`;
const Header = () => {
	return (
		<Wrapper>
			<Logo>
				<LogoImg src={Logoimage} />
			</Logo>
			<NavBar>
				<Category>여행계획</Category>
				<Category>여행기록</Category>
				<Category>지역축제</Category>
				<Category>커뮤니티</Category>
			</NavBar>
			<Register>
				<Category>로그인</Category>
				<Category>회원가입</Category>
			</Register>
		</Wrapper>
	);
};

export default Header;
