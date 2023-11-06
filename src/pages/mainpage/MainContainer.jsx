import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Benner from 'assets/MainBenner.png';
import { Link } from 'react-router-dom';
import { axiosGet } from 'utils/AxiosUtils';
import { ImgWhether, RecruitmentStatus } from 'components/common/Icon';
const Wrapper = styled.div`
	width: 100%;
`;
//커뮤니티
const ComunityContainer = styled.div`
	margin: 8rem 0rem 16rem;
`;
const ComunityHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 4rem;
`;
const ComunityTitle = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
`;
const ComunityTheMore = styled(Link)`
	color: #000;
	font-size: 1.6rem;
	font-weight: 600;
`;
const ComunityContent = styled.div``;
const BennerContainer = styled.div`
	margin-bottom: 10rem;
`;
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
const MainContainer = () => {
	const [communityListData, setCommunityListData] = useState([]);
	const GetCommunityList = useCallback(async () => {
		const res = await axiosGet('/board/get_latest_main');
		setCommunityListData(res);
		console.log(res);
	}, []);
	useEffect(() => {
		GetCommunityList();
	}, []);
	return (
		<Wrapper>
			<ComunityContainer>
				<ComunityHeader>
					<ComunityTitle>
						소중한 <span style={{ color: '#3AD0FF' }}> 추억</span> 만들어 볼까요?
					</ComunityTitle>
					<ComunityTheMore to="/community">더보기</ComunityTheMore>
				</ComunityHeader>
				<ComunityContent>
					{communityListData.map((e, index) => {
						return (
							<WritingList key={index}>
								{e.category === 'free' ? (
									<WritingListCategory>자유게시판</WritingListCategory>
								) : (
									<WritingListCategory>동행게시판</WritingListCategory>
								)}
								<WritingListTitle>
									<Link to={`/community/${e.b_id}`} state={{ prop: e }}>
										{e.title}
									</Link>
									{e.category === 'accompany' ? (
										<RecruitmentStatus statusText={e.recruitment} />
									) : null}

									{e.board_img_link === '이미지 파일이 없습니다.' ? null : <ImgWhether />}
								</WritingListTitle>
								<WritingListDate>{e.YearMonthDay}</WritingListDate>
							</WritingList>
						);
					})}
				</ComunityContent>
			</ComunityContainer>
			<BennerContainer>
				<img src={Benner} />
			</BennerContainer>
		</Wrapper>
	);
};

export default MainContainer;

const FreeContainer = styled.div`
	border-bottom: 1px solid gray;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 600;
	padding: 1rem 0;
`;
const Freesub = styled.div`
	color: #959696;
`;
const FreeTitle = styled.div`
	margin-right: 60rem;
`;

const PostFree = () => {
	return (
		<FreeContainer>
			<Freesub>자유게시판</Freesub>
			<FreeTitle>오늘 저녁 뭐먹지</FreeTitle>
			<Freesub>2023-07-31</Freesub>
		</FreeContainer>
	);
};

const PostAccompany = () => {
	return (
		<FreeContainer>
			<Freesub>자유게시판</Freesub>
			<FreeTitle>오늘 저녁 뭐먹지</FreeTitle>
			<Freesub>2023-07-31</Freesub>
		</FreeContainer>
	);
};
