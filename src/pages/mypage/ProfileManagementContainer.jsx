import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosTokenGet, axiosTokenPut } from 'utils/AxiosUtils';
import { Button, ButtonGroup } from 'components/common/Button';

import dummyMyImage from '../../assets/Mask_group.svg';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 4rem 4rem 3rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const ProfileInfoWrpper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
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
		img_link: dummyMyImage,
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

	// 프로필 이미지
	const [profileImage, setProfileImage] = useState(user.img_link);
	const profileImgFileInput = useRef(null);

	const profileChange = e => {
		if (e.target.files[0]) {
			setProfileImage(e.target.files[0]);
		} else {
			// 업로드 취소 시 기본 더미 이미지
			setProfileImage(user.profileImg);
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setProfileImage(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	// 프로필 수정 완료
	const onUpdateProfile = useCallback(async () => {
		const updateData = await axiosTokenPut('/users/update_mypage');
		setUser(updateData);

		// console.log(updateData);
	}, []);

	useEffect(() => {
		userInfo();
	}, []);

	return (
		<>
			<MyProfileContent>
				<div style={{ display: 'flex', gap: '3rem' }}>
					<div
						style={{
							flex: 0.9,
							display: 'flex',
							alignItems: 'center',
							borderRight: '.1rem solid #cfcfcf',
						}}
					>
						<label htmlFor="ex_file">
							<img
								style={{
									margin: '0 auto',
									display: 'block',
									width: '8rem',
									height: '8rem',
									borderRadius: '50%',
									cursor: 'pointer',
								}}
								src={profileImage}
								alt="proifle change"
								onClick={() => {
									profileImgFileInput.current.click();
								}}
							/>
							<input
								type="file"
								accept="image/*"
								onChange={profileChange}
								ref={profileImgFileInput}
								name="profile_img"
								style={{ display: 'none' }}
							/>
							<span
								style={{
									display: 'block',
									paddingTop: '1rem',
									fontSize: '1.3rem',
									fontWeight: '500',
									textAlign: 'center',
								}}
							>
								이미지 변경
							</span>
						</label>
					</div>
					<div style={{ flex: 4.4, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
