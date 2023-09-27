import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SideBarWrapper = styled.div`
	padding: 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const SideMenuLocation = styled.span`
	position: absolute;
	top: -6rem;
	right: 0;
	font-size: 1.6rem;
	color: #959696;
	font-weight: 500;
`;

const SideMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
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

const Sidebar = () => {
	const [url, seturl] = useState('');
	const [isLoading, setLoading] = useState(false);
	const urlType = {
		profile: '내 프로필',
		record: '나의 여행기록',
		wishlist: '찜한 목록',
		wrtiting: '내가 작성한 글',
		comment: '내가 쓴 댓글',
	};

	useEffect(() => {
		seturl(window.location.pathname.split('/')[2]);
		setLoading(true);
	}, [isLoading, urlType.url]);

	return (
		<SideBarWrapper>
			{isLoading ? <SideMenuLocation>{urlType[url]}</SideMenuLocation> : ''}
			<SideMenu>
				<SideList>
					<NavLink to="/my/profile">내 프로필</NavLink>
				</SideList>
				<SideList>
					<NavLink to="/my/record">나의 여행기록</NavLink>
				</SideList>
				<SideList>
					<NavLink to="/my/wishlist">찜한 목록</NavLink>
				</SideList>
				<SideList>
					<NavLink to="/my/wrtiting">내가 작성한 글</NavLink>
				</SideList>
				<SideList>
					<NavLink to="/my/comment">내가 쓴 댓글</NavLink>
				</SideList>
			</SideMenu>
		</SideBarWrapper>
	);
};
export default Sidebar;
