import styled from 'styled-components';

import logoImg from '../../assets/logo.svg';

import artimg from 'assets/category_art.png';
import foodimg from 'assets/category_food.png';
import mountain from 'assets/category_mount.png';
import hotplace from 'assets/category_hotlocation.png';
import walking from 'assets/category_walk.png';

const MyRecord = styled.div``;

const MyRecordHead = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4.8rem;
	background: #000;
	border: 0.1rem solid #000;
	border-radius: 0.8rem 0.8rem 0 0;
`;

const MyRecordHeadImg = styled.img`
	width: 10rem;
`;

const MyRecordContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4rem;
	padding: 3rem 4rem;
	margin-top: -0.1rem;
	border: 0.1rem solid #000;
	border-radius: 0 0 0.8rem 0.8rem;
`;

const MyRecordCategoryImg = styled.div`
	position: relative;
	height: fit-content;
`;
const CategoryImg = styled.img`
	display: block;
	width: 8rem;
	height: 12.5rem;
	border-radius: 0.4rem;
`;
const CategoryText = styled.span`
	position: absolute;
	left: 50%;
	bottom: 0;
	color: #fff;
	font-size: 1.6rem;
	font-weight: 700;
	transform: translate3d(-50%, -50%, 0);
`;

const MyRecordContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 3rem;
`;
const MyRecordInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;

	& > * {
		font-size: 1.6rem;
		font-weight: 400;
	}
`;

const MyRecordInfoText = styled.span`
	flex: 1;
	color: #000;
`;

const MyRecordInfoValue = styled.li`
	flex: 3;
	color: #959696;
`;

const MyRecordInfoValuesWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	flex: 3;
	gap: 1rem;
`;

const MyRecordInfoTourValuesWrapper = styled.div`
	flex: 3;

	& > * {
		color: #000;
	}
`;

const MyRecordInfoTourValuesInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 33rem;
`;

const MyRecordInfoTourStart = styled.span`
	position: relative;
	padding: 1rem 3rem;
	border: 0.1rem solid #959696;
	border-radius: 0.4rem 0.4rem 0 0;

	&::before {
		content: '';
		position: absolute;
		top: 1.7rem;
		left: 1rem;
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		border: 0.3rem solid #3ad0ff;
		border-radius: 50%;
	}
`;
const MyRecordInfoTour = styled.span`
	padding: 1rem 3rem;
	margin-top: -0.1rem;
	border: 0.1rem solid #959696;
`;
const MyRecordInfoTourEnd = styled.span`
	position: relative;
	padding: 1rem 3rem;
	margin-top: -0.1rem;
	border: 0.1rem solid #959696;
	border-radius: 0 0 0.4rem 0.4rem;

	&::before {
		content: '';
		position: absolute;
		top: 1.7rem;
		left: 1rem;
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		border: 0.3rem solid #000;
		border-radius: 50%;
	}
`;

const TourList = ({ props }) => {
	// 예술 아트 artimg : museum
	// 맛집 foodimg : restaurant
	// 등산 mountin : mountin
	// 핫플레이스 hotplace : tourspot
	// 산책 walking : park

	const { city, accompany, period, tourList, theme } = props;
	const category = {
		museum: {
			name: '예술아트',
			image: artimg,
		},
		restaurant: {
			name: '맛집',
			image: foodimg,
		},
		mountain: {
			name: '등산',
			image: mountain,
		},
		hotplace: {
			name: '핫플레이스',
			image: hotplace,
		},
		waliking: {
			name: '산책',
			image: walking,
		},
	};

	console.log(props);

	return (
		<MyRecord>
			<MyRecordHead>
				<MyRecordHeadImg src={logoImg} />
			</MyRecordHead>

			<MyRecordContentWrapper>
				{theme === 'museum' ? (
					<MyRecordCategoryImg>
						<CategoryImg src={category.museum.image} />
						<CategoryText>{category.museum.name}</CategoryText>
					</MyRecordCategoryImg>
				) : null}

				{theme === 'restaurant' ? (
					<MyRecordCategoryImg>
						<CategoryImg src={category.restaurant.image} />
						<CategoryText>{category.restaurant.name}</CategoryText>
					</MyRecordCategoryImg>
				) : null}

				{theme === 'mountain' ? (
					<MyRecordCategoryImg>
						<CategoryImg src={category.mountain.image} />
						<CategoryText>{category.mountain.name}</CategoryText>
					</MyRecordCategoryImg>
				) : null}

				{theme === 'tourspot' ? (
					<MyRecordCategoryImg>
						<CategoryImg src={category.hotplace.image} />
						<CategoryText>{category.hotplace.name}</CategoryText>
					</MyRecordCategoryImg>
				) : null}

				{theme === 'park' ? (
					<MyRecordCategoryImg>
						<CategoryImg src={category.waliking.image} />
						<CategoryText>{category.waliking.name}</CategoryText>
					</MyRecordCategoryImg>
				) : null}

				<MyRecordContent>
					<MyRecordInfoWrapper>
						<MyRecordInfoText>여행지</MyRecordInfoText>
						<MyRecordInfoValue>{city}</MyRecordInfoValue>
					</MyRecordInfoWrapper>

					<MyRecordInfoWrapper>
						<MyRecordInfoText>날짜</MyRecordInfoText>
						<MyRecordInfoValue>
							{period[0]} ~ {period[1]}
						</MyRecordInfoValue>
					</MyRecordInfoWrapper>

					<MyRecordInfoWrapper>
						<MyRecordInfoText>인원</MyRecordInfoText>
						<MyRecordInfoValue>{accompany.length}명</MyRecordInfoValue>
					</MyRecordInfoWrapper>

					<MyRecordInfoWrapper>
						<MyRecordInfoText>동행인</MyRecordInfoText>
						<MyRecordInfoValuesWrapper>
							<MyRecordInfoValue>{accompany[0]}</MyRecordInfoValue>
							<MyRecordInfoValue>{accompany[1]}</MyRecordInfoValue>
							<MyRecordInfoValue>{accompany[2]}</MyRecordInfoValue>
							<MyRecordInfoValue>{accompany[3]}</MyRecordInfoValue>
						</MyRecordInfoValuesWrapper>
					</MyRecordInfoWrapper>

					<MyRecordInfoWrapper>
						<MyRecordInfoText>투어리스트</MyRecordInfoText>
						<MyRecordInfoTourValuesWrapper>
							<MyRecordInfoTourValuesInner>
								<MyRecordInfoTourStart>{tourList[0][0].store_name}</MyRecordInfoTourStart>
								<MyRecordInfoTourEnd>{tourList.at(-1).at(-1).store_name}</MyRecordInfoTourEnd>
							</MyRecordInfoTourValuesInner>
						</MyRecordInfoTourValuesWrapper>
					</MyRecordInfoWrapper>
				</MyRecordContent>
			</MyRecordContentWrapper>
		</MyRecord>
	);
};
export default TourList;
