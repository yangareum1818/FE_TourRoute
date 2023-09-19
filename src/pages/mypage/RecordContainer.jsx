import styled from 'styled-components';
import PostContentsLayout from 'components/Layout/PostContentsLayout';

import logoImg from '../../assets/logo2.png';
import recordImg1 from '../../assets/recordImg1.png';
import recordImg2 from '../../assets/recordImg2.png';
import recordImg3 from '../../assets/recordImg3.png';
import Empty from 'components/common/Empty';

const MyRecordWrppaer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

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

const MyRecordInfoValue = styled.span`
	flex: 3;
	color: #959696;
`;

const MyRecordInfoValuesWrapper = styled.div`
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

const RecordContainer = () => {
	return (
		<MyRecordWrppaer>
			<Empty text={'여행계획에서 나의 여행정보를 추천받고 저장해보세요!'} />
			<MyRecord>
				<MyRecordHead>
					<MyRecordHeadImg src={logoImg} />
				</MyRecordHead>

				<MyRecordContentWrapper>
					<MyRecordCategoryImg>
						<CategoryImg src={recordImg1} />
						<CategoryText>맛집</CategoryText>
					</MyRecordCategoryImg>

					<MyRecordContent>
						<MyRecordInfoWrapper>
							<MyRecordInfoText>여행지</MyRecordInfoText>
							<MyRecordInfoValue>부산</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>날짜</MyRecordInfoText>
							<MyRecordInfoValue>2023-08-09 ~ 2023-08-10</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>인원</MyRecordInfoText>
							<MyRecordInfoValue>2명</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>동행인</MyRecordInfoText>
							<MyRecordInfoValuesWrapper>
								<MyRecordInfoValue>nextgenerationsuperstar@gmail.com 맹구</MyRecordInfoValue>
								<MyRecordInfoValue>nextgenerationsuperstar@gmail.com 유리</MyRecordInfoValue>
								<MyRecordInfoValue>nextgenerationsuperstar@gmail.com 유리</MyRecordInfoValue>
							</MyRecordInfoValuesWrapper>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>투어리스트</MyRecordInfoText>
							<MyRecordInfoTourValuesWrapper>
								<MyRecordInfoTourValuesInner>
									<MyRecordInfoTourStart>개미집 서면 본점</MyRecordInfoTourStart>
									<MyRecordInfoTourEnd>물보라 광안</MyRecordInfoTourEnd>
								</MyRecordInfoTourValuesInner>
							</MyRecordInfoTourValuesWrapper>
						</MyRecordInfoWrapper>
					</MyRecordContent>
				</MyRecordContentWrapper>
			</MyRecord>

			<MyRecord>
				<MyRecordHead>
					<MyRecordHeadImg src={logoImg} />
				</MyRecordHead>

				<MyRecordContentWrapper>
					<MyRecordCategoryImg>
						<CategoryImg src={recordImg2} />
						<CategoryText>등산</CategoryText>
					</MyRecordCategoryImg>

					<MyRecordContent>
						<MyRecordInfoWrapper>
							<MyRecordInfoText>여행지</MyRecordInfoText>
							<MyRecordInfoValue>부산</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>날짜</MyRecordInfoText>
							<MyRecordInfoValue>2023-08-09 ~ 2023-08-10</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>인원</MyRecordInfoText>
							<MyRecordInfoValue>2명</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>동행인</MyRecordInfoText>
							<MyRecordInfoValuesWrapper>
								<MyRecordInfoValue>-</MyRecordInfoValue>
							</MyRecordInfoValuesWrapper>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>투어리스트</MyRecordInfoText>
							<MyRecordInfoTourValuesWrapper>
								<MyRecordInfoTourValuesInner>
									<MyRecordInfoTourStart>개미집 서면 본점</MyRecordInfoTourStart>
									<MyRecordInfoTourEnd>물보라 광안</MyRecordInfoTourEnd>
								</MyRecordInfoTourValuesInner>
							</MyRecordInfoTourValuesWrapper>
						</MyRecordInfoWrapper>
					</MyRecordContent>
				</MyRecordContentWrapper>
			</MyRecord>

			<MyRecord>
				<MyRecordHead>
					<MyRecordHeadImg src={logoImg} />
				</MyRecordHead>

				<MyRecordContentWrapper>
					<MyRecordCategoryImg>
						<CategoryImg src={recordImg3} />
						<CategoryText>역사</CategoryText>
					</MyRecordCategoryImg>

					<MyRecordContent>
						<MyRecordInfoWrapper>
							<MyRecordInfoText>여행지</MyRecordInfoText>
							<MyRecordInfoValue>부산</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>날짜</MyRecordInfoText>
							<MyRecordInfoValue>2023-08-09 ~ 2023-08-10</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>인원</MyRecordInfoText>
							<MyRecordInfoValue>2명</MyRecordInfoValue>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>동행인</MyRecordInfoText>
							<MyRecordInfoValuesWrapper>
								<MyRecordInfoValue>nextgenerationsuperstar@gmail.com 맹구</MyRecordInfoValue>
							</MyRecordInfoValuesWrapper>
						</MyRecordInfoWrapper>

						<MyRecordInfoWrapper>
							<MyRecordInfoText>투어리스트</MyRecordInfoText>
							<MyRecordInfoTourValuesWrapper>
								<MyRecordInfoTourValuesInner>
									<MyRecordInfoTourStart>개미집 서면 본점</MyRecordInfoTourStart>
									<MyRecordInfoTourEnd>물보라 광안</MyRecordInfoTourEnd>
								</MyRecordInfoTourValuesInner>
							</MyRecordInfoTourValuesWrapper>
						</MyRecordInfoWrapper>
					</MyRecordContent>
				</MyRecordContentWrapper>
			</MyRecord>
		</MyRecordWrppaer>
	);
};
export default RecordContainer;
