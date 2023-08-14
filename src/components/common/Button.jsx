import styled from 'styled-components';

const ButtonGroup = styled.div`
	padding-top: 2.5rem;
`;
const SkyButton = styled.button`
	display: block;
	width: 100%;
	height: 5.1rem;
	border-radius: 0.8rem;
	color: #fff;
	font-size: 1.6rem;
	background: #3ad0ff;
`;

export const Button = ({ text, children, ...rest }) => {
	return (
		<ButtonGroup>
			<SkyButton {...rest}>{text}</SkyButton>;
		</ButtonGroup>
	);
};
