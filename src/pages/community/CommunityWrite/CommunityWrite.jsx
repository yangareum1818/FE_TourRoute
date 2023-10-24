import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { axiosTokenPost } from 'utils/AxiosUtils';

import img from 'assets/image.png';
import backgroundimg from 'assets/background_write.png';
import TextArea from 'antd/es/input/TextArea';
import { Button, ButtonGroup } from 'components/common/Button';
import DummyImg from 'assets/deagu.png';
import RefForm from 'rc-field-form';
import { Radio } from 'antd';

const Wrapper = styled.div`
	padding-bottom: 12rem;
	width: 100%;
`;

const Benner = styled.div`
	padding-bottom: 30rem;
	background: url(${backgroundimg}) no-repeat center;
	background-size: cover;
`;

const SectionDiv = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 4rem 0;
`;

const InputWrapper = styled.div`
	padding: 2rem;
	display: flex;
	width: 100%;
	font-size: 1.6rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const TitleLabel = styled.label`
	flex: 1;
	color: #303133;
`;
const TitleInput = styled.input`
	flex: 7;
	font-size: 1.6rem;
	border: 0;

	&:focus {
		border: 0;
		outline: none;
	}
`;
const RadioInput = styled.input`
	display: none;
`;

// START : radio Input
const CategoryInner = styled.div`
	display: flex;
`;
const CategoryLabel = styled.label`
	flex: 1;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: pointer;
`;
const CategoryValue = styled.div`
	flex: 7;
	display: flex;
	gap: 3rem;
	position: relative;
`;
const CategoryInputInner = styled.div`
	& > input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
	}
	& > span {
		color: #959696;
		font-size: 1.6rem;
		font-weight: 500;
		cursor: pointer;
	}

	& > input[type='radio']:checked ~ span {
		color: #3ad0ff;
	}
`;
// END : radio Input

const ImgBtnDiv = styled.button`
	width: 6.4rem;
	height: 6.4rem;
	background: url(${img}) no-repeat;
`;
const PostImgWrapper = styled.div`
	flex: 7.5;
	display: flex;
	gap: 2rem;
	overflow: scroll;
`;
const PostImg = styled.img`
	display: block;
	height: 12rem;
`;
const InPutImg = styled.input`
	display: none;
`;

const TextAreaWrapper = styled(TextArea)`
	font-size: 1.6rem;

	textarea {
		padding: 2rem;
		border: 0.1rem solid #cfcfcf;
	}

	.ant-input-data-count {
		bottom: -30px;
	}
`;

const CommunityWrite = () => {
	// const ImageUpload = useCallback(e => {
	// 	var reader = new FileReader();
	// 	reader.onload = function (e) {
	// 		setImgsrc(e.target.result);
	// 	};
	// 	reader.readAsDataURL(e.target.files[0]);
	// 	console.log(e.target.files[0]);
	// }, [])

	const navigate = useNavigate();

	const [Imgsrc, setImgsrc] = useState('');
	const [Recruiting, SetRecruiting] = useState(false);
	const freeRef = useRef();
	const commpanyRef = useRef();
	const RecruitingRef = useRef();
	const RecruitEndRef = useRef();

	const imgesInputRef = useRef();

	const [board, setBoard] = useState({
		title: '',
		contents: '',
		category: 'IS_FREE',
		recruitment: null,
		r_link: '',
	});

	const { title, contents, category, recruitment, r_link } = board;

	const onChange = useCallback(
		e => {
			const { value, name } = e.target;

			setBoard({
				...board,
				[name]: value,
			});
		},
		[board],
	);

	// 카테고리, 모집상태
	const onRadioChange = useCallback(
		data => {
			data === 'IS_FREE'
				? setBoard({
						...board,
						category: data,
						recruitment: null,
				  })
				: setBoard({
						...board,
						category: data,
						recruitment: data,
				  });
			data === 'IS_FREE' ? SetRecruiting(false) : SetRecruiting(true);
			console.log('data', data);
			console.log(board);
		},
		[board],
	);

	// 이미지 업로드
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

	// 2개 이상 이미지업로드
	const onUploadImageButtonClick = useCallback(() => {
		imgesInputRef.current.click();
	}, []);

	// 작성완료
	const CommuWriteHandleSubmit = useCallback(async () => {
		const res = await axiosTokenPost('/board/create_board', board);
		console.log(res);
		// navigate('/community');
	}, []);

	// 취소
	const handleClose = useCallback(
		e => {
			navigate(-1);
		},
		[navigate],
	);

	return (
		<Wrapper>
			<Benner />
			<SectionDiv>
				<InputWrapper style={{ flexDirection: 'column', gap: '3rem' }}>
					<CategoryInner>
						<CategoryLabel>카테고리</CategoryLabel>
						<CategoryValue>
							<CategoryInputInner>
								<RadioInput
									type="radio"
									name="POST_FREE"
									value="IS_FREE"
									onClick={e => {
										onRadioChange(e.target.value);
									}}
									ref={freeRef}
								/>
								<span onClick={() => freeRef.current.click()}>자유게시판</span>
							</CategoryInputInner>
							<CategoryInputInner>
								<RadioInput
									type="radio"
									name="POST_FREE"
									value="IS_ACCOMPANY"
									onClick={e => {
										onRadioChange(e.target.value);
									}}
									ref={commpanyRef}
								/>
								<span onClick={() => commpanyRef.current.click()}>동행게시판</span>
							</CategoryInputInner>
						</CategoryValue>
					</CategoryInner>

					{Recruiting ? (
						<CategoryInner>
							<CategoryLabel>모집상태</CategoryLabel>
							<CategoryValue>
								<CategoryInputInner>
									<RadioInput
										type="radio"
										name="RECRUITING"
										value="RECRUITING"
										ref={RecruitingRef}
									/>
									<span onClick={() => RecruitingRef.current.click()}>모집 중</span>
								</CategoryInputInner>
								<CategoryInputInner>
									<RadioInput
										type="radio"
										name="RECRUITING"
										value="RECRUITMENT_COMPLETED"
										ref={RecruitEndRef}
									/>
									<span onClick={() => RecruitEndRef.current.click()}>모집 완료</span>
								</CategoryInputInner>
							</CategoryValue>
						</CategoryInner>
					) : null}
				</InputWrapper>

				<InputWrapper>
					<TitleLabel>제목</TitleLabel>
					<TitleInput
						name="title"
						value={title}
						onChange={onChange}
						placeholder="ex) 1박 2일 대구 놀러갈 분 구해요"
					/>
				</InputWrapper>

				{Recruiting ? (
					<InputWrapper>
						<TitleLabel>참여링크</TitleLabel>
						<TitleInput
							type="text"
							name="recruit"
							placeholder="ex) 오픈채팅 URL 또는 편하신 URL을 입력해주세요. ( *개인정보는 올리시면 안돼요! ) "
						/>
					</InputWrapper>
				) : null}

				{/* <InputWrapper>
					<TitleLabel>이미지</TitleLabel>
					<PostImgWrapper>
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
						<PostImg src={DummyImg} alt="사진추가 이미지" />
					</PostImgWrapper>
				</InputWrapper> */}

				{Imgsrc ? (
					<InputWrapper>
						<TitleLabel>이미지</TitleLabel>
						<PostImgWrapper>
							<PostImg src={Imgsrc} alt="사진추가 이미지" />
						</PostImgWrapper>
					</InputWrapper>
				) : (
					<InputWrapper style={{ justifyContent: 'center' }}>
						{/* multiple : 두개 이상의 파일 선택 */}
						<InPutImg
							type="file"
							multiple
							accept="image/*"
							ref={imgesInputRef}
							onChange={e => onUploadImg(e)}
						/>
						<ImgBtnDiv label="이미지업로드" onClick={onUploadImageButtonClick} />
					</InputWrapper>
				)}

				<TextAreaWrapper
					showCount
					maxLength={1000}
					style={{
						height: 500,
						resize: 'none',
					}}
					name="contents"
					value={contents}
					onChange={onChange}
					placeholder="1. 현재 동행이 있나요?
ex) 동행 1명 있어요
2. 어떤 동행을 찾고 있나요?
ex) 맛집  탐방을 좋아하는 20-30대 동행 찾아요!
3. 함께 맞출부분이 있나요?
ex) 원하시는 날짜가 있다면 알려주세요
(1000자 이내)"
				/>
			</SectionDiv>
			<ButtonGroup style={{ width: '40rem', margin: '0 auto' }}>
				<Button onClick={CommuWriteHandleSubmit} $sumbit text="작성완료" />
				<Button onClick={handleClose} text="취소" variant="cancel" />
			</ButtonGroup>
		</Wrapper>
	);
};

export default CommunityWrite;
