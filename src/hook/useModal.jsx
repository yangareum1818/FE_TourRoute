const { useState } = require('react');

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => {
		console.log('열렸다. open');
		setIsOpen(true);
	};

	const close = () => {
		console.log('닫힌다 close');
		setIsOpen(false);
	};

	return { isOpen, setIsOpen, open, close };
};
export default useModal;
