import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useNavigate, useLocation } from 'react-router-dom';
import {
	axiosTokenFormPost,
	axiosTokenPost,
	axiosTokenFormPut,
	axiosTokenPut,
} from 'utils/AxiosUtils';

import DummyImges from 'assets/image.png';
import backgroundimg from 'assets/background_write.png';
import TextArea from 'antd/es/input/TextArea';
import { Button, ButtonGroup } from 'components/common/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import DummyImg from 'assets/deagu.png';
// import RefForm from 'rc-field-form';
// import { Radio } from 'antd';

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
	const location = useLocation();
	const data = location.state;
	const navigate = useNavigate();
	const freeRef = useRef();
	const commpanyRef = useRef();
	const RecruitingRef = useRef();
	const RecruitEndRef = useRef();
	const [Modify, setModify] = useState(true);
	const [Recruiting, SetRecruiting] = useState(false);
	const [modifyRecruiting, setmodifyRecruiting] = useState(
		data && data.category === 'free' ? false : true,
	);
	const [ImageData, setImageData] = useState('');
	const [TextData, SetTextData] = useState('');
	const [modifyData, setmodifyData] = useState(data ? data.contents : '');
	const [ImageChecked, setImageShecked] = useState(false);
	const [checkedHandle, setCheckedHandle] = useState(true);

	console.log('test', location.state);
	const [board, setBoard] = useState({
		title: '',
		contents: '',
		category: 'free',
		recruitment: '',
		r_link: '',
	});

	let { title, contents, category, recruitment, r_link } = board;

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				[{ font: [] }],
				[{ align: [] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[{ list: 'ordered' }, { list: 'bullet' }, 'link'],
				[
					{
						color: [
							'#000000',
							'#e60000',
							'#ff9900',
							'#ffff00',
							'#008a00',
							'#0066cc',
							'#9933ff',
							'#ffffff',
							'#facccc',
							'#ffebcc',
							'#ffffcc',
							'#cce8cc',
							'#cce0f5',
							'#ebd6ff',
							'#bbbbbb',
							'#f06666',
							'#ffc266',
							'#ffff66',
							'#66b966',
							'#66a3e0',
							'#c285ff',
							'#888888',
							'#a10000',
							'#b26b00',
							'#b2b200',
							'#006100',
							'#0047b2',
							'#6b24b2',
							'#444444',
							'#5c0000',
							'#663d00',
							'#666600',
							'#003700',
							'#002966',
							'#3d1466',
							'custom-color',
						],
					},
					{ background: [] },
				],
				['clean'],
			],
		},
	};

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

			if (value === 'free') {
				SetRecruiting(false);
				setBoard({ ...board, category: value, recruitment: '' });
			} else {
				SetRecruiting(true);
				setBoard({ ...board, category: value });
			}
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
	// 이미지 업로드
	const imgesInputRef = useRef('');
	const onUploadImageButtonClick = useCallback(() => {
		imgesInputRef.current.click();
	}, []);
	const formData = new FormData();
	const [Imgsrc, setImgsrc] = useState([]);
	const onUploadImg = e => {
		setImageShecked(true);
		setImageData(e.target.files[0]);
		if (e.target.files[0]) {
			setImgsrc(e.target.files[0]);
		} else {
			setImgsrc(DummyImges);
			return;
		}
		const render = new FileReader();

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
			if (title && TextData && category) {
				formData.append('file', ImageData);
				ImageChecked === false
					? await axiosTokenPost(
							`/board/create_board?title=${title}&contents=${TextData}&category=${category}&recruitment=${recruitment}`,
					  )
					: await axiosTokenFormPost(
							`/board/create_board?title=${title}&contents=${TextData}&category=${category}&recruitment=${recruitment}&r_link=${r_link}`,
							formData,
					  );
				alert('게시글 작성이 완료되었습니다.');
				navigate('/community');
			} else {
				alert('글을 입력해주세요');
			}
		} catch (error) {}
	}, [title, category, recruitment, r_link, ImageData, ImageChecked, formData]);

	const onClickModifySubmit = useCallback(
		async e => {
			formData.append('file', ImageData);
			ImageChecked === false
				? await axiosTokenPut(
						`/board/update_board?b_id=${data.b_id}&contents=${modifyData}&recruitment=${recruitment}`,
				  ).then(() => window.location.replace(`/community`))
				: await axiosTokenFormPut(
						`/board/update_board?b_id=${data.b_id}&contents=${modifyData}&recruitment=${recruitment}`,
						formData,
				  ).then(() => window.location.replace(`/community`));
		},
		[ImageChecked, ImageData, formData, modifyData, recruitment],
	);

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
			{data ? (
				<div>
					<SectionDiv>
						<InputWrapper style={{ flexDirection: 'column', gap: '3rem' }}>
							<CategoryInner>
								<CategoryLabel>카테고리</CategoryLabel>
								<CategoryValue>
									{data.category === 'free' ? '자유게시판' : '동행게시판'}
								</CategoryValue>
							</CategoryInner>

							{modifyRecruiting ? (
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
							<span style={{ flex: 7 }}>{data.title}</span>
						</InputWrapper>

						{Recruiting ? (
							<InputWrapper>
								<TitleLabel>참여링크</TitleLabel>
								<TitleInput
									type="text"
									name="recruit"
									value={r_link}
									onChange={onChange}
									placeholder="ex) 오픈채팅 URL 또는 편하신 URL을 입력해주세요. ( *개인정보는 올리시면 안돼요! ) "
								/>
							</InputWrapper>
						) : null}

						{Imgsrc.length === 0 ? (
							<InputWrapper style={{ justifyContent: 'center' }}>
								<Images
									src={DummyImges}
									alt="community_imgaes"
									onClick={onUploadImageButtonClick}
								/>
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
						<ReactQuill
							name="contents"
							value={modifyData}
							onChange={e => setmodifyData(e)}
							maxLength={1500}
							style={{
								height: 500,
								resize: 'none',
							}}
							modules={modules}
							placeholder="1. 현재 동행이 있나요?
			ex) 동행 1명 있어요
			2. 어떤 동행을 찾고 있나요?
			ex) 맛집  탐방을 좋아하는 20-30대 동행 찾아요!
			3. 함께 맞출부분이 있나요?
			ex) 원하시는 날짜가 있다면 알려주세요
			(1500자 이내)"
						/>
					</SectionDiv>
					<ButtonGroup style={{ width: '40rem', margin: '0 auto' }}>
						<Button onClick={onClickModifySubmit} $sumbit text="수정하기" />
						<Button onClick={handleClose} text="취소" variant="cancel" />
					</ButtonGroup>
				</div>
			) : (
				<div>
					<SectionDiv>
						<InputWrapper style={{ flexDirection: 'column', gap: '3rem' }}>
							<CategoryInner>
								<CategoryLabel>카테고리</CategoryLabel>
								<CategoryValue>
									<CategoryInputInner>
										<RadioInput
											type="radio"
											name="category"
											value="free"
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
											value="accompany"
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
									value={r_link}
									onChange={onChange}
									placeholder="ex) 오픈채팅 URL 또는 편하신 URL을 입력해주세요. ( *개인정보는 올리시면 안돼요! ) "
								/>
							</InputWrapper>
						) : null}

						{Imgsrc.length === 0 ? (
							<InputWrapper style={{ justifyContent: 'center' }}>
								<Images
									src={DummyImges}
									alt="community_imgaes"
									onClick={onUploadImageButtonClick}
								/>
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
						<ReactQuill
							name="contents"
							onChange={e => SetTextData(e)}
							maxLength={1500}
							style={{
								height: 500,
								resize: 'none',
							}}
							modules={modules}
							placeholder="1. 현재 동행이 있나요?
ex) 동행 1명 있어요
2. 어떤 동행을 찾고 있나요?
ex) 맛집  탐방을 좋아하는 20-30대 동행 찾아요!
3. 함께 맞출부분이 있나요?
ex) 원하시는 날짜가 있다면 알려주세요
(1500자 이내)"
						/>
					</SectionDiv>
					<ButtonGroup style={{ width: '40rem', margin: '0 auto' }}>
						<Button onClick={CommuWriteHandleSubmit} $sumbit text="작성완료" />
						<Button onClick={handleClose} text="취소" variant="cancel" />
					</ButtonGroup>
				</div>
			)}
		</Wrapper>
	);
};

export default CommunityWrite;
