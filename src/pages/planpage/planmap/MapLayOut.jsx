import React, { useCallback } from 'react';
import KakaoMap from './kakaomap/KakaoMap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MapList from './maplist/MapList';
import { useSelector } from 'react-redux';
import { axiosPost } from '../../../utils/AxiosUtils';
const Wrapper = styled.div`
	display: flex;
	gap: 3rem;
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
const ListContainer = styled.div`
	font-size: 1.6rem;
`;
const TourInfoDate = styled.div`
	display: flex;
	gap: 2rem;
`;
const RecordInfoTourStart = styled.h1`
	position: relative;
	padding: 1rem 3rem;
	border: 0.1rem solid #959696;
	border-radius: 0.4rem 0.4rem 0 0;

	&::before {
		content: '';
		position: absolute;
		top: 1.7rem;
		left: 1rem;
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		border: 0.3rem solid #3ad0ff;
		border-radius: 50%;
	}
`;
const RecordInfoTourEnd = styled.span`
	position: relative;
	padding: 1rem 3rem;
	margin-top: -0.1rem;
	border: 0.1rem solid #959696;
	border-radius: 0 0 0.4rem 0.4rem;

	&::before {
		content: '';
		position: absolute;
		top: 1.7rem;
		left: 1rem;
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		border: 0.3rem solid #000;
		border-radius: 50%;
	}
`;
const RecordInfoTourValuesInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 33rem;
`;
const MapLayOut = () => {
	const navigate = useNavigate();
	const result = useSelector(state1 => state1.Result);
	const Tour = useSelector(state => state.Tour);
	const name = useSelector(state => state.Info);
	console.log(window.location.pathname.split('/')[2]);
	const day = window.location.pathname.split('/')[3];
	const HandleDayChoice = useCallback(
		e => {
			navigate(`/tourplan/3/${e}`);
		},
		[navigate],
	);
	const HandleFinish = async () => {
		await axiosPost('/plan/save-plan', {
			city: Tour.Tour.LocalName,
			theme: 'park',
			period: ['2023-10-22', '2023-10-24'],
			accompany: [],
			email: 'tester3@test.com',
			tourList: result.Result,
		});
	};
	return (
		<>
			<Wrapper>
				<KakaoMap props={result.Result[day]} />
				<ListContainer>
					<TourInfoDate>
						{result.Result.map((e, index) => {
							return (
								<div key={index} onClick={() => HandleDayChoice(index)}>
									{index + 1}일차
								</div>
							);
						})}
					</TourInfoDate>
					<RecordInfoTourValuesInner>
						<RecordInfoTourStart>첫날 목적지</RecordInfoTourStart>
						<RecordInfoTourEnd>마지막 목적지</RecordInfoTourEnd>
					</RecordInfoTourValuesInner>
					<p>올해 여행은? 투어라우트에서 더 간편하게!</p>
					{result.Result[day].map((e, index) => {
						return <MapList key={index} props={e} />;
					})}
					;
				</ListContainer>
			</Wrapper>
			<NextBtn onClick={HandleFinish}>
				<NextText>다음</NextText>
			</NextBtn>
		</>
	);
};

export default MapLayOut;
