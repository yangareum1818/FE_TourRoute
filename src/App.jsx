import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout/Layout';

//여행계획
import MainContainer from 'pages/mainpage/MainContainer';
import Plan from 'pages/planpage/Plan';
import PlanCheck from 'pages/planpage/plancheck/PlanCheck';
import PlanList from 'pages/planpage/PlanList/PlanList';
import MapLayOut from 'pages/planpage/planmap/MapLayOut';
// 로그인, 회원가입
import LoginContainer from 'pages/auth/LoginContainer';
import SignUpContainer from 'pages/auth/SignUpContainer';
import SignUpTermsContainer from 'pages/auth/SignUpTermsContainer';
import SignUpInfoInput from 'pages/auth/SignUpInfoInputContainer';
import SignUpCompleteContainer from 'pages/auth/SignUpCompleteContainer';
// 마이페이지
import PostContentsLayout from 'components/Layout/PostContentsLayout';
import ProfileContainer from 'pages/mypage/ProfileContainer';
import ProfileManagementContainer from 'pages/mypage/ProfileManagementContainer';
import RecordContainer from 'pages/mypage/RecordContainer';
import WishListContainer from 'pages/mypage/WishListContainer';
import WritingListContainer from 'pages/mypage/WritingListContainer';
import CommentContainer from 'pages/mypage/CommentContainer';
// 커뮤니티
import Community from './pages/community/Community';
import CommunityPost from 'pages/community/CommunityPost/CommunityPost';
import CommunityWrite from './pages/community/CommunityWrite/CommunityWrite';

import Info from 'pages/ info/Info';
import MainLayOut from './components/Layout/MainLayOut';
import Fastival from './pages/fastival/Fastival';
import FastivalPost from './pages/fastival/FastivalPost';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayOut />} />
				<Route element={<Layout />}>
					<Route path="/tourplaninfo" element={<Info />} />
					<Route path="/tourplan/" element={<Plan />}>
						<Route path="1" element={<PlanCheck />} />
						<Route path="2" element={<PlanList />} />
						<Route path="3/:day" element={<MapLayOut />} />
					</Route>
					<Route path="/login" element={<LoginContainer />} />
					{/* 회원가입 */}
					<Route path="/auth/signup" element={<SignUpContainer />} />
					<Route path="/auth/signup/terms" element={<SignUpTermsContainer />} />
					<Route path="/auth/signup/information" element={<SignUpInfoInput />} />
					<Route path="/auth/signup/complete" element={<SignUpCompleteContainer />} />
					{/* 마이페이지 */}
					<Route element={<PostContentsLayout text="마이페이지" />}>
						<Route path="/my/profile" element={<ProfileContainer />} />
						<Route path="/my/profile/management" element={<ProfileManagementContainer />} />
						<Route path="/my/record" element={<RecordContainer />} />
						<Route path="/my/wishlist" element={<WishListContainer />} />
						<Route path="/my/wrtiting" element={<WritingListContainer />} />
						<Route path="/my/comment" element={<CommentContainer />} />
					</Route>
					{/* 지역축제 */}
					<Route path="festival/:city" element={<Fastival />} />
					<Route path="festival/board/:id" element={<FastivalPost />} />
					{/* 커뮤니티 */}
					<Route path="/community" element={<Community />} />
					<Route path="/community/:postId" element={<CommunityPost />} />
					{/* /community/post=postId || /community/postId */}
					<Route path="/communitywrite" element={<CommunityWrite />} />

					{/* <Route element={<PostContentsLayout text="커뮤니티" />}>
						<Route path="/community" element={<Community />} />
						<Route path="/community/:postId" element={<CommunityPost />} />
					</Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
