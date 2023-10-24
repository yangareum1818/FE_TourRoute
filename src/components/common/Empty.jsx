import { styled } from 'styled-components';

const EmptyWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 24.5rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const EmptyText = styled.p`
	color: #959696;
	font-size: 1.6rem;
	font-weight: 500;
	text-align: center;
`;

const Empty = ({ text }) => {
	return (
		<EmptyWrapper>
			<EmptyText>{text}</EmptyText>
		</EmptyWrapper>
	);
};
export default Empty;
