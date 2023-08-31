import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Overlay = styled.div`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
`;

export const ModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
`;

export const ModalShape = styled.div`
	width: 60rem;
	height: 20rem;
`;

export const ModalTextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 14rem;
	background: #fff;
	border-radius: 0.8rem 0.8rem 0 0;
`;

export const ModalText = styled.p`
	color: #303133;
	font-size: 1.6rem;
	font-weight: 500;
`;

export const ModalLink = styled(Link)`
	color: #959696;
	font-size: 1.5rem;
	text-decoration: underline;
`;

export const ModalCheckBtn = styled.button`
	width: 100%;
	height: 6rem;
	background: #3ad0ff;
	color: #fff;
	font-size: 1.6rem;
	font-weight: bold;
	text-align: center;
	border-radius: 0 0 0.8rem 0.8rem;
`;
