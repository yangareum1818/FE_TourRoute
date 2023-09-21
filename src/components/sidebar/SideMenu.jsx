import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideBarWrapper = styled.div`
	padding: 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
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
	return (
		<SideBarWrapper>
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
