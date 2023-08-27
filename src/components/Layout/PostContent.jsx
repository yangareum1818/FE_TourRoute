import styled from 'styled-components';

const ContentsWrapper = styled.div`
	flex: 3;
`;

const ContentLayout = ({ children }) => {
	return <ContentsWrapper>{children}</ContentsWrapper>;
};
export default ContentLayout;
