import React, { useState } from 'react';

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => {
		document.body.style.overflow = 'hidden';
		setIsOpen(isOpen);
		console.log('e 열렸다 open', setIsOpen(!isOpen), setIsOpen(true), !isOpen);
	};
	const onClickClose = () => {
		document.body.style.removeProperty = 'overflow';
		setIsOpen(false);
		console.log('e 닫힌다 close', setIsOpen(isOpen), isOpen);
	};

	return { isOpen, setIsOpen, open, onClickClose };
};
export default useModal;
