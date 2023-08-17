import styled, { css } from 'styled-components';

// const COLOR = {
// 	default: css`
// 		--color: #959696;
// 	`,
// 	complete: css`
// 		--color: #000;
// 	`,
// 	error: css`
// 		--color: #ff2e2e;
// 	`,
// };

const DefalutLabel = styled.label``;
const DefalutP = styled.p`
	margin-bottom: 1rem;
	color: #303133;
	font-size: 1.6rem;
	font-weight: 300;
`;
const DefaultInput = styled.input``;

// Error Msg
const ErrorWrapper = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const DefaulttError = styled.p`
	color: #ff2e2e;
	font-size: 1.4rem;
	font-weight: 400;
`;

export const ErrorMsg = ({ errmsg }) => {
	return (
		<ErrorWrapper>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
			>
				<path
					d="M7.3335 4.66634H8.66683V5.99967H7.3335V4.66634ZM7.3335 7.33301H8.66683V11.333H7.3335V7.33301ZM8.00016 1.33301C4.32016 1.33301 1.3335 4.31967 1.3335 7.99967C1.3335 11.6797 4.32016 14.6663 8.00016 14.6663C11.6802 14.6663 14.6668 11.6797 14.6668 7.99967C14.6668 4.31967 11.6802 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333Z"
					fill="#FF2E2E"
				/>
			</svg>
			<DefaulttError>{errmsg}</DefaulttError>
		</ErrorWrapper>
	);
};

// 추가할 작업 : Input Error일 때, Input border color 변경.
export const Input = ({ error, text, ...rest }) => {
	return (
		<DefalutLabel>
			{text && <DefalutP>{text}</DefalutP>}
			<DefaultInput {...rest} />
			{error && <ErrorMsg {...rest} />}
		</DefalutLabel>
	);
};
