import styled from 'styled-components';
import { Link } from 'react-router-dom';

import google from '../../assets/btn_google_signin_light_normal_web@2x.png';
import kakao from '../../assets/kakao_login_medium_narrow.png';

import { Button } from 'components/common/Button';
import AuthLayout from 'components/Layout/AuthLayout';

const DescText = styled.p`
	padding-bottom: 2rem;
	font-size: 1.6rem;
	text-align: center;
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40rem;
`;

const SocialWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const GoogleLoginBtn = styled.a`
	width: 18.3rem;
	height: 4.4rem;
	background-image: url(${google});
	cursor: pointer;
`;
const KakaoLoginBtn = styled.a`
	width: 18.3rem;
	height: 4.4rem;
	background-image: url(${kakao});
	cursor: pointer;
`;

const Line = styled.hr`
	position: relative;
	margin: 4rem 0;
	width: 100%;
	height: 0.1rem;
	background: #cfcfcf;
	border: 0;

	&::before {
		content: '또는';
		display: block;
		width: 6.8rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		background: #fff;
		color: #cfcfcf;
		font-size: 1.5rem;
		text-align: center;
	}
`;

const SignUpContainer = () => {
	return (
		<AuthLayout>
			<DescText>
				쉽고 편리하게 회원가입해 보세요!
				<br />
				기존 사용 계정으로 간편하게 가입하고, 투어라우트의 다양한 혜택을 누려보세요.
			</DescText>
			<InnerWrapper>
				<SocialWrapper>
					<GoogleLoginBtn />
					<KakaoLoginBtn />
				</SocialWrapper>
				<Line />
				<Link to="/auth/signup/terms">
					<Button type="button" text="ID/PW 간편 회원가입" />
				</Link>
			</InnerWrapper>
		</AuthLayout>
	);
};
export default SignUpContainer;
