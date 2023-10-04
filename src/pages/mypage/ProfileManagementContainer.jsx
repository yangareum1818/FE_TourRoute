import { Button, ButtonGroup } from 'components/common/Button';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosTokenGet } from 'utils/AxiosUtils';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 4rem 4rem 2rem;
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
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [changeData, setChangeData] = useState('');

	const userInfo = useCallback(async () => {
		const res = await axiosTokenGet('/users/mypage');
		console.log('res', res);

		setUsername(res.username);
		setEmail(res.email);
		setChangeData(res.latest);
	}, [setEmail, setUsername, setChangeData]);

	useEffect(() => {
		userInfo();
	}, [userInfo]);

	const ProfileValueChange = () => {
		return <ProfileInfoValue value={username} />;
	};

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
				<ProfileInfoChangeText>최근 수정일 : {changeData}</ProfileInfoChangeText>
			</MyProfileContent>
			<ButtonGroup style={{ maxWidth: '40rem', margin: '0 auto', paddingTop: '4rem' }}>
				<Button text="프로필 수정 완료" />
				<Button text="취소" variant="cancel" />
			</ButtonGroup>
		</>
	);
};
export default ProfileManagementContainer;
