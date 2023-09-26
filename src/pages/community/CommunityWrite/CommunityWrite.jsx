import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import img from 'assets/image.png';
import { axiosTokenPost } from 'utils/AxiosUtils';
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	font-size: 16px;
	color: #959696;
`;

const SectionDiv = styled.div`
	display: grid;
	grid-template-rows: 14rem 8rem 8rem 20rem 80rem 20rem;
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
	grid-template-columns: 15rem 60rem;
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
	border: 0.5px solid grey;
	border-radius: 8px;
	padding-left: 3rem;
`;
const ImgBtnDiv = styled.button`
	padding: 3rem;
	background-image: url(${img});
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
const InPutImg = styled.input`
	display: none;
`;
const PostImg = styled.img`
	visibility: visible;
	width: 20rem;
	height: 18rem;
`;
const CommunityWrite = () => {
	const [Imgsrc, setImgsrc] = useState('');
	const navigate = useNavigate();
	const inputRef = useRef();

	const handleSubmit = useCallback(async () => {
		const res = await axiosTokenPost('/board/create_board');
		console.log(res);
		// navigate('/community');
	}, []);

	const handleClose = useCallback(
		e => {
			navigate(-1);
		},
		[navigate],
	);
	const onUploadImg = e => {
		const img = e.target.files[0];
		const formData = new FormData();
		formData.append('file', img);

		if (!e.target.files === undefined) return;
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		console.log(reader);
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			setImgsrc(previewImgUrl);
			console.log(previewImgUrl);
		};

		//데이터 전송
		// const formData = new FormData();
		// formData.append('image', e.target.files[0]);
	};
	const onUploadImageButtonClick = useCallback(() => {
		inputRef.current.click();
	}, []);
	// const ImageUpload = useCallback(e => {
	// 	var reader = new FileReader();
	// 	reader.onload = function (e) {
	// 		setImgsrc(e.target.result);
	// 	};
	// 	reader.readAsDataURL(e.target.files[0]);
	// 	console.log(e.target.files[0]);
	// }, []);

	return (
		<Wrapper>
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
				<TitleDiv>
					<div>참여링크</div>
					<TitleInput placeholder="ex) 오픈채팅 URL 또는 편하신 URL을 입력해주세요. *개인정보는 올리시면 안돼요! " />
				</TitleDiv>
				<ImageDiv>
					<InPutImg
						type="file"
						multiple
						accept="image/*"
						ref={inputRef}
						onChange={e => onUploadImg(e)}
					/>
					{Imgsrc ? (
						<PostImg src={Imgsrc} alt="사진추가 이미지" />
					) : (
						<ImgBtnDiv label="이미지업로드" onClick={onUploadImageButtonClick} />
					)}
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
