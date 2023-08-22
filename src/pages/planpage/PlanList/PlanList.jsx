import React from 'react';
import styled from 'styled-components';
import NextButton from 'pages/planpage/nextbutton/NextButton';
import artimg from 'assets/category_art.png';
import foodimg from 'assets/category_food.png';
import mountin from 'assets/category_mount.png';
import hotplace from 'assets/category_hotlocation.png';
import history from 'assets/category_history.png';
import walking from 'assets/category_walk.png';
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
const PlanList = () => {
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
			<NextButton />
		</div>
	);
};

export default PlanList;
