import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
	font-size: 1.6rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;

const TourBox = styled.div`
	border-left: 0.1rem solid black;
	padding: 1rem;
`;
const TourImg = styled.img`
	height: 12rem;
	width: 20rem;
	border-radius: 0.4rem;
`;
const FoodContainer = styled.div`
	border-top: 0.1rem solid #959696;
	padding-top: 1rem;
`;
const FoodDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
const FoodName = styled.span``;
const FoodMoney = styled.span`
	color: #ff2e2e;
`;
const MapList = ({ props }) => {
	return (
		<Wrapper>
			{props.category === 'restaurant' ? (
				<TourBox>
					<h3>{props.store_name}</h3>
					<p>{props.store_address}</p>
					<div>
						<TourImg src={props.picture_url} alt="" />
					</div>
					<p style={{ color: '#959696' }}>금액</p>

					<FoodContainer>
						{props.menu.map(e => {
							return (
								<FoodDiv>
									<FoodName>{e[0]}</FoodName>
									<FoodMoney>{e[1]}</FoodMoney>
								</FoodDiv>
							);
						})}
					</FoodContainer>
				</TourBox>
			) : props.category === 'park' ? (
				<TourBox>
					<h3>{props.p_name}</h3>
					<p>{props.sn_addr}</p>
				</TourBox>
			) : props.category === 'tourspot' ? (
				<TourBox>
					<h3>{props.s_name}</h3>
					<p>{props.intro}</p>
				</TourBox>
			) : props.category === 'mountain' ? (
				<TourBox>
					<h3>{props.name}</h3>
				</TourBox>
			) : props.category === 'museum' ? (
				<TourBox>
					<h3>{props.m_name}</h3>
					<p>{props.rn_addr}</p>
				</TourBox>
			) : (
				''
			)}
		</Wrapper>
	);
};

export default MapList;
