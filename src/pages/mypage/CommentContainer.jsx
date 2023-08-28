import { styled } from 'styled-components';

const MyCommentWrapper = styled.div`
	display: flex;
`;

const MyCommentList = styled.div`
	padding: 1rem 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const CommentContainer = () => {
	return (
		<MyCommentWrapper>
			<MyCommentList></MyCommentList>
		</MyCommentWrapper>
	);
};
export default CommentContainer;
