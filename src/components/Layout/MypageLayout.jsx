import styled from 'styled-components';
import { Title } from 'components/common/Title';
import MypageContentLayout from './MypageContentLayout';
import MypageSidebarLayout from './MypageSidebarLayout';

const MyPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 4rem;
	width: 100%;
	padding: 8rem 0 13rem;
`;

const MyPageInner = styled.div`
	display: flex;
`;

const MypageLayout = ({ children }) => {
	return (
		<MyPageWrapper>
			<Title text="마이페이지" locationStyle="left" />
			<MyPageInner>
				<MypageContentLayout>{children}</MypageContentLayout>
				<MypageSidebarLayout />
			</MyPageInner>
		</MyPageWrapper>
	);
};
export default MypageLayout;
