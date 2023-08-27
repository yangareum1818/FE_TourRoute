import styled from 'styled-components';
import ProfileManagementIcon from '../../assets/brightness_high.png';
import dummyMyImage from '../../assets/Mask_group.svg';
import SidebarLayout from 'components/Layout/SidebarLayout';

const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4.2rem 8.5rem 3.4rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const MyImage = styled.img`
	width: 8rem;
	height: 8rem;
	/* background: #000; */
	border-radius: 50%;
`;
const MyName = styled.span`
	margin-top: 1.3rem;
	font-size: 1.6rem;
	font-weight: 400;
	color: #000;
`;

const ProfileManagement = styled.span`
	position: relative;
	display: block;
	margin-top: 3rem;
	color: #303133;
	font-size: 1.5rem;
	font-weight: 300;
`;

const Profile = () => {
	return (
		<SidebarLayout>
			<ProfileWrapper>
				<MyImage src={dummyMyImage} />
				<MyName>홍길동</MyName>
				<ProfileManagement>프로필 관리</ProfileManagement>
			</ProfileWrapper>
		</SidebarLayout>
	);
};
export default Profile;
