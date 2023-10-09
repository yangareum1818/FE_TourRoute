import { Button, ButtonGroup } from 'components/common/Button';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosTokenGet } from 'utils/AxiosUtils';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 3rem 4rem 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const ProfileInfoWrpper = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	& > * {
		font-size: 1.6rem;
	}
`;
const ProfileInfoTitle = styled.label`
	flex: 1;
	color: #000;
	font-weight: 400;
	white-space: nowrap;
`;
const ProfileInfoValue = styled.input`
	flex: 4;
	padding: 0 2rem;
	height: 4rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoValueText = styled.span`
	flex: 4.4;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoChangeText = styled.span`
	color: #959696;
	font-size: 1.4rem;
	font-weight: 300;
`;

const ProfileChangeBtn = styled.button`
	position: absolute;
	right: 2rem;
	top: 1.2rem;
	color: #3ad0ff;
	font-size: 1.6rem;
	font-weight: 700;
`;

const ProfileManagementContainer = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		latest: '',
	});
	const { username, email, latest } = user;
	const LastChangeDate = latest.replace('T', ' ').split('.', 1);

	// 사용자 정보 불러오기.
	const userInfo = useCallback(async () => {
		const res = await axiosTokenGet('/users/mypage');
		console.log('res', res);

		setUser(res);
	}, [setUser]);

	useEffect(() => {
		userInfo();
	}, [userInfo]);

	// 수정 버튼 클릭시
	const ProfileValueChange = () => {};

	/**
	 * 프로필 수정 완룔 버튼 클릭 시
	 * 조건
	 * 1. input값이 비었을 경우.
	 * 2. DB와 동일한 이메일이 있을 경우.
	 */
	const onChangeCompleted = useCallback(async () => {
		// await axios.put('users/update_mypage', user,)
	}, []);

	return (
		<>
			<MyProfileContent>
				<ProfileInfoWrpper>
					<ProfileInfoTitle>이름</ProfileInfoTitle>
					<ProfileInfoValue disabled value={username} />
					<ProfileChangeBtn onClick={ProfileValueChange}>수정</ProfileChangeBtn>
				</ProfileInfoWrpper>
				<ProfileInfoWrpper>
					<ProfileInfoTitle>이메일</ProfileInfoTitle>
					<ProfileInfoValue disabled value={email} />
					<ProfileChangeBtn>수정</ProfileChangeBtn>
				</ProfileInfoWrpper>
				<ProfileInfoWrpper>
					<ProfileInfoTitle>마케팅 수신동의</ProfileInfoTitle>
					<ProfileInfoValueText>수신거부</ProfileInfoValueText>
				</ProfileInfoWrpper>
				<ProfileInfoChangeText>최근 수정일 : {LastChangeDate}</ProfileInfoChangeText>
			</MyProfileContent>
			<ButtonGroup style={{ maxWidth: '40rem', margin: '0 auto', paddingTop: '4rem' }}>
				<Button $submit text="프로필 수정 완료" />
				<Button text="취소" variant="cancel" />
			</ButtonGroup>
		</>
	);
};
export default ProfileManagementContainer;
