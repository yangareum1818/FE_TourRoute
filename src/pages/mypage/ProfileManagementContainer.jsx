import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { axiosTokenGet, axiosTokenPut } from 'utils/AxiosUtils';
import { Button, ButtonGroup } from 'components/common/Button';
import { useNavigate } from 'react-router-dom';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 4rem 4rem 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const ProfileInfoWrpper = styled.div`
	display: flex;
	align-items: center;
	gap & > * {
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
	flex: 3;
	padding: 0 2rem;
	height: 4rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoValueText = styled.span`
	flex: 3.4;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoChangeText = styled.span`
	color: #959696;
	font-size: 1.4rem;
	font-weight: 300;
`;

const ProfileManagementContainer = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: '',
		email: '',
		latest: '',
	});
	const { username, email, latest } = user;
	let LastChangeDate = latest.replace('T', ' ').split('.', 1).join('');

	const userInfo = useCallback(async () => {
		const data = await axiosTokenGet('/users/mypage');
		setUser(data);
	}, []);

	const onChange = e => {
		const { value, name } = e.target;

		setUser({
			...user,
			[name]: value,
		});
	};

	const onUpdateProfile = useCallback(async () => {
		const updateData = await axiosTokenPut('/users/update_mypage');
		setUser(updateData);

		console.log(updateData);
	}, []);

	useEffect(() => {
		userInfo();
	}, []);

	return (
		<>
			<MyProfileContent>
				<div style={{ display: 'flex', gap: '2rem' }}>
					<div style={{ flex: 1 }}>
						<label htmlFor="ex_file">
							<div className="btn_select">이미지 선택</div>
						</label>
						<input type="file" id="ex_file" accept="image/*" name="profile_img" />
					</div>
					<div style={{ flex: 4 }}>
						<ProfileInfoWrpper>
							<ProfileInfoTitle>이름</ProfileInfoTitle>
							<ProfileInfoValue
								name="username"
								defaultValue={username}
								required
								onChange={onChange}
							/>
						</ProfileInfoWrpper>
						<ProfileInfoWrpper>
							<ProfileInfoTitle>이메일</ProfileInfoTitle>
							<ProfileInfoValue name="email" defaultValue={email} onChange={onChange} />
						</ProfileInfoWrpper>
						<ProfileInfoWrpper>
							<ProfileInfoTitle>마케팅 수신동의</ProfileInfoTitle>
							<ProfileInfoValueText>수신거부</ProfileInfoValueText>
						</ProfileInfoWrpper>
					</div>
				</div>
				<ProfileInfoChangeText>최근 수정일 : {LastChangeDate}</ProfileInfoChangeText>
			</MyProfileContent>
			<ButtonGroup style={{ maxWidth: '40rem', margin: '0 auto', paddingTop: '4rem' }}>
				<Button text="프로필 수정 완료" $submit onClick={onUpdateProfile} />
				<Button text="취소" variant="cancel" />
			</ButtonGroup>
		</>
	);
};
export default ProfileManagementContainer;
