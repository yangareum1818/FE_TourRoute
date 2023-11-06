import { styled } from 'styled-components';
import { useCallback, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUserGroup } from 'react-icons/fa6';
import dayjs from 'dayjs';

import {
	axiosTokenPost,
	axiosGet,
	axiosTokenDelete,
	axiosTokenDeleteBody,
	axiosTokenGet,
} from 'utils/AxiosUtils';

import { Title } from 'components/common/Title';
import { Button, ButtonGroup } from 'components/common/Button';
import { Input } from 'components/common/Input';
import { RecruitmentStatus } from 'components/common/Icon';

import dummyMyImage from '../../../assets/Mask_group.svg';
import { useSelector } from 'react-redux';
import Empty from 'components/common/Empty';

const day = require('dayjs');
day.locale('ko');

const WritingListWrapper = styled.div`
	flex: 3;
`;

const SideBarWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const SideMenuLocation = styled.span`
	position: absolute;
	top: -6rem;
	right: 0;
	font-size: 1.6rem;
	font-weight: 600;
	color: #959696;
`;
const CommunityUserInfoInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	border-top: 0.1rem solid #cfcfcf;
	border-bottom: 0.1rem solid #cfcfcf;
`;
const CommunityUserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const ProfileImg = styled.img`
	display: block;
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
`;
const UserName = styled.span`
	font-size: 1.6rem;
`;
const CommunityData = styled.span`
	font-size: 1.6rem;
	font-weight: 300;
	color: #959696;
	vertical-align: middle;
`;
const CommunityUserPostControl = styled.div`
	display: flex;
	gap: 2rem;

	& > button {
		color: #959696;
		font-size: 1.6rem;
		font-weight: 300;
	}
`;

const CommunityContentWrapper = styled.div`
	padding-top: 4rem;
`;
const CommunityTitleWrapper = styled.div`
	display: flex;
	align-items: baseline;
	gap: 2rem;
`;
const CommuTitle = styled.p`
	flex: 3;
	font-size: 2.6rem;
	font-weight: 700;
`;
const CommunityContent = styled.p`
	padding: 4rem 0;
	font-size: 1.5rem;
	color: #303133;
`;
const ContentImg = styled.img`
	display: block;
	width: 100%;
`;
const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	height: 20rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;
const MyImage = styled.img`
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
`;
const MyName = styled.span`
	font-size: 1.6rem;
	font-weight: 400;
	color: #000;
`;

const CommentWrapper = styled.div`
	margin-top: 8rem;
`;
const CommentLength = styled.span`
	margin-left: 0.4rem;
	color: #959696;
	font-size: 1.4rem;
	vertical-align: middle;
`;
const CommentInput = styled.div`
	position: relative;
	margin-top: 3rem;
`;
const CommentBtn = styled.button`
	position: absolute;
	top: 1.8rem;
	right: 2rem;
	color: #3ad0ff;
	font-size: 1.6rem;
	font-weight: 700;
`;
const CommentListWrapper = styled.ul``;

const CommentList = styled.li`
	margin-top: 3rem;
	padding-left: 2rem;
`;

const CommentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CommentInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	& > * {
		color: #959696;
		font-size: 1.6rem;
		font-weight: 300;
	}
`;

const UserProfileImg = styled.img`
	width: 4rem;
	height: 4rem;
	background: #000;
	border-radius: 50%;
`;
const CommentTitle = styled.span`
	color: #000;
`;
const CommentData = styled.span``;

const CommentControl = styled.div`
	display: flex;
	gap: 2rem;

	& > * {
		color: #959696;
		font-size: 1.6rem;
		font-weight: 300;
	}
`;

const CorrectionBtn = styled.button``;
const DeleteBtn = styled.button``;

const CommentInner = styled.div``;
const Comment = styled.p`
	margin-top: 1rem;
	color: #000;
	font-size: 1.5rem;
	font-weight: 300;
`;

const CommunityPost = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const data = location.state.prop;
	console.log(data);
	const url = window.location.pathname.split('/')[2];
	console.log(url);
	const img = process.env.REACT_APP_ENDPOINT + '/img/' + data.board_img_link;
	const YearMonthDay = day(data.created_at).format('YYYY/MM/DD hh:mm');
	// 게시글 상세 데이터
	const me = useSelector(state => state.Info);
	const [boardData, setBoardData] = useState([]);
	const getBoard = useCallback(async () => {
		const data = await axiosTokenGet('/board/get_board');
		setBoardData(data);
	}, []);

	const transform = e => {
		return e.replace(/\n/g, '<br/>');
	};

	// 게시판 삭제
	const Delboard = useCallback(async () => {
		await axiosTokenDelete(`/board/delete_board?b_id=${data.b_id}`);
		navigate('/community');
	}, [data.b_id]);

	// 댓글 게시, 수정, 삭제
	const [comment, setComment] = useState('');
	const [getComment, setGetcomment] = useState([]);
	const onCommentClick = useCallback(async () => {
		if (comment === '') return alert('댓글을 입력해주세요.');
		const res = await axiosTokenPost('/comment/create_comment', {
			b_id: data.b_id,
			contents: comment,
		});
		if (res.detail === '댓글 작성 성공') {
			// navigate(`/community/${url}`);
			window.location.replace(`/community/${url}`);
		}
	}, [comment]);

	const onGetComment = useCallback(async () => {
		const res = await axiosGet(`/comment/get_comment?b_id=${data.b_id}`);
		setGetcomment(res);
	}, [data.b_id]);

	const onDelComment = useCallback(async c_id => {
		await axiosTokenDelete(`/comment/delete_comment?c_id=${c_id}`);
		window.location.replace(`/community/${url}`);
	}, []);

	useEffect(() => {
		getBoard();
		onGetComment();
	}, []);

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '8rem 0 16rem' }}
		>
			<Title text="커뮤니티" />
			{boardData.length > 0 ? (
				<div style={{ position: 'relative', display: 'flex', gap: '2rem', marginTop: '3.2rem' }}>
					{boardData.map(board => {
						const {
							b_id,
							user_email,
							username,
							title,
							contents,
							r_link,
							user_img_link,
							recruitment,
							category,
							board_img_link,
							created_at,
						} = board;

						return (
							<>
								<WritingListWrapper>
									<CommunityUserInfoInner>
										<CommunityUserInfo>
											{data.user_img_link === '' ? (
												<ProfileImg src={dummyMyImage} />
											) : (
												<ProfileImg src={data.user_img_link} />
											)}
											<UserName>{data.username}</UserName>
											<CommunityData>{YearMonthDay}</CommunityData>
										</CommunityUserInfo>
										{me.user.name === data.username ? (
											<CommunityUserPostControl>
												<button>수정</button>
												<button onClick={Delboard}>삭제</button>
											</CommunityUserPostControl>
										) : (
											''
										)}
									</CommunityUserInfoInner>
									<CommunityContentWrapper>
										<CommunityTitleWrapper>
											{category === 'accompany' ? (
												<RecruitmentStatus statusText={data.recruitment} />
											) : null}
											<CommuTitle>{data.title}</CommuTitle>
										</CommunityTitleWrapper>

										<CommunityContent dangerouslySetInnerHTML={{ __html: transform(contents) }} />

										{board_img_link === '이미지 파일이 없습니다.' ? (
											''
										) : (
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													gap: '1.5rem',
													maxWidth: '79.5rem',
													overflow: 'scroll',
												}}
											>
												<ContentImg src={img} />
											</div>
										)}
									</CommunityContentWrapper>
									<CommentWrapper>
										<div>
											<CommunityData>{YearMonthDay}</CommunityData>
											<CommentLength>· 댓글 {getComment.length}</CommentLength>
										</div>
										<CommentInput>
											<Input
												type="text"
												name="comment"
												value={comment}
												onChange={e => setComment(e.target.value)}
												placeholder="댓글을 입력해주세요."
											/>
											<CommentBtn onClick={onCommentClick}>게시</CommentBtn>
										</CommentInput>
										<CommentListWrapper>
											{getComment.map(element => {
												const { b_id, c_id, contents, created_at, i_link, user_email, username } =
													element;
												const CommentYearMonthDay = day(created_at).format('YYYY/MM/DD hh:mm');

												return (
													<CommentList key={element.c_id}>
														<CommentHeader>
															<CommentInfo>
																<UserProfileImg />
																<CommentTitle>{element.username}</CommentTitle>
																<CommentData>{CommentYearMonthDay}</CommentData>
															</CommentInfo>
															{element.user_email === me.user.email ? (
																<CommentControl>
																	<CorrectionBtn>수정</CorrectionBtn>
																	<DeleteBtn onClick={() => onDelComment(element.c_id)}>
																		삭제
																	</DeleteBtn>
																</CommentControl>
															) : (
																''
															)}
														</CommentHeader>
														<CommentInner>
															<Comment>{element.contents}</Comment>
														</CommentInner>
													</CommentList>
												);
											})}
										</CommentListWrapper>
									</CommentWrapper>
								</WritingListWrapper>

								<SideBarWrapper>
									{category === 'accompany' ? (
										<SideMenuLocation>동행게시판</SideMenuLocation>
									) : (
										<SideMenuLocation>자유게시판</SideMenuLocation>
									)}
									<ProfileWrapper>
										{user_img_link === '' ? (
											<MyImage src={dummyMyImage} />
										) : (
											<MyImage src={user_img_link} />
										)}
										<MyName>{username}</MyName>
									</ProfileWrapper>
									{category === 'accompany' ? (
										<ButtonGroup>
											{recruitment === 'RECRUITING' ? (
												<Button text="참여하기">
													<FaUserGroup style={{ display: 'block', color: '#fff' }} />
												</Button>
											) : (
												<Button text="모집완료" variant="cancel" />
											)}

											{me.user.email === user_email ? (
												<Button text="참여하기 종료" variant="cancel" />
											) : null}
										</ButtonGroup>
									) : null}
								</SideBarWrapper>
							</>
						);
					})}
				</div>
			) : (
				<Empty text="해당 게시물이 존재하지 않습니다." />
			)}
		</div>
	);
};
export default CommunityPost;
