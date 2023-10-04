import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import PlanProgress from './planprogress/PlanProgress';

const Wrapper = styled.div`
	width: 100%;
`;

const Plan = () => {
	return (
		<Wrapper>
			<PlanProgress />
			<Outlet />
		</Wrapper>
	);
};

export default Plan;
