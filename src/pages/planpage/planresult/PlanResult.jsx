import React from 'react';
import ResultImg from 'assets/resultImg.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
	const HandleFinish = () => {
		navigate('/');
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
