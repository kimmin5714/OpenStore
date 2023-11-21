<script setup>
import { ref, watch, onMounted } from "vue";
import MapMenu from "@/components/apart/MapMenu/MapMenu.vue";
import { useMapStore } from "@/stores/map";
import { storeToRefs } from "pinia";

// MapMenu
const storeMap = useMapStore();
const { isStoreList, storeList, isDealCostSelected, dealCostAvgByDong } =
  storeToRefs(storeMap);
const { selectStoreList, selectDealCostAvgByDong } = storeMap;

var map;
// 주소-좌표 변환 객체를 생성합니다
var geocoder;
const positions = ref([]);
const markers = ref([]);
const infoWindows = ref([]);

const props = defineProps({ pointList: Array, selectPoint: Object });

watch(
  // selectPoint로 맵 이동
  () => props.selectPoint.value,
  () => {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new kakao.maps.LatLng(
      props.selectPoint.lat,
      props.selectPoint.lng
    );

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
  },
  { deep: true }
);

watch(
  // 주변 상가 정보 얻어오기
  () => isStoreList.value,
  async () => {
    if (isStoreList.value) {
      deleteMarkers();
      // deleteInfoWindows();
      if (map.getLevel() <= 2) {
        const bounds = map.getBounds();
        // 영역의 남서쪽 좌표를 얻어옵니다
        const swLatLng = bounds.getSouthWest();
        // 영역의 북동쪽 좌표를 얻어옵니다
        const neLatLng = bounds.getNorthEast();

        const params = {
          latStart: swLatLng.getLat().toString(),
          lonStart: swLatLng.getLng().toString(),
          latEnd: neLatLng.getLat().toString(),
          lonEnd: neLatLng.getLng().toString(),
          ctPrvnCd: "",
        };
        const resp = await selectStoreList(params);
        if (resp === "success") {
          console.log(storeList);

          for (let i = 0; i < storeList.value.length; i++) {
            let store = storeList.value[i];

            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
              map, // 마커를 표시할 지도
              position: new kakao.maps.LatLng(store.lat, store.lon), // 마커를 표시할 위치
              title: store.bizesNm, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다image : markerImage // 마커 이미지
            });

            // let infowindow = new kakao.maps.InfoWindow({
            //   map: map, // 인포윈도우가 표시될 지도
            //   position: new kakao.maps.LatLng(store.lat, store.lon),
            //   content: `<div style="padding:5px;">${store.bizesNm}</div>`,
            // });
            markers.value.push(marker);
            // infoWindows.value.push(infowindow);
          }
        }
      } else {
        alert("지도를 더 확대해주세요.");
      }
      isStoreList.value = false;
    }
  }
);

watch(
  () => isDealCostSelected.value,
  async () => {
    if (isDealCostSelected.value) {
      console.log(dealCostAvgByDong.value);

      const params = {};
      const resp = await selectDealCostAvgByDong(params);
    }
  }
);

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${
      import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY
    }&libraries=services,clusterer`;
    /* global kakao */
    script.onload = () => kakao.maps.load(() => initMap());
    document.head.appendChild(script);
  }

  // 지도 이동, 확대 시 이벤트
  kakao.maps.event.addListener(map, "idle", function () {
    // 현재 중심 좌표의 주소 얻어오기
    getAddressByCoords(map.getCenter(), afterGetAddressByCoords);
    // 맵의 확대 레벨에 따라 마커, infoWindow 제거
    if (map.getLevel() > 2) {
      deleteMarkers();
      deleteInfoWindows();
    }
  });
});

watch(
  () => props.pointList.value,
  () => {
    positions.value = [];
    props.pointList.forEach((point) => {
      let obj = {};
      obj.latlng = new kakao.maps.LatLng(point.lat, point.lng);
      obj.title = point.apartmentName;
      // obj.title = "obj.title";

      positions.value.push(obj);
    });
    loadMarkers();
  },
  { deep: true }
);

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.56701, 126.97862),
    level: 3,
  };
  map = new kakao.maps.Map(container, options);
  geocoder = new kakao.maps.services.Geocoder();
  getAddressByCoords(map.getCenter(), afterGetAddressByCoords);
  // loadMarkers();
};

const getAddressByCoords = async (coords, callback) => {
  const resp = await geocoder.coord2RegionCode(
    coords.getLng(),
    coords.getLat(),
    callback
  );
};

const afterGetAddressByCoords = (result, status) => {
  // 지도 이동, 확대 후 받아온 중심 좌표의 주소로 처리할 작업 명시 영역
  if (status === kakao.maps.services.Status.OK) {
    result.forEach((data) => {
      if (data.region_type === "B") {
        // 수신한 데이터 확인용
        console.log(data);
        console.log(data.code.substr(0, 5));
        console.log(data.region_3depth_name);

        // 상업용 부동산 현재 좌표의 법정동의 평균 매매가 얻기
      }
    });
  } else {
    console.error("좌표로 주소를 얻는데 실패했습니다.");
  }
};

const loadMarkers = () => {
  // 현재 표시되어있는 marker들이 있다면 map에 등록된 marker를 제거한다.
  deleteMarkers();

  // 마커 이미지를 생성합니다
  //   const imgSrc = require("@/assets/map/markerStar.png");
  // 마커 이미지의 이미지 크기 입니다
  //   const imgSize = new kakao.maps.Size(24, 35);
  //   const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);

  // 마커를 생성합니다
  markers.value = [];
  positions.value.forEach((position) => {
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: position.latlng, // 마커를 표시할 위치
      title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨.
      clickable: true, // // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      // image: markerImage, // 마커의 이미지
    });
    markers.value.push(marker);
  });

  // 4. 지도를 이동시켜주기
  // 배열.reduce( (누적값, 현재값, 인덱스, 요소)=>{ return 결과값}, 초기값);
  const bounds = positions.value.reduce(
    (bounds, position) => bounds.extend(position.latlng),
    new kakao.maps.LatLngBounds()
  );
};

const deleteMarkers = () => {
  if (markers.value.length > 0) {
    markers.value.forEach((marker) => marker.setMap(null));
  }
};
const deleteInfoWindows = () => {
  if (infoWindows.value.length > 0) {
    infoWindows.value.forEach((infoWindow) => infoWindow.setMap(null));
  }
};
</script>

<template>
  <div id="map_wrap" class="pos-abs w-100p h-100p dp-fl">
    <div id="map">
      <MapMenu />
    </div>
  </div>
</template>

<style>
#map {
  width: 100vw;
  height: 100vh;
  /* height: 700px; */
}
</style>
