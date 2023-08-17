import styled from 'styled-components';
import { Title } from 'components/common/Title';

const MyPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 4rem;
	width: 100%;
	padding: 8rem 0 13rem;
`;
const MypageLayout = ({ children }) => {
	return (
		<MyPageWrapper>
			<Title text="마이페이지" locationStyle="left" />
			{children}
		</MyPageWrapper>
	);
};
export default MypageLayout;
