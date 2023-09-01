import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import LocalButton from '../../components/common/LocalButton';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`;
const FastivalTitle = styled.h1`
	color: #000000;
	font-size: 32px;
	margin-bottom: 1rem;
`;
const FastivalSubTitle = styled.span`
	color: #3ad0ff;
`;
const LocalList = styled.div`
	display: flex;
	gap: 3rem;
`;
const LocalBtn = styled.button`
	border: 1px solid #cfcfcf;
	border-radius: 8px;
	padding: 1rem 5rem;
`;
const MyWishListWrapper = styled.div`
	margin-top: 3rem;
	display: grid;
	// 몇 줄에 height값을 줄건지 map돌릴 때, (i가 3개일 때 1++증가 : test용으로 7개 넣음 (3줄이니까 3))
	grid-template-rows: repeat(4, 40rem);
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 10rem;
	gap: 2rem;
`;
const Fastival = () => {
	const wishlist = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
	let { params } = useParams();
	console.log(params);
	return (
		<Wrapper>
			<div>
				<FastivalTitle>
					<FastivalSubTitle>역사가 깊은, 경상도 각지에서 </FastivalSubTitle>열리는 축제를
					즐겨보세요!
				</FastivalTitle>
			</div>
			<LocalList>
				<LocalBtn>전체</LocalBtn>
				<LocalBtn>부산</LocalBtn>
				<LocalBtn>대구</LocalBtn>
				<LocalBtn>경주</LocalBtn>
				<LocalBtn>포항</LocalBtn>
			</LocalList>
			<MyWishListWrapper>
				{wishlist.map((e, index) => {
					return <LocalButton key={index} />;
				})}
			</MyWishListWrapper>
		</Wrapper>
	);
};

export default Fastival;
