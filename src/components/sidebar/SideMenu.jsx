import styled from 'styled-components';
import { NavLink, useLocation, Route, Outlet } from 'react-router-dom';
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
	const location = useLocation();
	const urlName = location.pathname;
	console.log('pathname', urlName);
	const mypageSide = [
		{
			id: 401,
			url: '/my/profile',
			tilte: '내 프로필',
		},
		{
			id: 402,
			url: '/my/record',
			title: '나의 여행기록',
		},
		{
			id: 403,
			url: '/my/wishlist',
			title: '찜한 목록',
		},
		{
			id: 404,
			url: '/my/wrtiting',
			title: '내가 작성한 글',
		},
		{
			id: 405,
			url: '/my/comment',
			title: '내가 쓴 댓글',
		},
	];

	const side = mypageSide.filter(v => (urlName === v.url ? v.tilte : ''));
	console.log('side', side[0].tilte);
	console.log('pathname === sideURL', urlName === mypageSide[0].url);

	useEffect(() => {
		seturl(urlName);
		setLoading(true);
	}, [isLoading, mypageSide]);

	return (
		<SideBarWrapper>
			{isLoading ? <SideMenuLocation>{side[0].tilte}</SideMenuLocation> : ''}
			{/* {isLoading ? <SideMenuLocation>{mypageSide[url]}</SideMenuLocation> : ''} */}

			<SideMenu>
				{mypageSide.map(my => {
					return (
						<SideList key={my.id}>
							<NavLink to={my.url}>{my.title}</NavLink>
						</SideList>
					);
				})}
			</SideMenu>
		</SideBarWrapper>
	);
};
export default Sidebar;
