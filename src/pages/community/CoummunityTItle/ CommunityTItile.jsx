import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;
const Title = styled.div`
	font-size: 32px;
	font-weight: bold;
`;
const Category = styled.div`
	font-size: 16px;
	color: #959696;
`;
const CommunityTItile = () => {
	return (
		<Wrapper>
			<Title>커뮤니티</Title>
			<Category>전체게시판</Category>
		</Wrapper>
	);
};

export default CommunityTItile;
