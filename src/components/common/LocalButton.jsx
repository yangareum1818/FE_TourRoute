import React, { useState, useCallback } from 'react';
import {
	TrackedProgressIcon,
	TrackingProgressIcon,
	WishHeartActiveIcon,
	WishHeartIcon,
} from './Icon';
import { styled } from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { axiosTokenPost } from 'utils/AxiosUtils';
import isBetween from 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';
dayjs.extend(isBetween);
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
const AticleHeart = styled.div`
	text-align: right;
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
const LocalButton = ({ props, index }) => {
	// const [bookmark, setBookmark] = useState(false)
	const [onChecked, setonChecked] = useState(props.is_bookmark);
	const data = dayjs();
	const currentTime = data.format('YYYY.MM.DD');
	// const [startTime]
	console.log(props.term.split('~'));
	const [startTime, FinishTime] = props.term.split('~');

	const img = process.env.REACT_APP_ENDPOINT + '/img/' + props.i_link;
	const handleChecked = useCallback(async () => {
		setonChecked(prev => !prev);
		await axiosTokenPost(`/festival/bookmark?festival_name=${props.f_name}`);
	}, [props.f_name]);
	return (
		<WishListItem style={{ backgroundImage: `url(${img})` }}>
			<ListIconWrapper>
				<AticleHeart onClick={handleChecked}>
					{!onChecked ? <WishHeartIcon /> : <WishHeartActiveIcon />}
				</AticleHeart>

				{data.isBetween(startTime.trim(), FinishTime.trim()) ? (
					<TrackingProgressIcon text="진행 중" />
				) : (
					<TrackedProgressIcon text="개최 예정" />
				)}
			</ListIconWrapper>

			<ListContent to={`/festival/board/${index}`} state={{ prop: props }}>
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
