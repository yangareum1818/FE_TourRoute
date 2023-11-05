import { Pagination } from 'antd';
import Empty from 'components/common/Empty';
import { ImgWhether, RecruitmentStatus } from 'components/common/Icon';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { axiosTokenGet } from 'utils/AxiosUtils';

const day = require('dayjs');
day.locale('ko');

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
		max-width: 37rem;
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

const WritingListContainer = () => {
	const [meWritingList, setMeWritingList] = useState([]);

	const MyWritingList = useCallback(async () => {
		const data = await axiosTokenGet('/board/get_board');
		setMeWritingList(data);
	}, []);

	console.log('meWritingList', meWritingList);

	useEffect(() => {
		MyWritingList();
	}, []);

	return (
		<WritingListWrapper>
			{meWritingList.length === 0 ? (
				<Empty text="커뮤니티에서 동행인을 구하거나, 자유롭게 글을 작성해보세요!" />
			) : (
				<WritingListInner>
					{meWritingList.map(list => {
						const { b_id, category, created_at, title, user_img_link, recruitment } = list;
						const YearMonthDay = day(created_at).format('YYYY/MM/DD hh:mm');
						return (
							<WritingList key={b_id} index={b_id}>
								{category === 'free' ? (
									<WritingListCategory>자유게시판</WritingListCategory>
								) : (
									<WritingListCategory>동행게시판</WritingListCategory>
								)}
								<WritingListTitle>
									<Link to={`/community/${b_id}`} state={{ prop: list }}>
										{title}
									</Link>
									{category === 'accompany' ? <RecruitmentStatus statusText={recruitment} /> : null}

									{user_img_link === '이미지 파일이 없습니다.' ? null : <ImgWhether />}
								</WritingListTitle>
								<WritingListChange>
									<WritingChangeBtn>수정</WritingChangeBtn>
									<WritingChangeBtn>삭제</WritingChangeBtn>
								</WritingListChange>
								<WritingListDate>{YearMonthDay}</WritingListDate>
							</WritingList>
						);
					})}
				</WritingListInner>
			)}
		</WritingListWrapper>
	);
};
export default WritingListContainer;
