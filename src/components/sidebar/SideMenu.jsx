import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SidebarLayout from 'components/Layout/SidebarLayout';

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

	&.active,
	&:hover {
		color: #000;
		font-weight: 500;
	}
`;

const Sidebar = () => {
	return (
		<SidebarLayout>
			<SideBarWrapper>
				<SideMenu>
					{/* {sideList.map(list => {
					<SideList key={list.value} className={({ isActive }) => (isActive ? 'active' : '')}>
						<NavLink to={list.path}>{list.name}</NavLink>
					</SideList>;
				})} */}
					<SideList className="active">
						<Link to="/my/profile">내 프로필</Link>
					</SideList>
					<SideList>
						<Link to="/my/record">나의 여행기록</Link>
					</SideList>
					<SideList>
						<Link>찜한 목록</Link>
					</SideList>
					<SideList>
						<Link>내가 작성한 글</Link>
					</SideList>
					<SideList>
						<Link>내가 쓴 댓글</Link>
					</SideList>
				</SideMenu>
			</SideBarWrapper>
		</SidebarLayout>
	);
};
export default Sidebar;
