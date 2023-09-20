import React from 'react';
import styled from 'styled-components';
import { TrackingProgressIcon, WishHeartIcon } from 'components/common/Icon';
import img from 'assets/testpost.png';
import { FaCircleInfo } from 'react-icons/fa6';
const Wrapper = styled.div`
	width: 75%;
`;
const TitleDiv = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	border-top: 0.5px solid #959696;
	border-bottom: 0.5px solid #959696;
`;
const AticleTitle = styled.div`
	flex: 1;
`;
const AticleHeart = styled.div`
	text-align: right;
`;
const AticleDate = styled.div`
	flex: 9;
	font-size: 14px;
	color: #959696;
`;
const ContentDiv = styled.div`
	display: grid;
	grid-template-rows: 7rem 45rem;
`;
const ContentTitle = styled.div`
	font-weight: bold;
	font-size: 2.6rem;
	display: flex;

	align-items: center;
`;
const ContentImg = styled.img``;
const ContentText = styled.div`
	font-size: 1.5rem;
	margin: 0.5rem;
`;
const AlertDiv = styled.div`
	margin-top: 4rem;
	display: flex;
	border: 1px solid #cfcfcf;
	color: #959696;
	border-radius: 0.8rem;
	padding: 2rem;
	font-size: 1.5rem;
	gap: 1rem;
`;
const InfoDiv = styled.div`
	color: #3ad0ff;
`;
const ContentFont = styled.p`
	font-size: 1.5rem;
	margin: 0.5rem;
`;
const Fastivalaticle = ({ props }) => {
	let text =
		'단풍이 아름다운 10월의 가을 하늘아래 1592년, 조선 동래를 만나다라는 슬로건으로 역사와 전통의 향연 속에 개최되는 동래읍성역사축제는 역사교육형 체험 축제이다.\n 축제의 대표 프로그램인 동래성 전투재현 뮤지컬 외로운 성은 1592년 임진왜란 당신 전사이가도난을 외치며 목숨으로 동래성을 지키고자 했던 송상현 동래부사와 동래읍성민들의 처절한 항쟁을 재조명하며, 동래읍성 북문 언덕에서 연출하여 숲속 관람객이 극중의 일원이 되어 불꽃같은 감동과 전율로 카타르시스를 경험하게 될 것이다.\n지금의 부산시장과 같은 위치인 동래부사의 신임 행차와 야류 길놀이를 한번에 즐길 수 있는 동래부사행차 길놀이와 1592년 조선, 동래로 입장하는 여러가지 관문체험, 임진왜란의 동래성 전투를 기억하는 기억의 공간, 430여년전 동래읍성민들의 일상을 체험해보는 동래장터체험, 나도 모르게 어깨가 들썩 동래학춤 한마당 등 여러가지 공연과 체험들은 1592년으로 시간을 돌려놓을 것이다.\n동래읍성역사축제는 동래의 전통과 문화, 숭고한 선열들의 구국정신을 중심으로 역사의 산 교육장으로 교육(education)과 오락(entertainment)이 결합된 에듀테인먼트(Edutainment)의 역사교육형 축제로써 여러분의 문화적 욕구를 만족시킬 것이다.';
	const transform = e => {
		return e.replace(/\n/g, '<br/>');
	};
	return (
		<Wrapper>
			<TitleDiv>
				<AticleTitle>
					<TrackingProgressIcon text={props.status} />
				</AticleTitle>
				<AticleDate>{props.term}</AticleDate>
				<AticleHeart>
					<WishHeartIcon />
				</AticleHeart>
			</TitleDiv>
			<ContentDiv>
				<ContentTitle>{props.f_name}</ContentTitle>
				<ContentImg src={img} />
				<ContentFont>{props.f_name}</ContentFont>
				<ContentFont>대회 기간 : {props.term}</ContentFont>
				<ContentFont>대회 장소 :{props.addr}</ContentFont>
				<ContentFont>이용 요금 : {props.price} </ContentFont>
				<ContentText dangerouslySetInnerHTML={{ __html: transform(props.m_info) }} />
				<AlertDiv>
					<InfoDiv>
						<FaCircleInfo />
					</InfoDiv>
					<span>
						축제일정 및 운영사항은 변동이 있을수 있으니 정확한 정보는 홈페이지를 확인하시거나
						주최측에 문의바랍니다.
					</span>
				</AlertDiv>
			</ContentDiv>
		</Wrapper>
	);
};

export default Fastivalaticle;
