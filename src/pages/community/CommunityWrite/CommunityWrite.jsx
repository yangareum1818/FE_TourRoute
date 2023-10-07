import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { axiosTokenPost } from 'utils/AxiosUtils';

import img from 'assets/image.png';
import backgroundimg from 'assets/background_write.png';
import { SelectInput, SelectInputWrapper } from 'components/common/Input';
import TextArea from 'antd/es/input/TextArea';
import { Button, ButtonGroup } from 'components/common/Button';
import DummyImg from 'assets/deagu.png';

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
	// 상태 선택
	// const [category, setCategory] = useState('FREE');
	// const [recruitment, setRecruitment] = useState('RECRUITING');

	const [Imgsrc, setImgsrc] = useState('');
	const [Recruiting, SetRecruiting] = useState(false);
	const navigate = useNavigate();
	const inputRef = useRef();

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

	const handleClose = useCallback(
		e => {
			navigate(-1);
		},
		[navigate],
	);

	const handleSubmit = useCallback(async () => {
		const res = await axiosTokenPost('/board/create_board');
		console.log(res);
		// navigate('/community');
	}, []);

	const [board, setBoard] = useState({
		title: '',
		contents: '',
		category: 'IS_FREE',
		recruitment: null,
	});

	const { title, contents, category, recruitment } = board;

	const onChange = useCallback(
		e => {
			const { value, name } = e.target;

			console.log(name, value);

			setBoard({
				...board,
				[name]: value,
			});
		},
		[board],
	);

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

	const CommuWriteHandleSubmit = useCallback(async () => {
		const res = await axiosTokenPost('/board/create_board', board);

		console.log(res);
	}, []);

	return (
		<Wrapper>
			<Benner />
			<SectionDiv>
				<InputWrapper style={{ flexDirection: 'column', gap: '3rem' }}>
					<div style={{ display: 'flex', flexDirection: 'row', gap: '4rem' }}>
						<SelectInputWrapper
							label="카테고리"
							value={category}
							checked={category === 'IS_FREE'}
							onChange={category => onRadioChange(category)}
						>
							<SelectInput name="IS_FREE" value="IS_FREE">
								자유게시판
							</SelectInput>
							<SelectInput name="IS_ACCOMPANY" value="IS_ACCOMPANY">
								동행게시판
							</SelectInput>
						</SelectInputWrapper>
					</div>

					<div style={{ display: 'flex', flexDirection: 'row', gap: '4rem' }}>
						{Recruiting ? (
							<SelectInputWrapper
								label="모집상태"
								defaultChecked="RECRUITING"
								value={recruitment || ''}
								checked={recruitment === 'RECRUITING'}
								onChange={recruitment => onRadioChange(recruitment)}
							>
								<SelectInput name="RECRUITING" value="RECRUITING">
									모집 중
								</SelectInput>
								<SelectInput name="RECRUITMENT_COMPLETED" value="RECRUITMENT_COMPLETED">
									모집 완료
								</SelectInput>
							</SelectInputWrapper>
						) : (
							''
						)}
					</div>
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
				<InputWrapper>
					<TitleLabel>참여링크</TitleLabel>
					<TitleInput placeholder="ex) 오픈채팅 URL 또는 편하신 URL을 입력해주세요. ( *개인정보는 올리시면 안돼요! ) " />
				</InputWrapper>
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
						<InPutImg
							type="file"
							multiple
							accept="image/*"
							ref={inputRef}
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
