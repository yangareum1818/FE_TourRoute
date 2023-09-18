import React from 'react';
import styled from 'styled-components';
import artimg from 'assets/category_art.png';
import foodimg from 'assets/category_food.png';
import mountin from 'assets/category_mount.png';
import hotplace from 'assets/category_hotlocation.png';
import history from 'assets/category_history.png';
import walking from 'assets/category_walk.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: 25rem 25rem 25rem 25rem;
	grid-template-rows: 40rem 40rem;
	gap: 3rem;
`;
const CategoryLocation = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 5rem;
	color: white;
	&:hover {
		border: 6px solid #3ad0ff;
		color: #3ad0ff;
	}
`;
const CategoryTitle = styled.span`
	font-weight: bold;
	font-size: 36px;
`;
const NextBtn = styled.div`
	background-color: #3ad0ff;
	width: 40rem;
	height: 6rem;
	margin: 3rem auto;
	border-radius: 8px;
	border: 0;
	text-align: center;
	display: flex;
	justify-content: center;
	cursor: pointer;
	align-items: center;
`;
const NextText = styled.span`
	color: white;
	font-size: 16px;
	font-weight: bold;
`;
const PlanList = () => {
	const navigate = useNavigate();
	const HandlePage = async () => {
		const res = await axios.post('http://13.209.56.221:8000//plan/recommand-plan?');
		// navigate('/tourplan/3');
	};
	return (
		<div>
			<CategoryContainer>
				<CategoryLocation style={{ background: `url(${artimg})` }}>
					<CategoryTitle>예술 아트</CategoryTitle>
				</CategoryLocation>
				<CategoryLocation style={{ background: `url(${foodimg})` }}>
					<CategoryTitle>맛집</CategoryTitle>
				</CategoryLocation>
				<CategoryLocation style={{ background: `url(${mountin})` }}>
					<CategoryTitle>등산</CategoryTitle>
				</CategoryLocation>
				<CategoryLocation style={{ background: `url(${hotplace})` }}>
					<CategoryTitle>핫플레이스</CategoryTitle>
				</CategoryLocation>
				<CategoryLocation style={{ background: `url(${history})` }}>
					<CategoryTitle>역사</CategoryTitle>
				</CategoryLocation>
				<CategoryLocation style={{ background: `url(${walking})` }}>
					<CategoryTitle>산책</CategoryTitle>
				</CategoryLocation>
			</CategoryContainer>
			<NextBtn onClick={HandlePage}>
				<NextText>다음</NextText>
			</NextBtn>
		</div>
	);
};

export default PlanList;
