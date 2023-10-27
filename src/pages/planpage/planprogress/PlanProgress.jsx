import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const Wrapper = styled.div`
	width: 100%;
	margin: 5rem 0;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;
const HeaderTItle = styled.div`
	font-size: 32px;
	font-weight: bold;
	color: #000000;
`;
const HeadersubTitle = styled.div`
	font-size: 24px;
	color: #cfcfcf;
`;
const PlanProgress = () => {
	const Tour = useSelector(state => state.Tour);
	const PageNumber = window.location.pathname.split('/')[2];
	useEffect(() => {}, [PageNumber]);
	console.log('test', PageNumber);
	return (
		<Wrapper>
			<Header>
				<HeaderTItle>
					{PageNumber === 1 || 2 ? (
						<div>
							<span style={{ color: '#3AD0FF' }}>{Tour.Tour.LocalName}</span>에서 어떤 여행을 하고
							싶으신가요?
						</div>
					) : PageNumber === 3 ? (
						<div>
							<span style={{ color: '#3AD0FF' }}>{Tour.Tour.LocalName}맛집</span>추천 여행지를
							찾았어요!
						</div>
					) : (
						''
					)}
				</HeaderTItle>
				<HeadersubTitle>
					<span style={{ color: '#000000' }}>여행정보</span> &gt; 투어리스트 &gt; 여행저장
				</HeadersubTitle>
			</Header>
		</Wrapper>
	);
};

export default PlanProgress;
