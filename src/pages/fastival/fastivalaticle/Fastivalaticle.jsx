import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import {
	TrackingProgressIcon,
	WishHeartIcon,
	WishHeartActiveIcon,
	TrackedProgressIcon,
} from 'components/common/Icon';
import img from 'assets/testpost.png';
import { FaCircleInfo } from 'react-icons/fa6';
import { axiosTokenPost } from 'utils/AxiosUtils';
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
	const [onChecked, setonChecked] = useState(props.is_bookmark);
	const transform = e => {
		return e.replace(/\n/g, '<br/>');
	};
	const img = process.env.REACT_APP_ENDPOINT + '/img/' + props.i_link;
	const handleChecked = useCallback(async () => {
		setonChecked(prev => !prev);
		await axiosTokenPost(`/festival/bookmark?festival_name=${props.f_name}`);
	}, [props.f_name]);

	return (
		<Wrapper>
			<TitleDiv>
				<AticleTitle>
					{props.status === '개최 예정' ? (
						<TrackedProgressIcon text={props.status} />
					) : (
						<TrackingProgressIcon text="진행 중" />
					)}
				</AticleTitle>
				<AticleDate>{props.term}</AticleDate>
				<AticleHeart onClick={handleChecked}>
					{!onChecked ? <WishHeartIcon /> : <WishHeartActiveIcon />}
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
