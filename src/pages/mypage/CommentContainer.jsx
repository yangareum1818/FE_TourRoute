import Empty from 'components/common/Empty';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { axiosGetQuery } from 'utils/AxiosUtils';

const MyCommentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const MyCommentList = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	padding: 1rem 2rem;
	width: 100%;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
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

const CommentInner = styled.div`
	position: relative;
`;
const Comment = styled.p`
	color: #000;
	font-size: 1.5rem;
	font-weight: 300;
`;
const CommentValue = styled.input`
	padding: 0 2rem;
	width: 100%;
	height: 4rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const CommentValueChangeBtn = styled.button`
	position: absolute;
	right: 2rem;
	top: 1.2rem;
	color: #3ad0ff;
	font-size: 1.6rem;
	font-weight: 700;
`;

const CommentContainer = () => {
	const [meCommentList, setMeCommentList] = useState([]);
	const onGetComment = useCallback(async () => {
		// const res = await axiosGetQuery(`/comment/get_comment?b_id=${}`);
		// setMeCommentList(res);
	}, []);

	// b_id를 어떻게 ${} 저 공간에 넣을 것인가 ?
	console.log(meCommentList);

	useEffect(() => {
		// onGetComment();
	}, []);

	return (
		<MyCommentWrapper>
			<Empty text="아직 작성한 댓글이 없습니다. 사람들과 소통해보세요 - !" />
			<MyCommentList>
				<CommentHeader>
					<CommentInfo>
						<UserProfileImg />
						<CommentTitle>배낭 여행</CommentTitle>
						<CommentData>2023-07-31 17:22</CommentData>
					</CommentInfo>
				</CommentHeader>
				<CommentInner>
					<CommentValue value="혹시 일정이 변경이 가능하실까요?" />
					<CommentValueChangeBtn>수정</CommentValueChangeBtn>
				</CommentInner>
			</MyCommentList>

			<MyCommentList>
				<CommentHeader>
					<CommentInfo>
						<UserProfileImg />
						<CommentTitle>배낭 여행</CommentTitle>
						<CommentData>2023-07-31 17:22</CommentData>
					</CommentInfo>
					<CommentControl>
						<Link>게시물 보기</Link>
						<CorrectionBtn>수정</CorrectionBtn>
						<DeleteBtn>삭제</DeleteBtn>
					</CommentControl>
				</CommentHeader>
				<CommentInner>
					<Comment>혹시 일정이 변경이 가능하실까요?</Comment>
				</CommentInner>
			</MyCommentList>
		</MyCommentWrapper>
	);
};
export default CommentContainer;
