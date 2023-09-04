import styled from 'styled-components';
import AuthLayout from 'components/Layout/AuthLayout';
import { RightArrow } from 'components/common/Icon';
import { Button } from 'components/common/Button';
import { Link } from 'react-router-dom';

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
const StepText = styled.p`
	color: #cfcfcf;
	font-size: 2.4rem;
	font-weight: 500;

	&.active {
		color: #000;
	}
`;

const StepTitle = styled.span`
	display: block;
	padding-top: 3rem;
	color: #303133;
	font-size: 1.6rem;
	font-weight: 500;
`;

const AuthContent = styled.div`
	padding: 4rem 0;
`;

const AuthComplete = styled.p`
	font-size: 2.4rem;
	font-weight: 500;

	strong {
		font-weight: 700;
	}
`;

const AuthCompleteDesc = styled.p`
	margin-top: 2.5rem;
	font-size: 1.6rem;
	font-weight: 300;
`;

const SignUpCompleteContainer = () => {
	return (
		<AuthLayout>
			<InnerWrapper>
				<ProcedureTitle>
					<StepText>약관동의</StepText>
					<RightArrow />
					<StepText>정보입력</StepText>
					<RightArrow />
					<StepText className="active">가입완료</StepText>
				</ProcedureTitle>

				<StepTitle>가입완료</StepTitle>

				<AuthContent>
					<AuthComplete>
						안녕하세요 🙌 <strong>홍길동</strong>님!
					</AuthComplete>
					<AuthCompleteDesc>회원가입이 정상적으로 완료되었습니다.</AuthCompleteDesc>
				</AuthContent>

				<Link to="/">
					<Button text="다음" />
				</Link>
			</InnerWrapper>
		</AuthLayout>
	);
};
export default SignUpCompleteContainer;
