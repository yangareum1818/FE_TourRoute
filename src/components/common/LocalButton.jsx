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
	background: #000;
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
const LocalName = styled.strong`
	font-size: 2.4rem;
	font-weight: 700;
`;
const LocalTitle = styled.strong`
	font-size: 1.6rem;
	font-weight: 500;
`;
const LocalAddr = styled.div`
	margin-top: 0.5rem;

	span {
		padding-left: 0.5rem;
		display: inline-block;
		color: #959696;
		font-size: 1.2rem;
		font-weight: 300;
		vertical-align: middle;
	}
`;
const LocalDate = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
`;
const LocalButton = ({ props }) => {
	const img = process.env.REACT_APP_ENDPOINT + '/img/' + props.i_link;
	return (
		<MyWishList style={{ backgroundImage: `url(${img})` }}>
			<ListIconWrapper>
				{props.is_bookmark ? <WishHeartActiveIcon /> : <WishHeartIcon />}
				{props.status === '개최 예정' ? (
					<TrackedProgressIcon text={props.status} />
				) : (
					<TrackingProgressIcon text="진행 중" />
				)}
			</ListIconWrapper>

			<ListContent>
				<LocalName>{props.city}</LocalName>
				<div>
					<LocalTitle>{props.name}</LocalTitle>
					<LocalAddr>
						<FaMapMarkerAlt />
						<span>{props.subaddr}</span>
					</LocalAddr>
				</div>
				<LocalDate>{props.term}</LocalDate>
			</ListContent>
		</MyWishList>
	);
};

export default LocalButton;
