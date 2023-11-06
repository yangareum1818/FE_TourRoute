import React, { useCallback, useState } from 'react';
import KakaoMap from './kakaomap/KakaoMap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MapList from './maplist/MapList';
import { useSelector } from 'react-redux';
import { axiosPost } from '../../../utils/AxiosUtils';
const Wrapper = styled.div`
	display: flex;
	gap: 0.5rem;
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
const RecordInfoTourStart = styled.span`
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
const SubIntro = styled.p`
	background-color: #f2f6f9;
	padding: 1rem;
	margin: 1rem 0;
`;
const MapLayOut = () => {
	const navigate = useNavigate();
	const result = useSelector(state1 => state1.Result);
	const Tour = useSelector(state => state.Tour);
	const name = useSelector(state => state.Info);
	const day = window.location.pathname.split('/')[3];

	const [locationName, setlocation] = useState(
		result.Result[day][0].store_name ||
			result.Result[day][0].m_name ||
			result.Result[day][0].s_name ||
			'',
	);
	const [finishlocationName, setfinishlocationName] = useState(
		result.Result[day][2].store_name ||
			result.Result[day][2].m_name ||
			result.Result[day][2].s_name ||
			'',
	);
	console.log();
	const HandleDayChoice = useCallback(
		e => {
			navigate(`/tourplan/3/${e}`);
		},
		[navigate],
	);
	const HandleFinish = async () => {
		navigate('/tourplan/4');
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
						<RecordInfoTourStart>{locationName}</RecordInfoTourStart>
						<RecordInfoTourEnd>{finishlocationName}</RecordInfoTourEnd>
					</RecordInfoTourValuesInner>
					<SubIntro>올해 여행은? 투어라우트에서 더 간편하게!</SubIntro>
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
