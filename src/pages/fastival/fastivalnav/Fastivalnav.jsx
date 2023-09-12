import React from 'react';
import styled from 'styled-components';
import img from 'assets/testpost.png';
import { TrackingProgressIcon } from '../../../components/common/Icon';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
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
const Fastivalnav = ({ props }) => {
	return (
		<Wrapper>
			<img src={img} />
			<NavDiv>
				<div>
					<TrackingProgressIcon text={props.status} />
				</div>
				{props.f_name}
			</NavDiv>
			<NavDiv>
				<div>기간</div>
				{props.term}
			</NavDiv>
			<NavDiv>
				<div>행사장소</div>
				<div>
					<FaMapMarkerAlt />
					{props.addr}
				</div>
			</NavDiv>
			<NavDiv>
				<div>이용요금</div>
				<div>{props.price}원</div>
			</NavDiv>
			<NavDiv>
				<div>홈페이지</div>
				<div>
					<FaLocationArrow />
					<Link to={props.h_link}>바로가기</Link>
				</div>
			</NavDiv>
			<NavDiv>
				<div>주최주간</div>
				<div>{props.host}</div>
			</NavDiv>
		</Wrapper>
	);
};

export default Fastivalnav;
