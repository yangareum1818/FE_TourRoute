import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { axiosTokenFormPost } from 'utils/AxiosUtils';

import DummyImges from 'assets/image.png';
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

const Images = styled.img`
	width: 6.4rem;
	height: 6.4rem;
	cursor: pointer;
`;
const InputImges = styled.input`
	display: none;
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

	const freeRef = useRef();
	const commpanyRef = useRef();
	const RecruitingRef = useRef();
	const RecruitEndRef = useRef();
	const [Recruiting, SetRecruiting] = useState(false);
	const [checkedHandle, setCheckedHandle] = useState(true);

	const [board, setBoard] = useState({
		title: '',
		contents: '',
		category: 'IS_FREE',
		recruitment: '',
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
	const onCategoryChange = useCallback(
		e => {
			const { value, name, checked } = e.target;
			console.log(value, name, checked);

			value === 'IS_FREE' ? SetRecruiting(false) : SetRecruiting(true);

			// 문제야 문제 ! : 동행에서 모집상태를 선택하고, 다시 자유로 바꾸면 모집상태 ''값을 넣어야함. (checked는 어찌저찌 함 .. 되긴되는데 기본디폴드값만 자유게시판에 설정함. 위에 useState만들어놨어요. checked)
			setBoard({
				...board,
				category: value,
				// category: value === 'IS_FREE' ? board.recruitment === '' : board.recruitment === value,
			});
		},
		[board],
	);
	const onRecruitMentChange = useCallback(
		data => {
			setBoard({
				...board,
				recruitment: data,
			});
		},
		[board],
	);

	console.log('board', board);

	// 이미지 업로드
	const imgesInputRef = useRef('');
	const onUploadImageButtonClick = useCallback(() => {
		imgesInputRef.current.click();
	}, []);

	const [Imgsrc, setImgsrc] = useState([]);
	const onUploadImg = e => {
		console.log('images', e.target.files);

		// const imageFormData = new FormData();
		// [].forEach.call(e.target.files, file => {
		// 	imageFormData.append('image', file);
		// });

		// 이미지 1개일 경우임. 2개이상은 조건문 변경바람 (위 주석).
		if (e.target.files[0]) {
			setImgsrc(e.target.files[0]);
		} else {
			setImgsrc(DummyImges);
			return;
		}
		// console.log('imageFormData', imageFormData);
		const render = new FileReader();

		console.log(render);

		render.onload = () => {
			if (render.readyState === 2) {
				setImgsrc(render.result);
			}
		};
		render.readAsDataURL(e.target.files[0]);
	};

	// 작성완료
	const CommuWriteHandleSubmit = useCallback(async () => {
		try {
			// 422떠요 ..
			const formData = new FormData();

			formData.append('board', board);

			const res = await axiosTokenFormPost(
				`/board/create_board?title=${title}&content=${contents}&category=${category}&recruitment=${recruitment}`,
				formData,
			);
			console.log(res);
			// navigate('/community');
		} catch (error) {
			console.error(error);
		}
	}, [title, contents, category, recruitment]);

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
									name="category"
									value="IS_FREE"
									defaultChecked={checkedHandle}
									onClick={e => {
										onCategoryChange(e);
									}}
									ref={freeRef}
								/>
								<span onClick={() => freeRef.current.click()}>자유게시판</span>
							</CategoryInputInner>
							<CategoryInputInner>
								<RadioInput
									type="radio"
									name="category"
									value="IS_ACCOMPANY"
									onClick={e => {
										onCategoryChange(e);
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
										name="recruitment"
										value="RECRUITING"
										onClick={e => onRecruitMentChange(e.target.value)}
										ref={RecruitingRef}
									/>
									<span onClick={() => RecruitingRef.current.click()}>모집 중</span>
								</CategoryInputInner>
								<CategoryInputInner>
									<RadioInput
										type="radio"
										name="recruitment"
										value="RECRUITMENT_COMPLETED"
										onClick={e => onRecruitMentChange(e.target.value)}
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

				{Imgsrc.length === 0 ? (
					<InputWrapper style={{ justifyContent: 'center' }}>
						<Images src={DummyImges} alt="community_imgaes" onClick={onUploadImageButtonClick} />
						<InputImges
							type="file"
							multiple
							accept="image/*"
							name="commun_imgaes"
							ref={imgesInputRef}
							onChange={onUploadImg}
						/>
					</InputWrapper>
				) : (
					<InputWrapper>
						<TitleLabel>이미지</TitleLabel>
						<PostImgWrapper>
							{/* {Imgsrc.forEach(() => {})} */}
							<PostImg src={Imgsrc} alt="사진추가 이미지" />
						</PostImgWrapper>
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
