import React, { useCallback } from 'react';
import backgroundimg from 'assets/background_write.png';
import imgBtn from 'assets/image.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	font-size: 16px;
	color: #959696;
`;

const Benner = styled.img`
	background-image: url(${backgroundimg});
`;
const BennerDiv = styled.div`
	position: relative;
	left: -42rem;
	overflow: visible;
`;
const SectionDiv = styled.div`
	display: grid;
	grid-template-rows: 14rem 8rem 14rem 80rem 20rem;
	padding: 2rem;
	gap: 2rem;
`;

const CategoryDiv = styled.div`
	border: 0.5px solid grey;
	border-radius: 8px;
	display: grid;
	grid-template-columns: 8rem 8rem 8rem;
	grid-template-rows: 3rem 3rem;
	padding: 3rem;
	gap: 2rem;
`;
const TitleDiv = styled.div`
	display: grid;
	grid-template-columns: 15rem 50rem;
	grid-template-rows: 1.5rem;
	gap: 2rem;
	padding: 3rem;
	border: 0.5px solid grey;
	border-radius: 8px;
`;
const TitleInput = styled.input`
	border: 0;
	font-size: 16px;
	&:focus {
		border: 0;
		outline: none;
	}
`;
const ImageDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0.5px solid grey;
	border-radius: 8px;
`;
const TextAreaDiv = styled.div`
	border: 0.5px solid grey;
	border-radius: 8px;
`;
const FormSubmitBtn = styled.div`
	margin: 0 auto;
`;
const SubmitBtn = styled.div`
	background: #3ad0ff;
	font-size: 16px;
	font-weight: bold;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 18rem;
	border-radius: 8px;
	cursor: pointer;
`;
const CloseBtn = styled.div`
	background: #cfcfcf;
	font-size: 16px;
	font-weight: bold;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 18rem;
	border-radius: 8px;
	margin-top: 2rem;
	cursor: pointer;
`;
const CommunityWrite = () => {
	const navigate = useNavigate();
	const handleSubmit = useCallback(
		e => {
			navigate('/community');
		},
		[navigate],
	);

	const handleClose = useCallback(
		e => {
			navigate(-1);
		},
		[navigate],
	);
	return (
		<Wrapper>
			<BennerDiv>
				<Benner src={backgroundimg} />
			</BennerDiv>
			<SectionDiv>
				<CategoryDiv>
					<span>카테고리</span>
					<span>자유게시판</span>
					<span>동행게시판</span>
					<span>모집상태</span>
					<span>모집중</span>
					<span>모집완료</span>
				</CategoryDiv>
				<TitleDiv>
					<div>제목</div>
					<TitleInput placeholder="ex) 1박 2일 대구 놀러갈 분 구해요" />
				</TitleDiv>
				<ImageDiv>
					<img src={imgBtn} />
				</ImageDiv>
				<TextAreaDiv>TextArea 라이브러리 확인해봐야함</TextAreaDiv>
				<FormSubmitBtn>
					<SubmitBtn onClick={handleSubmit}>작성완료</SubmitBtn>
					<CloseBtn onClick={handleClose}>취소</CloseBtn>
				</FormSubmitBtn>
			</SectionDiv>
		</Wrapper>
	);
};

export default CommunityWrite;
