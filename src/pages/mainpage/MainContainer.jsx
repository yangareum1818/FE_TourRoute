import React from 'react';
import styled from 'styled-components';
import Benner from 'assets/MainBenner.png';
import { Link } from 'react-router-dom';
import CommunityList from 'pages/community/CommunityList/CommunityList';

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

const MainContainer = () => {
	const test = ['1', '2', '3', '4', '5', '6'];
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
					{/* {test.map((e, index) => {
						return <PostFree key={index} />;
					})} */}
					<CommunityList />
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
