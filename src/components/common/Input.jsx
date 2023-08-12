import styled from 'styled-components';

const DefaultInput = styled.input``;

export const Input = ({ ...rest }) => {
	return <DefaultInput {...rest} />;
};
