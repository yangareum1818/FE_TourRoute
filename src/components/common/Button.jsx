import styled, { css } from 'styled-components';

const VARIANTS = {
	default: css``,
	complete: css`
		--button-color: #fff;
		--button-bg-color: #3ad0ff;
	`,
	cancel: css`
		--button-color: #fff;
		--button-bg-color: #cfcfcf;
	`,
};

// 버튼을 여러개 사용할 때, 수직 정렬을 위한 BtnGroup
export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const StyledButton = styled.button`
	${p => p.variantstyle}

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 5.1rem;
	line-height: 5.1rem;
	border: none;
	border-radius: 0.8rem;
	color: var(--button-color, #fff);
	background: var(--button-bg-color, #3ad0ff);
	font-size: 1.6rem;
	font-weight: 700;

	&:disabled {
		cursor: default;
		opacity: 0.5;
		background: var(--button-bg-color, #3ad0ff);
	}
`;

export const Button = ({ type, text, variant, disabled, to, ...rest }) => {
	const variantstyle = VARIANTS[variant];

	return (
		<StyledButton disabled={disabled} variantstyle={variantstyle} {...rest}>
			{text}
		</StyledButton>
	);
};
