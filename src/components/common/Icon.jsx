import { styled } from 'styled-components';

export const RightArrow = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clip-path="url(#clip0_158_1011)">
				<path
					d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
					fill="#CFCFCF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_158_1011">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

// 빈하트
export const WishHeartIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
			<path
				d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
				fill="#3AD0FF"
			/>
		</svg>
	);
};

// 색칠된 하트
export const WishHeartActiveIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clip-path="url(#clip0_651_3731)">
				<path
					d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
					fill="#3AD0FF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_651_3731">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

// 축제 진행현황
export const TrackingProgressIcon = ({ text }) => {
	const TrackingProgress = styled.span`
		padding: 0.4rem 0.8rem;
		background: #3ad0ff; // 진행중 :#3ad0ff, 예정 : #FF2E2E, 종료 : #000
		color: #fff;
		font-size: 1.4rem;
		font-weight: 500;
		border-radius: 0.4rem;
	`;

	return <TrackingProgress>{text}</TrackingProgress>;
};
