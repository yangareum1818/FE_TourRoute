import styled from 'styled-components';

const MyContents = styled.div`
	flex: 3;
`;

const MypageContentLayout = ({ children }) => {
	return <MyContents>{children}</MyContents>;
};
export default MypageContentLayout;
