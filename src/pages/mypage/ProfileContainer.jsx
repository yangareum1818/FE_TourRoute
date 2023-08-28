import styled from 'styled-components';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3.1rem;
	padding: 4rem 4rem 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const ProfileInfoWrpper = styled.div`
	display: flex;

	& > * {
		font-size: 1.6rem;
	}
`;
const ProfileInfoTitle = styled.span`
	flex: 1;
	color: #000;
	font-weight: 400;
`;
const ProfileInfoValue = styled.span`
	flex: 4;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoChangeText = styled.span`
	color: #959696;
	font-size: 1.4rem;
	font-weight: 300;
`;

const ProfileContainer = () => {
	return (
		<MyProfileContent>
			<ProfileInfoWrpper>
				<ProfileInfoTitle>이름</ProfileInfoTitle>
				<ProfileInfoValue>홍길동</ProfileInfoValue>
			</ProfileInfoWrpper>
			<ProfileInfoWrpper>
				<ProfileInfoTitle>이메일</ProfileInfoTitle>
				<ProfileInfoValue>hong-gildong@gmail.com</ProfileInfoValue>
			</ProfileInfoWrpper>
			<ProfileInfoWrpper>
				<ProfileInfoTitle>마케팅 수신동의</ProfileInfoTitle>
				<ProfileInfoValue>수신거부</ProfileInfoValue>
			</ProfileInfoWrpper>
			<ProfileInfoChangeText>최근 수정일 : 2023-08-14</ProfileInfoChangeText>
		</MyProfileContent>
	);
};
export default ProfileContainer;
