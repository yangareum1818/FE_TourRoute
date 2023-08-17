import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'components/common/Button';
import AuthLayout from 'components/Layout/AuthLayout';
import Modal from 'components/common/Modal';
import { RightArrow } from 'components/common/Icon';
import Checkbox from 'components/common/CheckBox';

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

const CheckDesc = styled.p`
	margin-top: 2rem;
	color: #000;
	font-size: 1.4rem;
	font-weight: 300;
`;

const CheckboxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-bottom: 2rem;
	border-bottom: 0.1rem solid #cfcfcf;
`;

const SignUpTermsContainer = () => {
	const [term, setTerm] = useState(false);
	const onChangeTerm = useCallback(e => {
		console.log('e', e.target);
		setTerm(e.target.checked);
	}, []);

	return (
		<AuthLayout>
			<InnerWrapper>
				<ProcedureTitle>
					<StepText className="active">약관동의</StepText>
					<RightArrow />
					<StepText>정보입력</StepText>
					<RightArrow />
					<StepText>가입완료</StepText>
				</ProcedureTitle>

				<FormWrapper>
					<StepTitle>약관동의</StepTitle>

					<AuthContent>
						<CheckboxWrapper>
							<Checkbox
								checked={term}
								onChange={onChangeTerm}
								htmlFor="all-check"
								id="all-check"
								name="all-check"
								text="전체 동의"
							/>

							<Checkbox text="이용 약관 (필수)" />
							<Checkbox text="개인정보 수집 및 이용동의 (필수)" />
							<Checkbox text="마케팅 목적 수집 및 활용 동의 (선택)" />
						</CheckboxWrapper>
						<CheckDesc>
							개인정보의 수집, 제공 및 활용에 동의하지 않을 권리가 있으며, 미동의 시 서비스의 제공이
							제한될 수 있습니다.
						</CheckDesc>
					</AuthContent>

					<ButtonGroup>
						<Button type="button" text="다음" to="/auth/signup/information" />
						<Button type="button" text="취소" to="/login" variant="cancel" />
					</ButtonGroup>
				</FormWrapper>
			</InnerWrapper>
			{/* <Modal text="약관을 동의해 주세요." /> */}
		</AuthLayout>
	);
};
export default SignUpTermsContainer;
