import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from 'components/Layout/AuthLayout';
import Checkbox from 'components/common/CheckBox';
import Modal from 'components/common/Modal';
import { Button, ButtonGroup } from 'components/common/Button';
import { RightArrow } from 'components/common/Icon';
import useModal from 'hook/useModal';

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

const FormWrapper = styled.div``;
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
	const [allAgreementChecked, setAllAgreementChecked] = useState(false);
	const [agreementChecked, setAgreementChecked] = useState({
		term: false,
		privacy: false,
		marketing: false,
	});

	// 체크박스
	const checkedHandle = e => {
		const { name, checked } = e.target;

		setAgreementChecked(prevC => ({ ...prevC, [name]: checked }));
		const allChecked = Object.values({ ...agreementChecked, [name]: checked }).every(
			value => value === true,
		);

		setAllAgreementChecked(allChecked);
	};

	// 전체 체크박스
	const allCheckedHandle = e => {
		const { checked } = e.target;

		setAgreementChecked(prev =>
			Object.keys(prev).reduce(
				(newKey, key) => ({
					...newKey,
					[key]: checked,
				}),
				{},
			),
		);
		setAllAgreementChecked(checked);
	};

	// 다음 버튼 클릭 시
	const navigate = useNavigate();
	const { isOpen, open, onClickClose } = useModal();
	console.log(isOpen);
	const onClickNextHanle = () => {
		const { term, privacy } = agreementChecked;

		if (term && privacy === true) {
			console.log('이동한다.');
			navigate('/auth/signup/information');
		} else {
			console.log('열린다링이이이이잉');
			open();
		}
	};

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
				<FormWrapper onSubmit={onClickNextHanle}>
					<StepTitle>약관동의</StepTitle>

					<AuthContent>
						<CheckboxWrapper>
							<Checkbox
								id="all-check"
								name="all-check"
								text="전체 동의"
								htmlFor="all-check"
								checked={allAgreementChecked}
								onChange={allCheckedHandle}
							/>

							<Checkbox
								id="term"
								name="term"
								text="이용 약관 (필수)"
								htmlFor="term"
								checked={agreementChecked.term}
								onChange={checkedHandle}
							/>
							<Checkbox
								id="privacy"
								name="privacy"
								text="개인정보 수집 및 이용동의 (필수)"
								htmlFor="privacy"
								checked={agreementChecked.privacy}
								onChange={checkedHandle}
							/>
							<Checkbox
								id="marketing"
								name="marketing"
								text="마케팅 목적 수집 및 활용 동의 (선택)"
								htmlFor="marketing"
								checked={agreementChecked.marketing}
								onChange={checkedHandle}
							/>
						</CheckboxWrapper>
						<CheckDesc>
							개인정보의 수집, 제공 및 활용에 동의하지 않을 권리가 있으며, 미동의 시 서비스의 제공이
							제한될 수 있습니다.
						</CheckDesc>
					</AuthContent>

					<ButtonGroup>
						<Button text="다음" onClick={onClickNextHanle} />
						<Link to="/login">
							<Button text="취소" variant="cancel" />
						</Link>
					</ButtonGroup>
				</FormWrapper>
			</InnerWrapper>
			{isOpen && <Modal text="약관을 동의해 주세요." />}
		</AuthLayout>
	);
};
export default SignUpTermsContainer;
