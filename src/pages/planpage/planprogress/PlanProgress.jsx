import React from 'react';
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
	return (
		<Wrapper>
			<Header>
				<HeaderTItle>
					<span style={{ color: '#3AD0FF' }}>{Tour.Tour.LocalName}</span>에서 어떤 여행을 하고
					싶으신가요?
				</HeaderTItle>
				<HeadersubTitle>
					<span style={{ color: '#000000' }}>여행정보</span> > 투어리스트 > 여행저장
				</HeadersubTitle>
			</Header>
		</Wrapper>
	);
};

export default PlanProgress;
