import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/Logo5.svg';
import barcord from 'assets/barcord.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import { DatePicker, InputNumber, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from 'hooks/useInput';
import { FaX } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
const SerchContainer = styled.div`
	border: 0.5px solid grey;
	border-radius: 8px;
	background: white;
`;
const SerchBarHeader = styled.div`
	background: #303133;
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
	grid-template-columns: 19rem 30rem 12rem 18rem 16rem;
	grid-template-rows: 4rem;
	gap: 2rem;
	padding-left: 1rem;
`;
const UserInput = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f2f6정f9;
	padding: 1rem;
	border-radius: 8px;
	font-size: 16px;
	color: #959696;

	& > * {
		border: 0;
		background: transparent;
	}
`;

const PeopleNum = styled.div`
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
`;
const InputId = styled.input`
	border: 0;
	font-size: 16px;
	width: 100%;
	color: olive;
	&:focus {
		outline: none;
	}
`;
const ResultContainer = styled.div`
	background: #cfcfcf;
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
const NextBtn = styled.div`
	background-color: #3ad0ff;
	width: 40rem;
	height: 6rem;
	margin: 3rem auto;
	border-radius: 8px;
	border: 0;
	text-align: center;
	display: flex;
	justify-content: center;
	cursor: pointer;
	align-items: center;
`;
const NextText = styled.span`
	color: white;
	font-size: 16px;
	font-weight: bold;
`;
const DeletBtn = styled.div``;
const PlanCheck = () => {
	const navigate = useNavigate();
	const [UserId, setUserId] = useInput('');
	const [UserList, setUserList] = useState([]);
	const dispatch = useDispatch();
	const count = useSelector(state => state.reducer.count);
	const { RangePicker } = DatePicker;

	const handleDel = useCallback(
		e => {
			console.log(e);
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
	const handlepeople = useCallback(
		e => {
			setUserList([...UserList, UserId]);
		},
		[UserId, UserList],
	);
	const HandlePage = () => {
		navigate('/tourplan/2');
	};

	return (
		<>
			<SerchContainer>
				<SerchBarHeader>
					<LogoHeader src={Logo} alt=" 로고" />
				</SerchBarHeader>
				<SerchBarSection>
					<BarcordContainer>
						<img src={barcord} alt="바코드 " />
					</BarcordContainer>
					<SerchBarInput>
						<UserInput>
							<div>
								목적지
								<Select
									defaultValue="대구광역시"
									options={[
										{
											value: '대구광역시',
											label: '대구광역시',
										},
										{
											value: '부산광역시',
											label: '부산광역시',
										},
									]}
								/>
							</div>
							<InputIcon>
								<FaMapMarkerAlt />
							</InputIcon>
						</UserInput>
						<UserInput>
							{/*<div style={{ marginRight: '1rem' }}>YYYY-MM-DD ~ YYYY-MM-DD</div>*/}
							<RangePicker />
						</UserInput>
						<UserInput>
							<PeopleNum>
								인원 <InputNumber defaultValue={count} />
							</PeopleNum>
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
						<ResultContainer>여행 수정</ResultContainer>
					</SerchBarInput>
					<TourPlayerDiv>
						<TourPlayer>
							<div>
								<p style={{ color: '#3AD0FF', fontWeight: 'bold' }}>나</p>
								<TourPlayerListDiv>
									<PeopleList>
										<li>lovaoi777@naver.com</li>
										<li>짱구</li>
									</PeopleList>
								</TourPlayerListDiv>
							</div>
							<div>
								<p style={{ color: '#3AD0FF', fontWeight: 'bold' }}>동행인 목록</p>
								<TourPlayerListDiv>
									{UserList.map((e, index) => {
										return (
											<PeopleList>
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
				</SerchBarSection>
			</SerchContainer>
			<NextBtn onClick={HandlePage}>
				<NextText>다음</NextText>
			</NextBtn>
		</>
	);
};

export default PlanCheck;
