import { styled } from 'styled-components';
import Comments from './Comments';

const CommentListWrapper = styled.ul``;

const CommentList = ({ getComment, url }) => {
	return (
		<CommentListWrapper>
			{getComment.map(comment => {
				const id = comment.c_id;

				return <Comments key={id} comment={comment} url={url} />;
			})}
		</CommentListWrapper>
	);
};
export default CommentList;
