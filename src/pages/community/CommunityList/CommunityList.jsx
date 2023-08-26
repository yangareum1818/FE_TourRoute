import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';
const Wrapper = styled.div`
	border-top: 1px solid grey;
	width: 77%;
`;
const ListForm = styled.div`
	display: grid;
	grid-template-rows: 5.5rem;
	grid-template-columns: 17rem 55rem 10rem;
`;
const ListContent = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid grey;
	font-size: 16px;
`;
const ListSubTitle = styled.span`
	color: #959696;
`;
const PageContainer = styled.div`
	margin: 2rem auto;
	text-align: center;
`;
const CommunityList = () => {
	const [current, setcurrent] = useState(1);
	const pageChange = useCallback(e => {
		setcurrent(e);
	}, []);
	const test = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
	return (
		<>
			<Wrapper>
				{test.map(e => {
					return (
						<ListForm>
							<ListContent>
								<ListSubTitle>자유게시판</ListSubTitle>
							</ListContent>
							<ListContent>Content</ListContent>
							<ListContent>
								<ListSubTitle>2023-07-31</ListSubTitle>
							</ListContent>
						</ListForm>
					);
				})}
				<PageContainer>
					<Pagination current={current} onChange={pageChange} total={50} />
				</PageContainer>
			</Wrapper>
		</>
	);
};

export default CommunityList;
