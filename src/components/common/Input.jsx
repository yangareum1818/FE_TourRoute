import styled, { css } from 'styled-components';
import { InputErrorIcon } from './Icon';

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

const DefalutLabel = styled.label`
	display: block;
`;
const DefalutP = styled.p`
	margin-bottom: 1rem;
	color: #303133;
	font-size: 1.6rem;
	font-weight: 300;
`;
const DefaultInput = styled.input`
	height: 5.1rem;
	padding: 1.6rem 3rem 1.6rem 2rem;
	border-radius: 0.8rem;
	border: 0.1rem solid #cfcfcf;
	background: #fff;

	&:focus {
		outline: none;
		border: 0.1rem solid #000;
	}
`;

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
			<InputErrorIcon />
			<DefaulttError>{errmsg}</DefaulttError>
		</ErrorWrapper>
	);
};

// 추가할 작업 : Input Error일 때, Input border color 변경.
export const Input = ({ text, placeholder, type, onChange }) => {
	return (
		<DefalutLabel>
			{text && <DefalutP>{text}</DefalutP>}
			<DefaultInput type={type} onChange={onChange} placeholder={placeholder} />
		</DefalutLabel>
	);
};
