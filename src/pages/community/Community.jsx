import React from 'react';
import styled from 'styled-components';
import CommunityTItile from './CoummunityTItle/ CommunityTItile';
import CommunitySide from './CommunitySide/CommunitySide';
import CommunityList from './CommunityList/CommunityList';

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 2rem 3rem;
	gap: 2rem;
	padding-left: 1rem;
	width: 100%;
	height: 130vh;
	margin-top: 7rem;
`;

const SectionContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Community = () => {
	return (
		<Wrapper>
			<CommunityTItile />
			<SectionContainer>
				<CommunityList />
				<CommunitySide />
			</SectionContainer>
		</Wrapper>
	);
};

export default Community;
