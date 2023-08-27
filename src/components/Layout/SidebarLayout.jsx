import Profile from 'components/sidebar/Profile';
import SideMenu from 'components/sidebar/SideMenu';
import styled from 'styled-components';

const MySideBar = styled.div`
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

const SidebarLayout = ({ locationText, children }) => {
	return (
		<MySideBar>
			{/* sideMenu Active된 {locationText}값 넣어야함. */}
			<SideMenuLocation>{locationText}</SideMenuLocation>
			<Profile />
			<SideMenu />
		</MySideBar>
	);
};
export default SidebarLayout;
