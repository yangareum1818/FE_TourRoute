import React from 'react';
import styled from 'styled-components';
import PlanProgress from './Planprogress/PlanProgress';
import { Outlet } from 'react-router-dom';

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
