import Profile from 'components/sidebar/Profile';
import SideMenu from 'components/sidebar/SideMenu';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex: 1;
`;

const SidebarLayout = () => {
	return (
		<SidebarWrapper>
			<Profile />
			<SideMenu />
		</SidebarWrapper>
	);
};
export default SidebarLayout;
