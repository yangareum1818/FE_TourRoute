import styled from 'styled-components';
import AuthLayout from 'components/Layout/AuthLayout';
import { RightArrow } from 'components/common/Icon';
import { Button, ButtonGroup } from 'components/common/Button';
import { Input } from 'components/common/Input';
import { Link } from 'react-router-dom';
import Modal from 'components/common/Modal';

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

				<FormWrapper>
					<StepTitle>정보입력</StepTitle>

					<AuthContent>
						<AuthInfoContent>
							<Input type="text" text="이름*" placeholder="이름을 입력해주세요." />
							<Input type="email" text="이메일*" placeholder="ID@gmail.com" />
							<Input
								type="password"
								text="비밀번호*"
								placeholder="영문, 숫자, 특수문자 2가지 조합 8~15자"
							/>
							<Input
								type="password"
								text="비밀번호 확인*"
								placeholder="비밀번호를 한번 더 입력해주세요."
								error
								errmsg="비밀번호가 일치하지 않습닌다."
							/>
						</AuthInfoContent>
					</AuthContent>

					<ButtonGroup>
						<Link to="/auth/signup/complete">
							<Button type="button" text="다음" />
						</Link>
						<Link to="/login">
							<Button type="button" text="취소" variant="cancel" />
						</Link>
					</ButtonGroup>
				</FormWrapper>
				{/* <Modal text="필수 항목을 입력해주세요." /> */}
			</InnerWrapper>
		</AuthLayout>
	);
};
export default SignUpInfoInput;
