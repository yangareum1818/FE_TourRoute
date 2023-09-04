import React from 'react';
import styled from 'styled-components';
import img from 'assets/testpost.png';
import { TrackingProgressIcon } from '../../../components/common/Icon';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa6';
const Wrapper = styled.div`
	width: 23%;
	display: grid;
	grid-template-rows: 39rem 9rem 9rem 9rem 9rem 9rem 9rem;
	gap: 2rem;
`;
const NavDiv = styled.div`
	border: 0.1rem solid #cfcfcf;
	border-radius: 8px;
	color: #959696;
	font-size: 1.4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	padding-left: 2rem;
`;
const Fastivalnav = () => {
	return (
		<Wrapper>
			<img src={img} />
			<NavDiv>
				<div>
					<TrackingProgressIcon text="진행 중" />
				</div>
				2023 부산나이트워크 42K
			</NavDiv>
			<NavDiv>
				<div>기간</div>
				2023. 08. 26 - 2023.08. 27
			</NavDiv>
			<NavDiv>
				<div>행사장소</div>
				<div>
					<FaMapMarkerAlt />
					APEC 나루공원 일대
				</div>
			</NavDiv>
			<NavDiv>
				<div>이용요금</div>
				<div>42K 59,000원 / 22K 49,000원 / 16K 42,000원</div>
			</NavDiv>
			<NavDiv>
				<div>홈페이지</div>
				<div>
					<FaLocationArrow />
					<a>urbansports.kr</a>
				</div>
			</NavDiv>
			<NavDiv>
				<div>주최주간</div>
				<div>부산일보사, 블렌트 / 어반스포츠</div>
			</NavDiv>
		</Wrapper>
	);
};

export default Fastivalnav;
