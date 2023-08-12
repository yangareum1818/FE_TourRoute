import styled from 'styled-components';

const BigTitle = styled.h2`
	font-size: 3.2rem;
	text-align: center;
`;
export const Title = ({ text }) => {
	return <BigTitle>{text}</BigTitle>;
};
