import styled from 'styled-components';
import AuthLayout from 'components/Layout/AuthLayout';
import { RightArrow } from 'components/common/Icon';
import { Button, ButtonGroup } from 'components/common/Button';
import { ErrorMsg, Input } from 'components/common/Input';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'components/common/Modal';
import useInput from 'hook/useInput';
import { useCallback, useState } from 'react';
import axios from 'axios';

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40rem;
`;

const ProcedureTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const StepText = styled.span`
	color: #cfcfcf;
	font-size: 2.4rem;
	font-weight: 500;

	&.active {
		color: #000;
	}
`;

const FormWrapper = styled.form``;

const StepTitle = styled.p`
	display: block;
	padding-top: 3rem;
	color: #303133;
	font-size: 1.6rem;
	font-weight: 500;
`;

const AuthContent = styled.div`
	padding: 4rem 0;
`;

const AuthInfoContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const SignUpInfoInput = () => {
	const [username, setUsername] = useInput('');
	const [email, setEmail] = useInput('');
	const [password1, setPassword1] = useInput('');
	const [password2, setPassword2] = useInput('');

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const onChangeEamilCheck = useCallback(
		e => {
			const expEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
			setEmail(e.target.value);
			setEmailError(e.target.value !== expEmail.test(e.target.value));
			if (e.target.value === '') setEmailError(false);
		},
		[email],
	);

	// const onChangePasswordCheck = useCallback(
	// 	e => {
	// 		setPassword2(e.target.value);
	// 		setPasswordError(e.target.value !== password1);
	// 		if (e.target.value === '') setPasswordError(false);
	// 	},
	// 	[password1],
	// );

	const navigate = useNavigate();
	const onSubmit = useCallback(async e => {
		if (password1 !== password2) return setPasswordError(true);

		const userData = {
			username: username,
			email: email,
			password1: password1,
			password2: password2,
		};

		await axios
			.post('http://13.209.56.221:8000/users/signup', userData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(e => {
				console.log(e);
				navigate('/auth/signup/completes');
			});
	});

	return (
		<AuthLayout>
			<InnerWrapper>
				<ProcedureTitle>
					<StepText>약관동의</StepText>
					<RightArrow />
					<StepText className="active">정보입력</StepText>
					<RightArrow />
					<StepText>가입완료</StepText>
				</ProcedureTitle>

				<FormWrapper onSubmit={onSubmit}>
					<StepTitle>정보입력</StepTitle>

					<AuthContent>
						<AuthInfoContent>
							<div>
								<Input
									type="text"
									defaultValue={username}
									text="이름*"
									placeholder="이름을 입력해주세요."
									onChange={setUsername}
									required
								/>
							</div>
							<div>
								<Input
									type="email"
									defaultValue={email}
									text="이메일*"
									placeholder="ID@gmail.com"
									onChange={setEmail}
									required
								/>
								{emailError && <ErrorMsg errmsg="이메일 형식을 다시 확인해주세요." />}
							</div>
							<div>
								<Input
									type="password"
									defaultValue={password1}
									text="비밀번호*"
									placeholder="영문, 숫자, 특수문자 2가지 조합 8~15자"
									onChange={setPassword1}
								/>
							</div>
							<div>
								<Input
									type="password"
									defaultValue={password2}
									text="비밀번호 확인*"
									placeholder="비밀번호를 한번 더 입력해주세요."
									onChange={setPassword2}
								/>
								{passwordError && <ErrorMsg errmsg="비밀번호가 일치하지 않습니다." />}
							</div>
						</AuthInfoContent>
					</AuthContent>

					<ButtonGroup>
						<Button $submit text="다음" />
						<Link to="/login">
							<Button text="취소" variant="cancel" />
						</Link>
					</ButtonGroup>
				</FormWrapper>
				{/* <Modal text="필수 항목을 입력해주세요." /> */}
			</InnerWrapper>
		</AuthLayout>
	);
};
export default SignUpInfoInput;
