import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout/Layout';

//여행계획
import MainContainer from 'pages/mainpage/MainContainer';

// 로그인, 회원가입
import LoginContainer from 'pages/auth/LoginContainer';
import SignUpContainer from 'pages/auth/SignUpContainer';
import SignUpTermsContainer from 'pages/auth/SignUpTermsContainer';
import SignUpInfoInput from 'pages/auth/SignUpInfoInputContainer';
import SignUpCompleteContainer from 'pages/auth/SignUpCompleteContainer';
import ProfileContainer from 'pages/mypage/ProfileContainer';
import RecordContainer from 'pages/mypage/RecordContainer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainContainer />}>
						메인 페이지
					</Route>

					{/* 로그인 */}
					<Route path="/login" element={<LoginContainer />} />

					{/* 회원가입 */}
					<Route path="/auth/signup" element={<SignUpContainer />} />
					<Route path="/auth/signup/terms" element={<SignUpTermsContainer />} />
					<Route path="/auth/signup/information" element={<SignUpInfoInput />} />
					<Route path="/auth/signup/complete" element={<SignUpCompleteContainer />} />

					{/* 마이페이지 */}
					<Route path="/my/profile" element={<ProfileContainer />} />
					<Route path="/my/record" element={<RecordContainer />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
