import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import React, { useCallback, useState } from 'react';

import google from '../../assets/btn_google_signin_light_normal_web@2x.png';
import kakao from '../../assets/kakao_login_medium_narrow.png';

import { Button } from 'components/common/Button';
import { ErrorMsg, Input } from 'components/common/Input';
import { Title } from 'components/common/Title';

import Modal from 'components/common/Modal';
// import useInput from 'hook/useInput';
import axios from 'axios';
import useModal from 'hook/useModal';

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
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [password1, setPassword1] = useState('');
	const [passwordExpError, setPasswordExpError] = useState(false);

	const { isOpen, open } = useModal();

	const onChangeEamilCheck = useCallback(
		e => {
			const expEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
			setEmail(e.target.value);
			setEmailError(!expEmail.test(email));
			if (e.target.value === '') {
				setEmailError(false);
			}
		},
		[email],
	);

	const onChangePasswordExp = useCallback(
		e => {
			const expPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
			setPassword1(e.target.value);
			setPasswordExpError(!expPassword.test(password1));
			if (e.target.value === '') {
				setPasswordExpError(false);
			}
		},
		[password1],
	);

	const navigate = useNavigate();
	const onSubmit = useCallback(
		async e => {
			e.preventDefault();
			console.log('hi');

			await axios
				.post(`http://13.209.56.221:8000/users/login?email=${email}&password=${password1}`)
				.then(res => {
					console.log(res);
					localStorage.setItem('token', res.data.access_token);
					const config = {
						headers: {
							Authorization: `${localStorage.getItem('token')}`,
						},
					};
					navigate('/');
					axios
						.get('/', config)
						.then(res => {
							console.log(res.data);
							alert(email + '님 환영합니다.');
						})
						.catch(err => console.log(err));
				})
				.catch(e => {
					console.error(e);
				});
		},
		[email, password1],
	);

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
						<div>
							<Input
								type="email"
								value={email}
								placeholder="이메일을 입력하세요."
								onChange={onChangeEamilCheck}
								required
							/>
							{emailError && <ErrorMsg errmsg="이메일 형식을 다시 확인해주세요." />}
						</div>
						<div>
							<Input
								type="password"
								defaultValue={password1}
								onChange={onChangePasswordExp}
								placeholder="비밀번호를 입력하세요."
								required
							/>
							{passwordExpError && (
								<ErrorMsg errmsg="비밀번호 조합은 영문, 숫자, 특수문자 조합 8~15자 입니다." />
							)}
						</div>
					</InputWrapper>
					<RegisterLink to="/auth/signup">회원가입</RegisterLink>
					<Button $submit text="로그인" />
				</FormWrapper>
			</InnerWrapper>

			{isOpen && <Modal text="회원정보가 일치하지 않습니다." />}
			{/* 로그인 실패 시 모달 */}
			{/* <Modal text="텍스트" /> */}
		</Wrapper>
	);
};
export default LoginContainer;
