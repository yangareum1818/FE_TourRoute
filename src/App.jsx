import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
//여행계획
import MainContainer from 'pages/mainpage/MainContainer';
import LoginContainer from 'pages/auth/LoginContainer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainContainer />}>
						메인 페이지
					</Route>
					<Route path="/login" element={<LoginContainer />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
