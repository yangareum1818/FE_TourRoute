import React, { useState } from 'react';
import styled from 'styled-components';
import artimg from 'assets/category_art.png';
import foodimg from 'assets/category_food.png';
import mountin from 'assets/category_mount.png';
import hotplace from 'assets/category_hotlocation.png';
import history from 'assets/category_history.png';
import walking from 'assets/category_walk.png';
import { useNavigate } from 'react-router-dom';
import { axiosTokenGet } from 'utils/AxiosUtils';
import { useDispatch, useSelector } from 'react-redux';
import { result } from 'store/TourResult';
// import { result } from '../../../store/TourResult';
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
const CheckedLocation = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 5rem;
	color: white;
	border: 2rem solid #3ad0ff;
	color: #3ad0ff;
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
	const [Checked, setChecked] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const Tour = useSelector(state => state.Tour);
	const HandlePage = async () => {
		const res = await axiosTokenGet(
			`/plan/recommand-plan/?city=${Tour.Tour.LocalName}&theme=${Checked}&period=2`,
		);
		dispatch(result(res));
		navigate('/tourplan/3/0');
	};
	const HandleCheck = e => {
		setChecked(e);
		console.log(Checked);
	};
	return (
		<div>
			<CategoryContainer>
				{Checked === 'museum' ? (
					<CheckedLocation
						onClick={() => HandleCheck('museum')}
						style={{ background: `url(${artimg})` }}
					>
						<CategoryTitle>예술 아트</CategoryTitle>
					</CheckedLocation>
				) : (
					<CategoryLocation
						onClick={() => HandleCheck('museum')}
						style={{ background: `url(${artimg})` }}
					>
						<CategoryTitle>예술 아트</CategoryTitle>
					</CategoryLocation>
				)}
				{Checked === 'restaurant' ? (
					<CheckedLocation
						onClick={() => HandleCheck('restaurant')}
						style={{ background: `url(${foodimg})` }}
					>
						<CategoryTitle>맛집</CategoryTitle>
					</CheckedLocation>
				) : (
					<CategoryLocation
						onClick={() => HandleCheck('restaurant')}
						style={{ background: `url(${foodimg})` }}
					>
						<CategoryTitle>맛집</CategoryTitle>
					</CategoryLocation>
				)}
				{Checked === 'mountain' ? (
					<CheckedLocation
						onClick={() => HandleCheck('mountain')}
						style={{ background: `url(${mountin})` }}
					>
						<CategoryTitle>등산</CategoryTitle>
					</CheckedLocation>
				) : (
					<CategoryLocation
						onClick={() => HandleCheck('mountain')}
						style={{ background: `url(${mountin})` }}
					>
						<CategoryTitle>등산</CategoryTitle>
					</CategoryLocation>
				)}
				{Checked === 'tourspot' ? (
					<CheckedLocation
						onClick={() => HandleCheck('tourspot')}
						style={{ background: `url(${hotplace})` }}
					>
						<CategoryTitle>핫플레이스</CategoryTitle>
					</CheckedLocation>
				) : (
					<CategoryLocation
						onClick={() => HandleCheck('tourspot')}
						style={{ background: `url(${hotplace})` }}
					>
						<CategoryTitle>핫플레이스</CategoryTitle>
					</CategoryLocation>
				)}
				{Checked === 'park' ? (
					<CheckedLocation
						onClick={() => HandleCheck('park')}
						style={{ background: `url(${walking})` }}
					>
						<CategoryTitle>산책</CategoryTitle>
					</CheckedLocation>
				) : (
					<CategoryLocation
						onClick={() => HandleCheck('park')}
						style={{ background: `url(${walking})` }}
					>
						<CategoryTitle>산책</CategoryTitle>
					</CategoryLocation>
				)}
			</CategoryContainer>
			<NextBtn onClick={HandlePage}>
				<NextText>다음</NextText>
			</NextBtn>
		</div>
	);
};

export default PlanList;
