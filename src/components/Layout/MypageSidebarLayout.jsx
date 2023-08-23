import Profile from 'pages/mypage/sidebar/Profile';
import Sidebar from 'pages/mypage/sidebar/Sidebar';
import styled from 'styled-components';

const MySideBar = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex: 1;
`;

const MypageLocation = styled.span`
	position: absolute;
	top: -7.6rem;
	right: 0;
	font-size: 1.6rem;
	color: #959696;
	font-weight: 500;
`;

const MypageSidebarLayout = () => {
	return (
		<MySideBar>
			{/* sideMenu Active된 {value}값 넣어야함. */}
			<MypageLocation>나의 여행기록</MypageLocation>
			<Profile />
			<Sidebar />
		</MySideBar>
	);
};
export default MypageSidebarLayout;
