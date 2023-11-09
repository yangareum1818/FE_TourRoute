import { useState } from 'react';
import { styled } from 'styled-components';
import Comments from './Comments';

const CommentListWrapper = styled.ul``;

const CommentList = ({ getComment, editComment, url }) => {
	const [selCommentIndex, setSelCommentIndex] = useState(getComment.user_email);

	return (
		<CommentListWrapper>
			{getComment.map(comment => {
				const id = comment.c_id;
				const email = comment.user_email;

				return (
					<Comments
						key={id}
						comment={comment}
						isEditing={selCommentIndex === email ? true : false}
						setSelCommentIndex={setSelCommentIndex}
						editComment={editComment}
						url={url}
					/>
				);
			})}
		</CommentListWrapper>
	);
};
export default CommentList;
