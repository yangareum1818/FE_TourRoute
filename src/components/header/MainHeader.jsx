import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import barcord from 'assets/barcord.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import Logo from 'assets/logo.svg';
import SerchLogo from 'assets/serch_logo.svg';
import { useSelector } from 'react-redux';
import { DatePicker, InputNumber, Select, Tour } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { FaX } from 'react-icons/fa6';
import { axiosTokenGet } from 'utils/AxiosUtils';
import { useDispatch } from 'react-redux';
import { Info } from 'store/UserInfo';
import { tour } from 'store/PostRedux';
const WrapperContainer = styled.div`
	padding-bottom: 5rem;
	margin: 0 auto;
	max-width: 1080px;
`;
//header
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 0;
`;
const LogoContainer = styled.h1`
	background: transparent;
`;
const LogoImg = styled.img`
	width: 13rem;
	height: 2rem;
	cursor: pointer;
`;
const NavBar = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;
`;
const Category = styled.li`
	cursor: pointer;

	& > * {
		font-size: 1.6rem;
		font-weight: 400;
		color: #fff;
	}
`;
//section
const WrapperDiv = styled.div`
	width: 100%;
`;
const SerchText = styled.div`
	font-size: 48px;
	font-weight: bold;
	text-align: right;
	margin: 2rem 0;
	color: white;
`;
const SpanColor = styled.span`
	color: #3ad0ff;
`;
const SerchContainer = styled.div`
	border: 0.5px solid grey;
	border-radius: 8px;
	background: white;
`;
const SerchBarHeader = styled.div`
	background: #3ad0ff;
	text-align: center;
	border-radius: 8px 8px 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 0;
`;
const LogoHeader = styled.img`
	width: 7rem;
	height: 2rem;
`;
const SerchBarSection = styled.div`
	padding: 2rem 2rem;
`;
const BarcordContainer = styled.div`
	margin-bottom: 2rem;
`;
const SerchBarInput = styled.div`
	display: grid;
	grid-template-columns: 18rem 26rem 12rem 18rem 16rem;
	grid-template-rows: 4rem;
	gap: 2rem;
	padding-left: 1rem;
`;
const UserInput = styled.div`
	display: flex;
	align-items: center;
	background: #f2f6f9;
	padding: 0 0.3rem;
	border-radius: 8px;
	font-size: 16px;
	color: #959696;

	& > * {
		border: 0;
		background: transparent;
	}
`;

const InputDiv = styled.div`
	& > * {
		width: 5rem;
		border: 0;
		background: transparent;

		input:focus {
			outline: none;
		}
	}
`;
const InputIcon = styled.div`
	color: #3ad0ff;
	margin-left: 0.5rem;
`;
const InputId = styled.input`
	border: 0;
	background: transparent;
	font-size: 16px;
`;
const ResultContainer = styled.div`
	background: #3ad0ff;
	color: white;
	padding: 1rem 3rem;
	border-radius: 8px;
	font-size: 16px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const TourPlayerDiv = styled.div`
	text-align: center;
`;
const TourPlayer = styled.div`
	font-size: 16px;
`;
const TourPlayerListDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #959696;
	padding: 3rem;
`;
const PeopleList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 4rem;
	width: auto;
	gap: 8rem;
`;
const DeletBtn = styled.div``;
const MainHeader = () => {
	const navigate = useNavigate();
	const [Token, setToken] = useState(null);
	const [UserId, setUserId] = useInput('');
	const [UserList, setUserList] = useState([]);
	const [Loading, setLoading] = useState(false);

	const [LocalName, setLocalName] = useState('대구');
	const [StartDate, setStartDate] = useState(null);
	const [FinishDate, setFinishDate] = useState(null);
	const [People, setPeople] = useState(1);
	const { RangePicker } = DatePicker;
	const name = useSelector(state => state.Info);
	const dispatch = useDispatch();

	const UserInfo = useCallback(async () => {
		if (window.localStorage.getItem('token')) {
			const res = await axiosTokenGet('/users/mypage');
			dispatch(Info({ name: res.username, email: res.email, modify: res.latest }));
			setLoading(true);
		} else {
			console.log('로그인을 하셔야합니다.');
		}
	}, [dispatch]);
	const HandleLogout = useCallback(() => {
		setToken(window.localStorage.removeItem('token'));
	}, []);
	const HandlePage = useCallback(() => {
		dispatch(
			tour({
				LocalName: LocalName,
				StartDate: StartDate,
				FinishDate: FinishDate,
				People: People,
				UserList: UserList,
			}),
		);
		navigate('/tourplan/1');
	}, [dispatch, LocalName, StartDate, FinishDate, People, UserList, navigate]);
	const handleDel = useCallback(
		e => {
			UserList.splice(UserList.indexOf(e), 1);
			setUserList([...UserList]);
		},
		[UserList],
	);
	const handleKeyEnter = e => {
		if (e.key === 'Enter') {
			handlepeople(e);
		}
	};
	const handleDate = e => {
		const [start, finish] = e;
		console.log(start.$d.toLocaleDateString());
		setStartDate(start.$d.toLocaleDateString().trim());
		setFinishDate(finish.$d.toLocaleDateString().trim());
	};
	const handlepeople = useCallback(
		async e => {
			const res = await axiosTokenGet(`/users/get-user/${e.target.value}`);
			console.log(res);
			setUserList([...UserList, UserId]);
		},
		[UserId, UserList],
	);
	useEffect(() => {
		UserInfo();
		setToken(window.localStorage.getItem('token'));
	}, [setToken]);
	return (
		<WrapperContainer>
			<Wrapper>
				<LogoContainer>
					<Link to="/">
						<LogoImg src={Logo} />
					</Link>
				</LogoContainer>
				<NavBar>
					<Category>
						<Link to="/tourplan/1">여행계획</Link>
					</Category>
					<Category>
						<Link to="/festival">지역축제</Link>
					</Category>
					<Category>
						<Link to="/community">커뮤니티</Link>
					</Category>
					<Category>
						<Link to="/tourplanInfo">투어라우트</Link>
					</Category>
				</NavBar>
				{Token ? (
					<NavBar>
						<Category style={{ color: '#959696' }}>
							<Link to="/" onClick={HandleLogout}>
								로그아웃
							</Link>
						</Category>
						<Category style={{ color: '#959696' }}>
							<Link to="/my/profile">마이페이지</Link>
						</Category>
					</NavBar>
				) : (
					<NavBar>
						<Category style={{ color: '#959696' }}>
							<Link to="/login">로그인</Link>
						</Category>
						<Category style={{ color: '#959696' }}>
							<Link to="/auth/signup">회원가입</Link>
						</Category>
					</NavBar>
				)}
			</Wrapper>
			<WrapperDiv>
				<SerchText>
					어디로 <SpanColor>여행</SpanColor> 가고 싶어요?
				</SerchText>
				<SerchContainer>
					<SerchBarHeader>
						<LogoHeader src={SerchLogo} alt="로고" />
					</SerchBarHeader>
					<SerchBarSection>
						<BarcordContainer>
							<img src={barcord} alt="바코드" />
						</BarcordContainer>
						<SerchBarInput>
							<UserInput>
								<div>
									목적지
									<Select
										defaultValue="대구광역시"
										onChange={e => setLocalName(e)}
										options={[
											{
												value: '대구',
												label: '대구광역시',
											},
											{
												value: '부산',
												label: '부산광역시',
											},
											{
												value: '경주',
												label: '경주시',
											},
											{
												value: '포항',
												label: '포항시',
											},
										]}
									/>
								</div>
								<InputIcon>
									<FaMapMarkerAlt />
								</InputIcon>
							</UserInput>
							<UserInput>
								<div style={{ marginRight: '1rem' }}>
									<RangePicker onChange={e => handleDate(e)} />
								</div>
								<InputIcon>
									<FaCalendarAlt />
								</InputIcon>
							</UserInput>
							<UserInput>
								<InputDiv>
									인원 <InputNumber defaultValue="1" onChange={e => setPeople(e)} />
								</InputDiv>
								<InputIcon>
									<FaUserFriends />
								</InputIcon>
							</UserInput>
							<UserInput>
								<InputId
									type="text"
									placeholder="동행인 아이디 입력"
									value={UserId}
									onChange={setUserId}
									onKeyPress={handleKeyEnter}
								/>
							</UserInput>
							<ResultContainer onClick={HandlePage}>추천 경로 찾기</ResultContainer>
						</SerchBarInput>
					</SerchBarSection>
					<TourPlayerDiv>
						<TourPlayer>
							<div>
								<p style={{ color: '#3AD0FF', fontWeight: 'bold' }}>나</p>
								<TourPlayerListDiv>
									{Loading ? (
										<PeopleList>
											<li>{name.user.email}</li>
											<li>{name.user.name}</li>
										</PeopleList>
									) : (
										''
									)}
								</TourPlayerListDiv>
							</div>
							<div>
								<p style={{ color: '#3AD0FF', fontWeight: 'bold' }}>동행인 목록</p>
								<TourPlayerListDiv>
									{UserList.map((e, index) => {
										return (
											<PeopleList key={index}>
												<div>{e}</div>
												<DeletBtn>
													<FaX onClick={() => handleDel(e)} />
												</DeletBtn>
											</PeopleList>
										);
									})}
								</TourPlayerListDiv>
							</div>
						</TourPlayer>
					</TourPlayerDiv>
				</SerchContainer>
			</WrapperDiv>
		</WrapperContainer>
	);
};

export default MainHeader;
