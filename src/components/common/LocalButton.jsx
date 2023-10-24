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
import { Link } from 'react-router-dom';

const WishListItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	background-color: #000;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 50%;
	border-radius: 0.8rem;

	&:hover > a {
		background: rgba(0, 0, 0, 0.6);
		border-radius: 0 0 0.8rem 0.8rem;
	}
`;

const ListIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
`;

const ListContent = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 2rem;
	color: #fff;
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
	position: relative;
	margin-top: 0.5rem;

	svg {
		position: absolute;
		top: 0.5rem;
		left: 0;
	}

	span {
		padding-left: 2rem;
		display: inline-block;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 400;
		vertical-align: middle;
	}
`;
const LocalDate = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
`;
const LocalButton = ({ props }) => {
	// const [bookmark, setBookmark] = useState(false)
	const img = process.env.REACT_APP_ENDPOINT + '/img/' + props.i_link;

	console.log(props);
	return (
		<WishListItem style={{ backgroundImage: `url(${img})` }}>
			<ListIconWrapper>
				{props.is_bookmark === false ? <WishHeartIcon /> : <WishHeartActiveIcon />}

				{props.status === '개최 예정' ? (
					<TrackedProgressIcon text={props.status} />
				) : (
					<TrackingProgressIcon text="진행 중" />
				)}
			</ListIconWrapper>

			{/* 병규쓰 ListContent가 Link임 여기에 to={} state={} 하면됌. */}
			<ListContent>
				<LocalName>{props.city}</LocalName>
				<div>
					<LocalTitle>{props.f_name}</LocalTitle>
					<LocalAddr>
						<FaMapMarkerAlt />
						<span>{props.addr}</span>
					</LocalAddr>
				</div>
				<LocalDate>{props.term}</LocalDate>
			</ListContent>
		</WishListItem>
	);
};

export default LocalButton;
