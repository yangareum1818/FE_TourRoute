import React from 'react';
import {
	Overlay,
	ModalWrapper,
	ModalShape,
	ModalTextWrapper,
	ModalText,
	ModalLink,
	ModalCheckBtn,
} from './style';
import useModal from 'hook/useModal';

/**
 * 해야할 기능
 * 1. Modeal이 활성화 되었을 때, body에 overflow: hidden;
 * 2. 회원정보가 존재하지 않을 경우, a태그(회원가입하러가기)링크 추가 (삼항연산자)
 *
 * 모달 사용 시 ( ex) 로그인 회원가입 모달 에러 필요시 )
 * : 삼항연산자로 가져다 쓰면됌.
 * <Modal text={"ex) 회원정보가 존재하지 않습니다."} />
 */
const Modal = ({ text }) => {
	const { close } = useModal();

	return (
		<Overlay>
			<ModalWrapper>
				<ModalShape>
					<ModalTextWrapper>
						<ModalText>{text}</ModalText>

						{/* TEXT 테스트 용 */}
						{/* <ModalText>회원정보가 존재하지 않습니다.</ModalText> */}

						{/* 회원정보가 존재하지 않을 경우, 보여짐 */}
						{/* <ModalLink to="/auth/signup">간편 회원가입 하러가기</ModalLink> */}
					</ModalTextWrapper>
					<ModalCheckBtn onClick={close}>확인</ModalCheckBtn>
				</ModalShape>
			</ModalWrapper>
		</Overlay>
	);
};
export default Modal;
