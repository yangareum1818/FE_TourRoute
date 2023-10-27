import styled from 'styled-components';

import Empty from 'components/common/Empty';
import { useCallback, useEffect, useState } from 'react';
import { axiosTokenGet } from 'utils/AxiosUtils';
import { useSelector } from 'react-redux';
import TourList from 'components/common/TourList';

const MyRecordWrppaer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const RecordContainer = () => {
	const info = useSelector(state => state.Info);
	const [tour, setTour] = useState([]);
	const result = useSelector(state1 => state1.Result);
	console.log('result', result);

	const userTour = useCallback(async () => {
		const data = await axiosTokenGet(`/plan/get-plan/${info.user.email}`);
		setTour(data);
	}, []);

	useEffect(() => {
		userTour();
	}, []);

	console.log('tour', tour);

	return (
		<MyRecordWrppaer>
			{tour === 0 ? (
				<Empty text="여행계획에서 나의 여행정보를 추천받고 저장해보세요!" />
			) : (
				<>
					{tour.map((t, index) => {
						return <TourList props={t} key={index} />;
					})}
				</>
			)}
		</MyRecordWrppaer>
	);
};
export default RecordContainer;
