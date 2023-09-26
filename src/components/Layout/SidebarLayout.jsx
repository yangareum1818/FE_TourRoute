import Profile from 'components/sidebar/Profile';
import SideMenu from 'components/sidebar/SideMenu';
import { useState, useEffect } from 'react';
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
	}, [urlType.url]);

	return (
		<SidebarWrapper>
			{isLoading ? (
				<>
					<SideMenuLocation>{urlType[url]}</SideMenuLocation>
					<Profile />
					<SideMenu />
				</>
			) : (
				''
			)}
		</SidebarWrapper>
	);
};
export default SidebarLayout;
