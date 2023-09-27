import React from 'react';
import styled from 'styled-components';
import CommunitySide from './CommunitySide/CommunitySide';
import CommunityList from './CommunityList/CommunityList';
import { Title } from 'components/common/Title';
import { Outlet } from 'react-router-dom';
import PostContentsLayout from 'components/Layout/PostContentsLayout';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 100%;
	padding: 8rem 0;
`;

const SectionContainer = styled.div`
	display: flex;
	gap: 2rem;
`;
const Community = () => {
	return (
		<Wrapper>
			<Title text="커뮤니티" />
			<SectionContainer>
				<CommunityList />
				{/* <Outlet>
				</Outlet> */}
				<CommunitySide />
			</SectionContainer>
		</Wrapper>
	);
};

export default Community;
