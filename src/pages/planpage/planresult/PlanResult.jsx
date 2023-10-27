import React from 'react';
import ResultImg from 'assets/resultImg.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { axiosPost } from 'utils/AxiosUtils';
import { useSelector } from 'react-redux';
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

const PlanResult = () => {
	const navigate = useNavigate();
	const Tour = useSelector(state => state.Tour);
	const result = useSelector(state => state.result);
	const HandleFinish = async () => {
		await axiosPost('/plan/save-plan', {
			city: Tour.Tour.LocalName,
			theme: 'park',
			period: ['2023-10-22', '2023-10-24'],
			accompany: Tour.Tour.UserList,
			tourList: result.Result,
		});
	};
	return (
		<div>
			<img src={ResultImg} />
			<NextBtn onClick={HandleFinish}>
				<NextText>여행 저장</NextText>
			</NextBtn>
		</div>
	);
};

export default PlanResult;
