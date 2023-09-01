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
	border-radius: 0.8rem;
	background-image: url(${img});
`;

const ListIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ListContent = styled.div`
	height: 30rem;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1rem;
	gap: 0.5rem;
`;
const LocalName = styled.h1`
	font-size: 24px;
`;
const LocalTitle = styled.h4`
	font-size: 16px;
`;
const LocalAddr = styled.div`
	color: #959696;
	font-size: 12px;
`;
const LocalDate = styled.h1`
	font-size: 16px;
`;
const LocalButton = () => {
	return (
		<div>
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
		</div>
	);
};

export default LocalButton;
