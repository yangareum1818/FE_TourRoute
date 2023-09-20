import { Pagination } from 'antd';
import Empty from 'components/common/Empty';
import { ImgWhether, RecruitmentStatus } from 'components/common/Icon';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const WritingListWrapper = styled.div``;

const WritingListInner = styled.ul``;
const WritingList = styled.li`
	display: flex;
	gap: 2rem;
	align-items: center;
	padding: 2rem 0;
	border-bottom: 0.1rem solid #cfcfcf;

	&:first-child {
		border-top: 0.1rem solid #cfcfcf;
	}
`;
const WritingListCategory = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: #959696;
`;
const WritingListTitle = styled.div`
	flex: 1;
	display: flex;
	gap: 1rem;
	align-items: center;
	font-size: 1.6rem;

	a {
		width: 40rem;
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
const WritingListChange = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: flex-end;
`;
const WritingChangeBtn = styled.button`
	color: #959696;
	font-size: 1.6rem;
	font-weight: 400;
`;
const WritingListDate = styled.span`
	text-align: right;
	color: #959696;
	font-size: 1.6rem;
	font-weight: 400;
`;

const PageContainer = styled.div`
	padding-top: 6rem;
	text-align: center;
`;

const WritingListContainer = () => {
	const [current, setcurrent] = useState(1);
	const pageChange = useCallback(e => {
		setcurrent(e);
	}, []);

	const test = [
		{
			category: '자유 게시판',
			title:
				'제목이 길면 이렇게 해주세요 제목이 길면 이렇게 해주세요 제목이 길면 이 제목이 길면 제목이 길면 제목이 길면 이렇게 해주세요.',
			date: '2023-07-23',
		},
		{
			category: '자유 게시판',
			title:
				'제목이 길면 이렇게 해주세요 제목이 길면 이렇게 해주세요 제목이 길면 이 제목이 길면 제목이 길면 제목이 길면 이렇게 해주세요.',
			date: '2023-07-23',
		},
	];
	return (
		<WritingListWrapper>
			<Empty text="커뮤니티에서 동행인을 구하거나, 자유롭게 글을 작성해보세요!" />
			<WritingListInner>
				<WritingList>
					<WritingListCategory>자유게시판</WritingListCategory>
					<WritingListTitle>
						<Link>
							제목이 길면 이렇게 해주세요 제목이 길면 이렇게 해주세요 제목이 길면 이 제목이 길면
							제목이 길면 제목이 길면 이렇게 해주세요.
						</Link>
						<RecruitmentStatus statusText="모집 완료" />
						<ImgWhether />
					</WritingListTitle>
					<WritingListChange>
						<WritingChangeBtn>수정</WritingChangeBtn>
						<WritingChangeBtn>삭제</WritingChangeBtn>
					</WritingListChange>
					<WritingListDate>2023-07-23</WritingListDate>
				</WritingList>

				<WritingList>
					<WritingListCategory>자유게시판</WritingListCategory>
					<WritingListTitle>
						<Link>
							제목이 길면 이렇게 해주세요 제목이 길면 이렇게 해주세요 제목이 길면 이 제목이 길면
							제목이 길면 제목이 길면 이렇게 해주세요.
						</Link>
						<RecruitmentStatus statusText="모집 중" />
						<ImgWhether />
					</WritingListTitle>
					<WritingListChange>
						<WritingChangeBtn>수정</WritingChangeBtn>
						<WritingChangeBtn>삭제</WritingChangeBtn>
					</WritingListChange>
					<WritingListDate>2023-07-23</WritingListDate>
				</WritingList>

				<WritingList>
					<WritingListCategory>자유게시판</WritingListCategory>
					<WritingListTitle>
						<Link>
							제목이 길면 이렇게 해주세요 제목이 길면 이렇게 해주세요 제목이 길면 이 제목이 길면
							제목이 길면 제목이 길면 이렇게 해주세요.
						</Link>
						<RecruitmentStatus statusText="모집 중" />
						<ImgWhether />
					</WritingListTitle>
					<WritingListChange>
						<WritingChangeBtn>수정</WritingChangeBtn>
						<WritingChangeBtn>삭제</WritingChangeBtn>
					</WritingListChange>
					<WritingListDate>2023-07-23</WritingListDate>
				</WritingList>
			</WritingListInner>

			<PageContainer>
				<Pagination current={current} onChange={pageChange} total={50} />
			</PageContainer>
		</WritingListWrapper>
	);
};
export default WritingListContainer;
