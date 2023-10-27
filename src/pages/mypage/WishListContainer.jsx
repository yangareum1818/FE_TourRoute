import { TrackingProgressIcon, WishHeartIcon } from 'components/common/Icon';
import { styled } from 'styled-components';
import LocalButton from '../../components/common/LocalButton';
import Empty from 'components/common/Empty';
import { useCallback, useEffect, useState } from 'react';
import { axiosTokenGet } from 'utils/AxiosUtils';
const MyWishListWrapper = styled.div`
	display: grid;
	// 몇 줄에 height값을 줄건지 map돌릴 때, (i가 3개일 때 1++증가 : test용으로 7개 넣음 (3줄이니까 3))
	grid-template-rows: repeat(4, 40rem);
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 10rem;
	gap: 2rem;
`;

const WishListContainer = () => {
	const [bookmarkData, setBookmarkData] = useState([]);
	const userWishList = useCallback(async () => {
		const data = await axiosTokenGet('/festival/get_info');
		setBookmarkData(data);
	}, []);

	useEffect(() => {
		userWishList();
	}, []);

	return (
		<div>
			{bookmarkData.length === 0 ? (
				<Empty text="찜한 목록이 없습니다. 관심있는 축제를 찜해보세요 - !" />
			) : (
				<MyWishListWrapper>
					{bookmarkData.map((data, index) => {
						return data.is_bookmark === true ? <LocalButton key={index} props={data} /> : '';
					})}
				</MyWishListWrapper>
			)}
		</div>
	);
};
export default WishListContainer;
