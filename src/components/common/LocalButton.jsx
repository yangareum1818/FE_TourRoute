import React, { useState } from 'react';
import {
	TrackedProgressIcon,
	TrackingProgressIcon,
	WishHeartActiveIcon,
	WishHeartIcon,
} from './Icon';
import { styled } from 'styled-components';
import img from 'assets/testbag.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
const MyWishList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem;
	height: 100%;
	background-size: cover;
	border-radius: 0.8rem;
`;

const ListIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ListContent = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 0.5rem;
`;
const LocalName = styled.h1`
	font-size: 2.4rem;
`;
const LocalTitle = styled.h4`
	font-size: 1.6rem;
`;
const LocalAddr = styled.div`
	color: #959696;
	font-size: 1.2rem;
`;
const LocalDate = styled.h1`
	font-size: 1.6rem;
`;
const LocalButton = ({ status, name, subaddr, term, backimg }) => {
	const img = 'http://13.209.56.221:8000/img/' + backimg;
	return (
		<MyWishList style={{ backgroundImage: `url(${img})` }}>
			<ListIconWrapper>
				{/*<WishHeartIcon /> 빈하트 */}
				<WishHeartActiveIcon />
				{status === '개최 예정' ? (
					<TrackedProgressIcon text={status} />
				) : (
					<TrackingProgressIcon text="진행 중" />
				)}
			</ListIconWrapper>

			<ListContent>
				<LocalName>대구</LocalName>
				<div>
					<LocalTitle>{name}</LocalTitle>
					<LocalAddr>
						<FaMapMarkerAlt />
						{subaddr}
					</LocalAddr>
				</div>
				<LocalDate>{term}</LocalDate>
			</ListContent>
		</MyWishList>
	);
};

export default LocalButton;
