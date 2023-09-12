import { TrackingProgressIcon, WishHeartIcon } from 'components/common/Icon';
import { styled } from 'styled-components';
import LocalButton from '../../components/common/LocalButton';

const MyWishListWrapper = styled.div`
	display: grid;
	// 몇 줄에 height값을 줄건지 map돌릴 때, (i가 3개일 때 1++증가 : test용으로 7개 넣음 (3줄이니까 3))
	grid-template-rows: repeat(5, 40rem);
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 10rem;
	gap: 2rem;
`;

const WishListContainer = () => {
	const wishlist = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];

	return (
		<MyWishListWrapper>
			{wishlist.map((e, index) => {
				return <LocalButton key={index} />;
			})}
		</MyWishListWrapper>
	);
};
export default WishListContainer;
