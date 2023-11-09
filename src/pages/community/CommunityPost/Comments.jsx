import { Input } from 'components/common/Input';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { axiosTokenDelete, axiosTokenPut } from 'utils/AxiosUtils';

const day = require('dayjs');
day.locale('ko');

const CommentList = styled.li`
	margin-top: 3rem;
	padding-left: 2rem;
`;

const CommentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
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
const CommentText = styled.p`
	color: #000;
	font-size: 1.5rem;
	font-weight: 300;
`;

const Comments = ({
	comment: { c_id, username, user_email, contents, created_at },
	isEditing,
	setSelCommentIndex,
	editComment,
	url,
}) => {
	const me = useSelector(state => state.Info);
	const CommentYearMonthDay = day(created_at).format('YYYY/MM/DD hh:mm');

	// 수정
	const [editValue, setEditValue] = useState(contents);
	const editInput = (
		<Input
			type="text"
			value={editValue}
			onChange={e => setEditValue(e.target.value)}
			onKeyDown={e => (e.key === 'Enter' ? onCommentEdit() : null)}
		/>
	);

	const onCommentEdit = useCallback(async () => {
		setSelCommentIndex(0);
		editComment(c_id, editValue);
		await axiosTokenPut('/comment/update_comment', {
			c_id: c_id,
			contents: contents,
		});
	}, [editComment, editValue, setSelCommentIndex, c_id, contents]);

	// 삭제
	const onDelComment = useCallback(
		async c_id => {
			if (window.confirm('댓글을 삭제하겠습니까 ?')) {
				await axiosTokenDelete(`/comment/delete_comment?c_id=${c_id}`);
				window.location.replace(`/community/${url}`);
			}
		},
		[url],
	);

	return (
		<CommentList id={c_id}>
			<CommentHeader>
				<CommentInfo>
					<UserProfileImg />
					<CommentTitle>{username}</CommentTitle>
					<CommentData>{CommentYearMonthDay}</CommentData>
				</CommentInfo>
				{user_email === me.user.email ? (
					<CommentControl>
						{/* <CorrectionBtn onClick={isEditing ? onCommentEdit() : setSelCommentIndex(c_id)}>
							수정
						</CorrectionBtn> */}
						<DeleteBtn onClick={() => onDelComment(c_id)}>삭제</DeleteBtn>
					</CommentControl>
				) : (
					''
				)}
			</CommentHeader>
			<CommentInner>{isEditing ? editInput : <CommentText>{contents}</CommentText>}</CommentInner>
		</CommentList>
	);
};
export default Comments;
