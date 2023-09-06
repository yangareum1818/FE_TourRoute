import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Logoimage from 'assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

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
	cursor: pointer;
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
const SubHeader = () => {
	return (
		<Wrapper>
			<Logo>
				<Link to="/">
					<LogoImg src={Logoimage} />
				</Link>
			</Logo>
			<NavBar>
				<Link to="/tourplan/1">
					<Category>여행계획</Category>
				</Link>
				<Link to="/festival">
					<Category>지역축제</Category>
				</Link>
				<Link to="/community">
					<Category>커뮤니티</Category>
				</Link>
				<Link to="/tourplanInfo">
					<Category>투어라우트</Category>
				</Link>
			</NavBar>
			<Register>
				<Link to="/login">
					<Category>로그인</Category>
				</Link>
				<Link to="/auth/signup">
					<Category>회원가입</Category>
				</Link>
			</Register>
		</Wrapper>
	);
};

export default SubHeader;
