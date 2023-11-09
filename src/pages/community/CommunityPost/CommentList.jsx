import { useState } from 'react';
import { styled } from 'styled-components';
import Comments from './Comments';

const CommentListWrapper = styled.ul``;

const CommentList = ({ getComment, editComment, url }) => {
	const [selCommentIndex, setSelCommentIndex] = useState(0);

	return (
		<CommentListWrapper>
			{getComment.map(comment => {
				const id = comment.c_id;
				console.log(comment);

				return (
					<Comments
						key={id}
						comment={comment}
						isEditing={selCommentIndex === id ? true : false}
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
