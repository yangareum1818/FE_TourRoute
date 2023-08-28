import styled from 'styled-components';
import Check from '../../assets/check.svg';
import Checked from '../../assets/checked.svg';

const StyledLabel = styled.label`
	display: flex;
	gap: 1.8rem;
	align-items: center;
`;

const StyledP = styled.span`
	color: #000;
	font-size: 1.4rem;
	font-weight: 300;
	cursor: pointer;
`;

const StyledDisplay = styled.div`
	cursor: pointer;
`;

const StyledInput = styled.input`
	display: none;

	& + ${StyledDisplay} {
		width: 1.4rem;
		height: 1.4rem;
		background: url(${Check});
	}

	&:checked + ${StyledDisplay} {
		background-size: cover;
		background-image: url('${Checked}');
	}
`;

const StyledAllLabel = styled(StyledLabel)`
	display: flex;
	gap: 1.8rem;
	align-items: center;
	padding-bottom: 1rem;
	border-bottom: 0.1rem solid #000;
`;

const StyledAllP = styled(StyledP)`
	color: #000;
	font-size: 1.6rem;
	font-weight: 400;
	cursor: pointer;
`;

const StyledAllDisplay = styled(StyledDisplay)``;

const StyledAllInput = styled(StyledInput)`
	display: none;

	& + ${StyledDisplay} {
		width: 1.4rem;
		height: 1.4rem;
		background: url(${Check});
	}

	&:checked + ${StyledDisplay} {
		background-size: cover;
		background-image: url('${Checked}');
	}
`;

// 전체 선택 Component
const CustomCheckedAll = ({ text, name, ...rest }) => {
	return (
		<StyledAllLabel htmlFor={name}>
			<StyledAllInput type="checkbox" {...rest} id={name} name={name} />
			<StyledAllDisplay />
			<StyledAllP>{text}</StyledAllP>
		</StyledAllLabel>
	);
};

// 기본 Check Component
const CustomCheckbox = ({ text, name, ...rest }) => {
	return (
		<StyledLabel htmlFor={name}>
			<StyledInput type="checkbox" {...rest} id={name} name={name} />
			<StyledDisplay />
			<StyledP>{text}</StyledP>
		</StyledLabel>
	);
};

const Checkbox = ({ name, ...rest }) => {
	return name === 'all-check' ? <CustomCheckedAll {...rest} /> : <CustomCheckbox {...rest} />;
};

export default Checkbox;
