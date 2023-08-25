import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
	border: 0.5px solid grey;
	padding: 1rem;
	display: grid;
	border-radius: 8px;
	grid-template-columns: 10rem;
	gap: 1rem;
	margin-bottom: 2rem;
`;
const LinkList = styled.div`
	font-size: 16px;
	color: #959696;
`;
const WriteBtn = styled.div`
	background: #3ad0ff;
	border-radius: 8px;
	color: white;
	font-weight: bold;
	padding: 1rem 10rem;
	cursor: pointer;
`;

const CommunitySide = () => {
	const navigate = useNavigate();

	const handlewrite = useCallback(() => {
		navigate('/communitywrite');
	}, [navigate()]);
	return (
		<div>
			<Wrapper>
				<LinkList>전체게시판</LinkList>
				<LinkList>자유게시판</LinkList>
				<LinkList>동행게시판</LinkList>
			</Wrapper>
			<WriteBtn onClick={handlewrite}>
				<FaPen />
				글쓰기
			</WriteBtn>
		</div>
	);
};

export default CommunitySide;
