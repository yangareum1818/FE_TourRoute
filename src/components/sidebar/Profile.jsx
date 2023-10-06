import styled from 'styled-components';
import dummyMyImage from '../../assets/Mask_group.svg';
import ManagementIcon from '../../assets/brightness_high.png';
import SidebarLayout from 'components/Layout/SidebarLayout';
import { Link, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { axiosTokenGet } from 'utils/AxiosUtils';

const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 24rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const MyImage = styled.img`
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
`;
const MyName = styled.span`
	margin-top: 1rem;
	font-size: 1.6rem;
	font-weight: 400;
	color: #000;
`;

const ProfileManagementInner = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding-top: 3rem;
`;

const ProfileManagementIcon = styled.img`
	width: 1.6rem;
	height: 1.6rem;
`;

const ProfileManagement = styled(Link)`
	color: #303133;
	font-size: 1.5rem;
	font-weight: 300;
`;

const Profile = () => {
	const [username, setUsername] = useState('');

	const userName = useCallback(async () => {
		const res = await axiosTokenGet('/users/mypage');
		console.log(res);

		setUsername(res.username);
	}, [setUsername]);

	useEffect(() => {
		userName();
	}, [userName]);

	// 프로필 편집 클릭시 holding
	const location = useLocation();
	const holding = location.pathname.includes('/management');

	return (
		<ProfileWrapper>
			<MyImage src={dummyMyImage} />
			<MyName>{username}</MyName>
			{holding === false ? (
				<ProfileManagementInner>
					<ProfileManagementIcon src={ManagementIcon} />
					<ProfileManagement to="/my/profile/management">프로필 관리</ProfileManagement>
				</ProfileManagementInner>
			) : null}
		</ProfileWrapper>
	);
};
export default Profile;
