import styled from 'styled-components';
import { Title } from 'components/common/Title';

const AuthWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 4rem;
	max-width: 76rem;
	width: 100%;
	padding: 8rem 0 13rem;
`;
const AuthLayout = ({ children }) => {
	return (
		<AuthWrapper>
			<Title text="회원가입" />
			{children}
		</AuthWrapper>
	);
};
export default AuthLayout;
