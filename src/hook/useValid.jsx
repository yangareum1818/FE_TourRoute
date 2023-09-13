import { useEffect, useState } from 'react';

// 리팩토링 해야하는 input 유효성 검사하기.
const useValid = changeValue => {
	const [validText, setValidText] = useState('');
	const [isValid, setIsValid] = useState({
		isEmail: false,
		isPassword: false,
		isPasswordCheck: false,
	});

	useEffect(() => {
		const expEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		if (!expEmail.test(changeValue.email)) {
			setValidText('이메일 형식을 다시 확인해주세요.');
			setIsValid({ ...isValid, isEmail: false });
		} else {
			setValidText('');
			setIsValid({ ...validText, isEmail: true });
		}
	}, [changeValue.email]);

	useEffect(() => {
		if (changeValue.password !== changeValue.passwordCheck) {
			setValidText('비밀번호가 일치하지 않습니다.');
			setIsValid({ ...isValid, isPasswordCheck: false });
		} else {
			setValidText('');
			setIsValid({ ...isValid, isPasswordCheck: true });
		}
	}, [changeValue.passwordCheck]);
};
export default useValid;
