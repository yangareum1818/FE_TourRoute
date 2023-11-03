import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import LocalButton from '../../components/common/LocalButton';
import { Pagination } from 'antd';
import { axiosGet, axiosTokenGet } from 'utils/AxiosUtils';
import isBetween from 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isBetween, isSameOrBefore);
const Wrapper = styled.div`
	padding: 8rem 0 16rem;
	height: 100%;
	width: 100%;
`;
const FastivalTitle = styled.h1`
	color: #000000;
	font-size: 3.2rem;
	margin-bottom: 4rem;
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
	border-radius: 0.8rem;
	padding: 1rem 5rem;
`;
const LocalBtnChecked = styled.button`
	border: 1px solid #cfcfcf;
	border-radius: 0.8rem;
	padding: 1rem 5rem;
	background-color: #3ad0ff;
	color: white;
`;
const MyWishListWrapper = styled.ul`
	margin-top: 4rem;
	display: grid;
	// 몇 줄에 height값을 줄건지 map돌릴 때, (i가 3개일 때 1++증가 : test용으로 7개 넣음 (3줄이니까 3))
	grid-template-rows: repeat(4, 40rem);
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 10rem;
	gap: 2rem;
`;
const MyWishList = styled.li``;
const PaginationDiv = styled.div`
	margin: 3rem auto;
	display: flex;
	justify-content: center;
	font-size: 1.4rem;
`;
const Fastival = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [url, seturl] = useState('');
	const [Data, setData] = useState([]);
	const [ChangeData, setChageData] = useState([]);
	const [Category, setCategory] = useState('전체');
	const data = dayjs();
	let local = ['전체', '부산', '대구', '경주', '포항'];

	const GetAllFestival = useCallback(async e => {
		localStorage.getItem('token')
			? await axiosTokenGet('/festival/get_info').then(res => setData(res))
			: await axiosGet('/festival/get_info').then(res => setData(res));
	}, []);

	const GetCityFestival = useCallback(async e => {
		localStorage.getItem('token')
			? await axiosTokenGet(`/festival/get_city_info?city_name=${e}`).then(res => setData(res))
			: await axiosGet(`/festival/get_city_info?city_name=${e}`).then(res => setData(res));
	}, []);

	const GetFestival = useCallback(
		e => {
			setCategory(e);
			Category === '전체' ? GetAllFestival(e) : GetCityFestival(e);
		},
		[Category, GetAllFestival, GetCityFestival],
	);
	useEffect(() => {
		GetFestival();
	}, []);
	return (
		<Wrapper>
			<FastivalTitle>
				<FastivalSubTitle>역사가 깊은, 경상도 각지에서 </FastivalSubTitle>열리는 축제를 즐겨보세요!
			</FastivalTitle>
			<LocalList>
				{local.map(e => {
					return Category === e ? (
						<LocalBtnChecked onClick={() => GetFestival(e)}>{e}</LocalBtnChecked>
					) : (
						<LocalBtn onClick={() => GetFestival(e)}>{e}</LocalBtn>
					);
				})}
			</LocalList>
			<MyWishListWrapper>
				{Data.map((e, index) => {
					return (
						<MyWishList key={index}>
							<LocalButton key={index} props={e} index={index} />
						</MyWishList>
					);
				})}
			</MyWishListWrapper>
		</Wrapper>
	);
};

export default Fastival;
