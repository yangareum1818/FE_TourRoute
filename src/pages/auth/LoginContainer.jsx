import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

import google from '../../assets/btn_google_signin_light_normal_web@2x.png';
import kakao from '../../assets/kakao_login_medium_narrow.png';

import { Button, ButtonGroup } from 'components/common/Button';
import { Input } from 'components/common/Input';
import { Title } from 'components/common/Title';

import Modal from 'components/common/Modal';
import useInput from 'hook/useInput';
import axios from 'axios';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 4rem;
	max-width: 76rem;
	width: 100%;
	padding: 8rem 0 13rem;
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

const FormWrapper = styled.form``;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const RegisterLink = styled(Link)`
	display: inline-block;
	margin: 1rem 0 2rem;
	width: 100%;
	font-size: 1.4rem;
	text-align: center;
`;

const LoginContainer = () => {
	const [email, setEmail] = useInput('');
	const [password1, setPassword1] = useInput('');
	const onSubmit = useCallback(e => {
		e.preventdefault();
		console.log('hi');

		axios
			.post('http://13.209.56.221:8000/users/login', {
				email: email,
				password: password1,
			})
			.then(e => {
				console.log(e);
			});
	}, []);

	return (
		<Wrapper>
			<Title text="로그인" />
			<InnerWrapper>
				<SocialWrapper>
					<GoogleLoginBtn />
					<KakaoLoginBtn />
				</SocialWrapper>
				<Line />
				<FormWrapper onSubmit={onSubmit}>
					<InputWrapper>
						<Input
							type="email"
							defaultValue={email}
							placeholder="이메일을 입력하세요."
							onChange={setEmail}
							required
						/>
						<Input
							type="password"
							value={password1}
							onChange={setPassword1}
							placeholder="비밀번호를 입력하세요."
							required
						/>
					</InputWrapper>
					<RegisterLink to="/auth/signup">회원가입</RegisterLink>
					<Button $submit text="로그인" />
				</FormWrapper>
			</InnerWrapper>

			{/* 로그인 실패 시 모달 */}
			{/* <Modal text="텍스트" /> */}
		</Wrapper>
	);
};
export default LoginContainer;
