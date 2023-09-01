import React from 'react';
import { TrackingProgressIcon, WishHeartIcon } from './Icon';
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
	background-image: url(${img});
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
const LocalButton = () => {
	return (
		<MyWishList>
			<ListIconWrapper>
				<WishHeartIcon />
				<TrackingProgressIcon text="진행 중" />
			</ListIconWrapper>

			<ListContent>
				<LocalName>대구</LocalName>
				<div>
					<LocalTitle>2023 부산여행영화제</LocalTitle>
					<LocalAddr>
						<FaMapMarkerAlt /> 부산해운대구
					</LocalAddr>
				</div>
				<LocalDate>2023. 08. 26 - 2023.08. 27</LocalDate>
			</ListContent>
		</MyWishList>
	);
};

export default LocalButton;
