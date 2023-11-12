import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Pagination } from 'antd';

import Empty from 'components/common/Empty';
import { axiosGet } from 'utils/AxiosUtils';
import { ImgWhether, RecruitmentStatus } from 'components/common/Icon';

const day = require('dayjs');
day.locale('ko');

const WritingListWrapper = styled.div`
	flex: 3;
`;

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
		max-width: 45rem;
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
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

const CommunityList = () => {
	const [communityListData, setCommunityListData] = useState([]);

	const ListGet = useCallback(async () => {
		const all = await axiosGet('/board/get_board_all');
		const categoryData = await axiosGet(
			`/board/get_latest?category=${window.location.pathname.split('/')[2]}`,
		);

		if (window.location.pathname.split('/')[2]) setCommunityListData(categoryData);
		else setCommunityListData(all);
	}, []);

	console.log(communityListData);

	useEffect(() => {
		ListGet();
	}, []);

	return (
		<WritingListWrapper>
			{communityListData.length === 0 ? (
				<Empty text="커뮤니티에서 동행인을 구하거나, 자유롭게 글을 작성해보세요!" />
			) : (
				<WritingListInner>
					{communityListData.map((list, index) => {
						const { b_id, title, category, recruitment, board_img_link, created_at } = list;

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

									{board_img_link === '이미지 파일이 없습니다.' ? null : <ImgWhether />}
								</WritingListTitle>
								<WritingListDate>{YearMonthDay}</WritingListDate>
							</WritingList>
						);
					})}
				</WritingListInner>
			)}
		</WritingListWrapper>
	);
};

export default CommunityList;
