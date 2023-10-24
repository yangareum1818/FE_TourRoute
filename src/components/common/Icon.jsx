import { styled } from 'styled-components';

// 오른쪽 방향 화살표
export const RightArrow = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clipPath="url(#clip0_158_1011)">
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

// Input Error Msg Icon
export const InputErrorIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
			<path
				d="M6.3335 3.66634H7.66683V4.99967H6.3335V3.66634ZM6.3335 6.33301H7.66683V10.333H6.3335V6.33301ZM7.00016 0.333008C3.32016 0.333008 0.333496 3.31967 0.333496 6.99967C0.333496 10.6797 3.32016 13.6663 7.00016 13.6663C10.6802 13.6663 13.6668 10.6797 13.6668 6.99967C13.6668 3.31967 10.6802 0.333008 7.00016 0.333008ZM7.00016 12.333C4.06016 12.333 1.66683 9.93967 1.66683 6.99967C1.66683 4.05967 4.06016 1.66634 7.00016 1.66634C9.94016 1.66634 12.3335 4.05967 12.3335 6.99967C12.3335 9.93967 9.94016 12.333 7.00016 12.333Z"
				fill="#FF2E2E"
			/>
		</svg>
	);
};

// 빈하트
export const WishHeartIcon = () => {
	const LineHeart = styled.button`
		display: flex;
		align-items: center;
		width: 2rem;
		height: 2rem;
	`;
	return (
		<LineHeart>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="19"
				viewBox="0 0 20 19"
				fill="none"
			>
				<path
					d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
					fill="#3AD0FF"
				/>
			</svg>
		</LineHeart>
	);
};

// 색칠된 하트
export const WishHeartActiveIcon = () => {
	const PullHeart = styled.button`
		display: flex;
		align-items: center;
		width: 2rem;
		height: 2rem;
		z-index: 999;
	`;
	return (
		<PullHeart>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<g clipPath="url(#clip0_651_3731)">
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
		</PullHeart>
	);
};

// 게시판 리스트 이미지있을 경우 Icon
export const ImgWhether = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
			<g clipPath="url(#clip0_651_4061)">
				<path
					d="M14.6673 10.6666V2.66665C14.6673 1.93331 14.0673 1.33331 13.334 1.33331H5.33398C4.60065 1.33331 4.00065 1.93331 4.00065 2.66665V10.6666C4.00065 11.4 4.60065 12 5.33398 12H13.334C14.0673 12 14.6673 11.4 14.6673 10.6666ZM7.33398 7.99998L8.68732 9.80665L10.6673 7.33331L13.334 10.6666H5.33398L7.33398 7.99998ZM1.33398 3.99998V13.3333C1.33398 14.0666 1.93398 14.6666 2.66732 14.6666H12.0007V13.3333H2.66732V3.99998H1.33398Z"
					fill="#959696"
				/>
			</g>
			<defs>
				<clipPath id="clip0_651_4061">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

// 게시판 모집상태
export const RecruitmentStatus = ({ statusText }) => {
	const Status = styled.span`
		padding: 0.4rem 0.8rem;
		font-size: 1.4rem;
		font-weight: 500;
		border: 0.1rem solid #000;
		border-radius: 0.4rem;

		&.complete {
			color: #959696;
			border: 0.1rem solid #959696;
		}
	`;

	return (
		<div>
			{statusText === '모집 중' ? (
				<Status>{statusText}</Status>
			) : (
				<Status className="complete">{statusText}</Status>
			)}
		</div>
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
export const TrackedProgressIcon = ({ text }) => {
	const TrackedProgress = styled.span`
		padding: 0.4rem 0.8rem;
		background: #ff2e2e; // 진행중 :#3ad0ff, 예정 : #FF2E2E, 종료 : #000
		color: #fff;
		font-size: 1.4rem;
		font-weight: 500;
		border-radius: 0.4rem;
	`;

	return <TrackedProgress>{text}</TrackedProgress>;
};
