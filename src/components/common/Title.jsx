import styled, { css } from 'styled-components';

const LOCATION = {
	default: css`
		--align-default: center;
	`,
	left: css`
		--align-left: left;
	`,
	center: css`
		--align: center;
	`,
	right: css`
		--align: right;
	`,
};

const BigTitle = styled.h2`
	font-size: 3.2rem;
	text-align: var(--align-default);
`;
export const Title = ({ text, location }) => {
	const locationStyle = LOCATION[location];

	return <BigTitle locationStyle={locationStyle}>{text}</BigTitle>;
};
