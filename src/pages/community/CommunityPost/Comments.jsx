import { useCallback, useRef, useState } from 'react';
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

const CommentInner = styled.div`
	position: relative;

	& > input {
		height: 5.1rem;
		padding: 1.6rem 3rem 1.6rem 2rem;
		border-radius: 0.8rem;
		border: 0.1rem solid #cfcfcf;
		background: #fff;
	}
`;

const CommentText = styled.p`
	color: #000;
	font-size: 1.5rem;
	font-weight: 300;
`;

const CommentBtn = styled.button`
	position: absolute;
	top: 1.8rem;
	right: 2rem;
	color: #3ad0ff;
	font-size: 1.6rem;
	font-weight: 700;
`;

const Comments = ({ comment, url }) => {
	let { c_id, username, user_email, contents, created_at } = comment;

	const CommentRef = useRef();

	const me = useSelector(state => state.Info);
	const CommentYearMonthDay = day(created_at).format('YYYY/MM/DD hh:mm');

	// 수정
	const [editState, setEditState] = useState(false);
	const [editValue, setEditValue] = useState(contents || '');

	const onCommentEdit = useCallback(() => {
		me.user.email === user_email ? setEditState(true) : setEditState(false);
	}, [me.user.email, user_email]);

	const onCommentChange = e => {
		setEditValue(e.target.value);
	};

	const onCommentChageComplete = useCallback(async () => {
		try {
			const res = await axiosTokenPut(
				`/comment/update_comment?c_id=${c_id}&contents=${editValue}`,
				{
					c_id: c_id,
					contents: editValue,
				},
			);

			if (res) {
				setEditState(!editState);
				alert('수정이 완료되었습니다.');
				// 상태관리하면 이거 location없애고 컴포넌트에 contents 상태관리됌.
				window.location.replace(`/community/${url}`);
			}
		} catch (error) {
			console.error(error);
		}
	}, [c_id, editValue, editState, url]);

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
		<CommentList>
			<CommentHeader>
				<CommentInfo>
					<UserProfileImg />
					<CommentTitle>{username}</CommentTitle>
					<CommentData>{CommentYearMonthDay}</CommentData>
				</CommentInfo>
				{user_email === me.user.email ? (
					<CommentControl>
						{!editState ? <button onClick={() => onCommentEdit()}>수정</button> : null}
						<button onClick={() => onDelComment(c_id)}>삭제</button>
					</CommentControl>
				) : (
					''
				)}
			</CommentHeader>
			<CommentInner>
				{editState ? (
					<>
						<input
							type="text"
							name="comment"
							ref={CommentRef}
							value={editValue}
							onChange={onCommentChange}
							onKeyDown={e => (e.key === 'Enter' ? onCommentChageComplete() : null)}
						/>
						<CommentBtn onClick={() => onCommentChageComplete()}>수정 완료</CommentBtn>
					</>
				) : (
					<CommentText>{contents}</CommentText>
				)}
			</CommentInner>
		</CommentList>
	);
};
export default Comments;
