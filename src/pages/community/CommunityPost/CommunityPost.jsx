import { styled } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

import { axiosTokenGet, axiosTokenPost } from 'utils/AxiosUtils';

import { Title } from 'components/common/Title';
import { Button, ButtonGroup } from 'components/common/Button';
import { Input } from 'components/common/Input';

import { FaUserGroup } from 'react-icons/fa6';
import { RecruitmentStatus } from 'components/common/Icon';
import dummyMyImage from '../../../assets/Mask_group.svg';
import dummyContentImage from '../../../assets/busan.png';
import { useLocation } from 'react-router-dom';
const WritingListWrapper = styled.div`
	flex: 3;
`;

const SideBarWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
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
	align-items: center;
	gap: 2rem;
`;
const CommuTitle = styled.p`
	font-size: 2.6rem;
	font-weight: 700;
`;
const CommunityContent = styled.p`
	padding: 4rem 0;
	font-size: 1.5rem;
	line-height: 200%;
	color: #303133;
`;
const ContentImg = styled.img`
	display: block;
`;
const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 1.5rem;
	height: 20rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
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
	const [detail, setDetail] = useState();
	const DetailGetToken = useCallback(async () => {
		const res = await axiosTokenGet(`/board/get_board?b_id=${data.b_id}`);
		setDetail(res);
		console.log(res);
	}, []);

	// console.log(detail);

	useEffect(() => {
		DetailGetToken();
	}, []);

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
			<div style={{ display: 'flex', gap: '2rem', marginTop: '3.2rem' }}>
				<WritingListWrapper>
					<CommunityUserInfo>
						<ProfileImg src={dummyMyImage} style={{ width: '4rem', height: '4rem' }} />
						<UserName>김라온</UserName>
						<CommunityData>2023-07-31 20:22</CommunityData>
					</CommunityUserInfo>
					<CommunityContentWrapper>
						<CommunityTitleWrapper>
							<RecruitmentStatus statusText="모집 중" />
							<CommuTitle>{data.title}</CommuTitle>
						</CommunityTitleWrapper>
						<CommunityContent>
							함께 관광 여행을 떠나려고 해요. 저는 친화력 좋은, 사진 찍는 여행자에요. <br />
							1. 여행 기간 : 2023.09.23 ~ 2023.09.30 (예정) (항공권 기준) <br />
							2. 여행 지역 : 남고비 + 테를지 (예정, 협의 가능) <br />
							3. 컨택 여행사 : 고비 트래블 (지인이 있어 컨택 중에 있습니다) / 변경 가능
							<br />
							4. 항공권 : 여행 기간에 맞춰 발권 예정 <br />
							5. 현재 동행 인원 : 3명 <br />
							6. 우리 여행은요 : 저희는 99년생 대학생 남자 3명으로 모두 고등학교 친구 사이입니다.
							<br />
							모두 여행을 즐기는 쾌활한 친구들이고 함께 재미있게 여행 다녀오고자 합니다. <br />
							1) 저희 중 흡연자는 없으나 담배에 거부감은 없어 흡연 여부는 상관 없습니다. <br />
							2) 음주 여부도 상관 없습니다. 한 친구는 음주를 하지 않고 두 명은 적당히 즐기는
							정도입니다.
							<br /> 3) 성별도 상관 없습니다. 함께 유쾌하게 여행하고 사진도 서로 잘 찍어주면 좋을 것
							같습니다.
							<br /> 관심 있으신 분들은 해당 사이트 혹은 오픈카톡방 통해서 편하게 연락 부탁드립니다!
							<br />
							참여하기 누르시면 옵챗링크로 가집니다 비번 2234
							<br />
						</CommunityContent>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '1.5rem',
								maxWidth: '79.5rem',
								overflow: 'scroll',
							}}
						>
							<ContentImg src={dummyContentImage} />
							<ContentImg src={dummyContentImage} />
							<ContentImg src={dummyContentImage} />
							<ContentImg src={dummyContentImage} />
							<ContentImg src={dummyContentImage} />
							<ContentImg src={dummyContentImage} />
						</div>
					</CommunityContentWrapper>
					<CommentWrapper>
						<div>
							<CommunityData>2023-07-31 20:22</CommunityData>
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
					<ProfileWrapper>
						<ProfileImg src={dummyMyImage} />
						<UserName>김라온</UserName>
					</ProfileWrapper>
					<ButtonGroup>
						<Button text="참여하기">
							<FaUserGroup style={{ display: 'block', color: '#fff' }} />
						</Button>
						<Button text="참여하기 종료" variant="cancel" />
					</ButtonGroup>
				</SideBarWrapper>
			</div>
		</div>
	);
};
export default CommunityPost;
