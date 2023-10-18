import React from 'react';
import { Map, MapMarker, Circle, Polyline } from 'react-kakao-maps-sdk';
const KakaoMap = ({ props }) => {
	console.log(props);
	return (
		<>
			<Map
				center={{ lat: props[0].latitude, lng: props[0].longitude }} // 지도의 중심 좌표
				style={{ width: '800px', height: '600px' }} // 지도 크기
				level={3}
				// 지도 확대 레벨
			>
				{props.map(prop => {
					return (
						<div>
							<MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
								position={{
									// 인포윈도우가 표시될 위치입니다
									lat: prop.latitude,
									lng: prop.longitude,
								}}
							></MapMarker>
							<Circle
								center={{
									lat: props.latitude,
									lng: props.longitude,
								}}
								radius={50}
								strokeWeight={5} // 선의 두께입니다
								strokeColor={'#75B8FA'} // 선의 색깔입니다
								strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
								strokeStyle={'dash'} // 선의 스타일 입니다
								fillColor={'#CFE7FF'} // 채우기 색깔입니다
								fillOpacity={0.7} // 채우기 불투명도 입니다
							/>
						</div>
					);
				})}
				<Polyline
					path={[
						[
							{ lat: props[0].latitude, lng: props[0].longitude },
							{ lat: props[1].latitude, lng: props[1].longitude },
							{ lat: props[2].latitude, lng: props[2].longitude },
						],
					]}
					strokeWeight={5} // 선의 두께 입니다
					strokeColor={'#FFAE00'} // 선의 색깔입니다
					strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
					strokeStyle={'solid'} // 선의 스타일입니다
				/>
			</Map>
		</>
	);
};

export default KakaoMap;
