import React from 'react';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const SideBarWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const SideMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const SideList = styled.li`
	color: #959696;
	font-size: 1.6rem;
	font-weight: 300;

	&:hover > a,
	& > a.active {
		color: #000;
		font-weight: 500;
	}
`;

const WriteBtn = styled(Link)`
	font-size: 0;
	height: 6rem;
	line-height: 6rem;
	background: #3ad0ff;
	border-radius: 0.8rem;
	text-align: center;
	cursor: pointer;

	span {
		margin-left: 0.8rem;
	}

	& > * {
		display: inline-block;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 700;
		vertical-align: middle;
	}
`;

const CommunitySide = () => {
	return (
		<SideBarWrapper>
			<SideMenu>
				<SideList>
					<NavLink to="/my/profile">전체게시판</NavLink>
				</SideList>
				<SideList>
					<NavLink>자유게시판</NavLink>
				</SideList>
				<SideList>
					<NavLink>동행게시판</NavLink>
				</SideList>
			</SideMenu>

			<WriteBtn to="/communitywrite">
				<FaPen />
				<span>글쓰기</span>
			</WriteBtn>
		</SideBarWrapper>
	);
};

export default CommunitySide;
