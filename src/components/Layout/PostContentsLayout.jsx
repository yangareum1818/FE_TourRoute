import styled from 'styled-components';
import { Title } from 'components/common/Title';
import SidebarLayout from './SidebarLayout';
import { Outlet } from 'react-router-dom';

const PostContentsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 4rem;
	width: 100%;
	padding: 8rem 0 13rem;
`;

const PostContentsInner = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: row;
`;

const PostContent = styled.div`
	flex: 3;
`;

const PostContentsLayout = ({ text }) => {
	return (
		<PostContentsWrapper>
			<Title text={text} locationStyle="left" />
			<PostContentsInner>
				<PostContent>
					<Outlet />
				</PostContent>
				<SidebarLayout />
			</PostContentsInner>
		</PostContentsWrapper>
	);
};
export default PostContentsLayout;
