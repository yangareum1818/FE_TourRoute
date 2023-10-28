import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { axiosTokenGet } from 'utils/AxiosUtils';
import { result } from 'store/TourResult';

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
import { message } from 'antd';
import { tour } from 'store/PostRedux';
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
	const [Checked, setChecked] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();
	const Tour = useSelector(state => state.Tour);
	const [UserList, setUserList] = useState(Tour.Tour.UserList);
	const [LocalName, setLocalName] = useState(Tour.Tour.LocalName);
	const [StartDate, setStartDate] = useState(Tour.Tour.StartDate);
	const [FinishDate, setFinishDate] = useState(Tour.Tour.FinishDate);
	const [People, setPeople] = useState(Tour.Tour.People);
	const getDateDiff = (d1, d2) => {
		const date1 = new Date(d1);
		const date2 = new Date(d2);
		const diffDate = date1.getTime() - date2.getTime();
		return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
	};
	const alert = async (type, content) => {
		return messageApi.open({
			type: type,
			content: content,
		});
	};

	const HandlePage = async () => {
		if (Checked === null) {
			alert('warning', '여행일정을 확인해주세요.');
		} else {
			console.log(Checked);
			const res = await axiosTokenGet(
				`/plan/recommand-plan/?city=${Tour.Tour.LocalName}&theme=${Checked}&period=${getDateDiff(
					Tour.Tour.StartDate,
					Tour.Tour.FinishDate,
				)}`,
			);
			dispatch(result(res));
			dispatch(
				tour({
					LocalName: LocalName,
					StartDate: StartDate,
					FinishDate: FinishDate,
					People: People,
					UserList: UserList,
					Theme: Checked,
				}),
			);
			navigate('/tourplan/3/0');
		}
	};
	const HandleCheck = e => {
		setChecked(e);
	};
	return (
		<div>
			{contextHolder}
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
