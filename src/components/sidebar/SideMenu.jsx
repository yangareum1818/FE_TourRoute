import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
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
	/**
	 * 1. id는 브런치앞번호 따서 4..로 한거구요..
	 * 2. 배열로 만들어서 뿌려지는 형식으로 하는게 효율적인거 같아서요.
	 * 3. title이 두개가 뜨고 ㅈㄹ도라방이에여
	 * 4. sidemenu중에 왜 내프로필은 사라지고 안뜨는거죠 ?
	 * 5. 배열 값을 filter로 현재 pathname과 객체의 값이 같을 경우 title을 반환하고 싶었는데 ..
	 * 뭔가 한번 더 꼬아서 생각을ㄹ 한건지 ..
	 * 그 값을 사용ㅇ하면 다시 map을 돌려서 ? 뿌려줘야되는ㄴ건가 ? 싶으ㅡㄴ데 ..
	 * 방법을 .. 찾고 싶습ㄴ눼다..
	 * 그래서 지금 저런식ㅇ으로 값을ㄹ 넣어줬더니..
	 * 다른 멘뉴 클릭하면 title이 undefind가 떠버리고 ..
	 *
	 * 그리고 3번ㅇ이 문제라 그런거같은데 .. v.하면 id, url, title, title 이렇게 두개가 떠요 ..
	 */

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
