import React from 'react';
import infoimg1 from 'assets/InfoImg/touroute_about_02.jpg';
import infoimg2 from 'assets/InfoImg/touroute_about_03.jpg';
import infoimg3 from 'assets/InfoImg/touroute_about_04.jpg';
import infoimg4 from 'assets/InfoImg/touroute_about_05.png';
import infoimg5 from 'assets/InfoImg/touroute_about_06.png';
import infoimg7 from 'assets/InfoImg/touroute_about_07.png';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Info = () => {
	return (
		<Wrapper>
			<img src={infoimg1} />
			<img src={infoimg2} />
			<img src={infoimg3} />
			<img src={infoimg4} />
			<img src={infoimg5} />
			<img src={infoimg7} />
		</Wrapper>
	);
};

export default Info;
