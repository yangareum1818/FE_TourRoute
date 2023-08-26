import MypageLayout from 'components/Layout/MypageLayout';
import { TrackingProgressIcon, WishHeartIcon } from 'components/common/Icon';
import { styled } from 'styled-components';

const MyWishListWrapper = styled.div`
	display: grid;
	// 몇 줄에 height값을 줄건지 map돌릴 때, (i가 3개일 때 1++증가 : test용으로 7개 넣음 (3줄이니까 3))
	grid-template-rows: repeat(3, 40rem);
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 10rem;
	gap: 2rem;
`;

const MyWishList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem;
	border: 0.1rem solid #000;
	border-radius: 0.8rem;
`;

const ListIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ListContent = styled.div`
	height: 15rem;
	background: #000;
`;

const WishListContainer = () => {
	const wishlist = [];

	return (
		<MypageLayout>
			<MyWishListWrapper>
				<MyWishList>
					<ListIconWrapper>
						<WishHeartIcon />
						<TrackingProgressIcon text="진행 중" />
					</ListIconWrapper>

					<ListContent></ListContent>
				</MyWishList>
				<MyWishList></MyWishList>
				<MyWishList></MyWishList>
				<MyWishList></MyWishList>
				<MyWishList></MyWishList>
				<MyWishList></MyWishList>
				<MyWishList></MyWishList>
			</MyWishListWrapper>
		</MypageLayout>
	);
};
export default WishListContainer;
