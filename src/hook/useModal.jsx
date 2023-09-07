import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useModal = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const open = () => {
		document.body.style.overflow = 'hidden';
		setIsOpen(isOpen);
		console.log('e 열렸다 open', setIsOpen(!isOpen), setIsOpen(true), !isOpen);
	};
	const onClickClose = () => {
		document.body.style.removeProperty = 'overflow';
		navigate(0);
		setIsOpen(false);
		console.log('e 닫힌다 close', setIsOpen(isOpen), isOpen);
	};

	return { isOpen, setIsOpen, open, onClickClose };
};
export default useModal;
