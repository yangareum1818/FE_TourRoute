import React from 'react';
import styled from 'styled-components';
import Logoimage from 'assets/logo.png';
import GitIcon from 'assets/github-mark.png';
const Wrapper = styled.div`
	background: transparent;
	border-top: 2px solid black;
`;
const HeaderFooter = styled.div`
	margin: 3rem 0;
`;
const Logo = styled.img`
	width: 200px;
	height: 28px;
`;
const LogoTitle = styled.p`
	font-size: 16px;
	color: #959696;
`;
const IntroduceContainer = styled.div`
	border-top: 1px solid #cfcfcf;
`;
const UserUl = styled.div`
	display: flex;
	list-style-type: none;
	font-size: 16px;
`;
const FooterLastContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const MakeDate = styled.span`
	color: #cfcfcf;
`;
const DelvelopSpan = styled.span`
	color: #3ad0ff;
	margin-left: 1rem;
	font-weight: bold;
`;
const Icon = styled.img`
	margin: 0 1rem;
`;
const FooterTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	color: #959696;
	margin-top: 1rem;
`;
const FooterSubTitle = styled.div`
	text-align: right;
	color: #959696;
`;
const Footer = () => {
	return (
		<Wrapper>
			<HeaderFooter>
				<Logo src={Logoimage} />
				<LogoTitle>여행을 더 간편하게, 투어라우트</LogoTitle>
			</HeaderFooter>
			<IntroduceContainer>
				<FooterTitle>투어라우트 소개</FooterTitle>
				<FooterSubTitle>지역 맞춤 여행지 큐레이션 서비스</FooterSubTitle>
				<FooterLastContainer>
					<div>
						<UserUl>
							<li>
								<DelvelopSpan style={{ margin: 0 }}>FE</DelvelopSpan>
								<span>
									<Icon src={GitIcon} alt="아이콘" />
									전병규
									<Icon src={GitIcon} alt="아이콘" />
									양아름
								</span>
							</li>
							<li>
								<DelvelopSpan> BE</DelvelopSpan>
								<Icon src={GitIcon} alt="아이콘" /> 김형진
								<Icon src={GitIcon} alt="아이콘" />
								류재문{' '}
							</li>
							<li>
								<DelvelopSpan> UIUX</DelvelopSpan>
								<Icon src={GitIcon} alt="아이콘" /> 김소정
							</li>
						</UserUl>
					</div>
					<MakeDate>Copyright 2023 투어라우트팀 all rights reserved.</MakeDate>
				</FooterLastContainer>
			</IntroduceContainer>
		</Wrapper>
	);
};

export default Footer;
