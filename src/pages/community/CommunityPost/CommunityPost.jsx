import { styled } from 'styled-components';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUserGroup } from 'react-icons/fa6';
import dayjs from 'dayjs';

import { axiosTokenPost } from 'utils/AxiosUtils';

import { Title } from 'components/common/Title';
import { Button, ButtonGroup } from 'components/common/Button';
import { Input } from 'components/common/Input';
import { RecruitmentStatus } from 'components/common/Icon';
import Profile from 'components/sidebar/Profile';

import dummyMyImage from '../../../assets/Mask_group.svg';
import dummyContentImage from '../../../assets/busan.png';

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

const CommunityUserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem 2rem;
	border-top: 0.1rem solid #cfcfcf;
	border-bottom: 0.1rem solid #cfcfcf;
`;
const ProfileImg = styled.img`
	display: block;
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
	// 게시글 상세 데이터
	const location = useLocation();
	const data = location.state.prop;
	const contentReplaceNewLine = () => {
		return data.contents.replace(<br />, '\r\n');
	};

	console.log(data);
	let {
		b_id,
		board_img_link,
		category,
		contents,
		created_at,
		r_link,
		recruitment,
		title,
		user_email,
		user_img_link,
		username,
	} = data;
	const img = process.env.REACT_APP_ENDPOINT + '/img/' + board_img_link;
	const YearMonthDay = day(created_at).format('YYYY/MM/DD hh:mm');
	console.log(YearMonthDay);

	const c = contents.replace('\r\n/g', <br />);
	// console.log('c', c);

	// 댓글
	const [comment, setComment] = useState('');
	const onCommentClick = useCallback(async () => {
		const commentData = await axiosTokenPost('/comment/create_comment');
		setComment(commentData);
	}, []);

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '8rem 0 16rem' }}
		>
			<Title text="커뮤니티" />
			<div style={{ position: 'relative', display: 'flex', gap: '2rem', marginTop: '3.2rem' }}>
				<WritingListWrapper>
					<CommunityUserInfo>
						{user_img_link === '' ? (
							<ProfileImg src={dummyMyImage} style={{ width: '4rem', height: '4rem' }} />
						) : (
							<ProfileImg src={user_img_link} style={{ width: '4rem', height: '4rem' }} />
						)}

						<UserName>{username}</UserName>
						<CommunityData>{YearMonthDay}</CommunityData>
					</CommunityUserInfo>
					<CommunityContentWrapper>
						<CommunityTitleWrapper>
							{category === 'IS_ACCOMPANY' ? <RecruitmentStatus statusText={recruitment} /> : null}
							<CommuTitle>{title}</CommuTitle>
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
								<ContentImg src={`http://13.209.56.221:8000/img/${img}`} />
							</div>
						)}
					</CommunityContentWrapper>
					<CommentWrapper>
						<div>
							<CommunityData>{YearMonthDay}</CommunityData>
							<CommentLength>· 댓글 3</CommentLength>
						</div>
						<CommentInput>
							<Input type="text" value={comment} placeholder="댓글을 입력해주세요." />
							<CommentBtn onClick={onCommentClick}>게시</CommentBtn>
						</CommentInput>
						<CommentListWrapper>
							<CommentList>
								<CommentHeader>
									<CommentInfo>
										<UserProfileImg />
										<CommentTitle>배낭 여행</CommentTitle>
										<CommentData>2023-07-31 17:22</CommentData>
									</CommentInfo>
									<CommentControl>
										<CorrectionBtn>수정</CorrectionBtn>
										<DeleteBtn>삭제</DeleteBtn>
									</CommentControl>
								</CommentHeader>
								<CommentInner>
									<Comment>혹시 일정이 변경이 가능하실까요?</Comment>
								</CommentInner>
							</CommentList>

							<CommentList>
								<CommentHeader>
									<CommentInfo>
										<UserProfileImg />
										<CommentTitle>배낭 여행</CommentTitle>
										<CommentData>2023-07-31 17:22</CommentData>
									</CommentInfo>
									<CommentControl>
										<CorrectionBtn>수정</CorrectionBtn>
										<DeleteBtn>삭제</DeleteBtn>
									</CommentControl>
								</CommentHeader>
								<CommentInner>
									<Comment>혹시 일정이 변경이 가능하실까요?</Comment>
								</CommentInner>
							</CommentList>

							<CommentList>
								<CommentHeader>
									<CommentInfo>
										<UserProfileImg />
										<CommentTitle>나나나</CommentTitle>
										<CommentData>2023-07-31 17:22</CommentData>
									</CommentInfo>
								</CommentHeader>
								<CommentInner>
									<Comment>담에 짧은기간 여행이면 함께 하고싶어요!!</Comment>
								</CommentInner>
							</CommentList>
						</CommentListWrapper>
					</CommentWrapper>
				</WritingListWrapper>

				<SideBarWrapper>
					{category === 'IS_ACCOMPANY' ? (
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
					{category === 'IS_ACCOMPANY' ? (
						<ButtonGroup>
							{recruitment === 'RECRUITING' ? (
								<Button text="참여하기">
									<FaUserGroup style={{ display: 'block', color: '#fff' }} />
								</Button>
							) : (
								<Button text="모집완료" variant="cancel" />
							)}

							<Button text="참여하기 종료" variant="cancel" />
						</ButtonGroup>
					) : null}
				</SideBarWrapper>
			</div>
		</div>
	);
};
export default CommunityPost;
