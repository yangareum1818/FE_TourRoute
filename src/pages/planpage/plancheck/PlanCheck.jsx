import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/Logo5.svg';
import barcord from 'assets/barcord.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import { DatePicker, InputNumber, Select } from 'antd';
import NextButton from '../nextbutton/NextButton';
import { useDispatch, useSelector } from 'react-redux';
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
	background: #f2f6f9;
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

const PlanCheck = () => {
	const dispatch = useDispatch();
	const count = useSelector(state => state.reducer.count);
	const { RangePicker } = DatePicker;
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
							<InputId type="text" placeholder="동행인 아이디 입력" />
						</UserInput>
						<ResultContainer>여행 수정</ResultContainer>
					</SerchBarInput>
				</SerchBarSection>
			</SerchContainer>
			<NextButton />
		</>
	);
};

export default PlanCheck;
