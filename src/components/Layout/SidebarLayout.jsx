import Profile from 'components/sidebar/Profile';
import SideMenu from 'components/sidebar/SideMenu';
import { useState } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex: 1;
`;

const SideMenuLocation = styled.span`
	position: absolute;
	top: -7.6rem;
	right: 0;
	font-size: 1.6rem;
	color: #959696;
	font-weight: 500;
`;

const SidebarLayout = () => {
	const location = window.location.pathname;
	const mypage = location.includes('/my');
	const [sideLocation, setSideLocation] = useState('');
	const sidemenulocation = [
		{
			pathname: '/my/profile',
			value: '내 프로필',
		},
		{
			pathname: '/my/record',
			value: '나의 여행기록',
		},
		{
			pathname: '/my/wishlist',
			value: '찜한 목록',
		},
		{
			pathname: '/my/wrtiting',
			value: '내가 작성한 글',
		},
		{
			pathname: '/my/comment',
			value: '내가 쓴 댓글',
		},
	];
	// console.log('sidebar 페이지 확인', mypage, sidemenulocation);

	return (
		<SidebarWrapper>
			{mypage === true ? (
				<>
					{sidemenulocation.filter(m => {
						const menu = m.pathname;
						const menuitem = menu.includes(location);
						console.log(menuitem);
						if (menuitem === true) {
							return <SideMenuLocation>{m.value}</SideMenuLocation>;
						}
					})}

					<Profile />
					<SideMenu />
				</>
			) : null}
		</SidebarWrapper>
	);
};
export default SidebarLayout;
