<script setup>
import HouseDealList from "@/components/apart/HouseDealList.vue";
import HouseInfoList from "@/components/apart/HouseInfoList.vue";
import { ref, reactive, onMounted } from "vue";
import { useApartStore } from "@/stores/apart";
import { storeToRefs } from "pinia";
// import "@/assets/js/key.js";   // 아파트 API key

// Tools
const storeApart = useApartStore();
const { houseInfoList, houseDealList } = storeToRefs(storeApart);
const { selectDong } = storeApart;

// Data
const address = reactive({
  sido: "",
  gugun: "",
  dong: "",
});
const isHouseInfoListShow = ref(false);
// const houseDealList = ref([]);
// const houseInfoList = ref(null);

// Method
// onMouted의 js == apt_map.js의 내용 전부.
// import로 가져올 경우, 카카오맵을 뿌려줄 요소 div#map이 아직 DOM에 없는 상태에서 div#map을 참조하려하기 때문에
// null 참조 에러 발생. 따라서 마운트 된 후에 카카오맵을 가져와야 한다.
// 또한 onMounted 내에서는 import를 할 수 없다.
onMounted(() => {
  // 카카오지도
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.500613, 127.036431), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);
  var marker, infowindow;
  var markers = []; // 마커 객체들 저장할 배열

  function viewMap(apt, address) {
    if (marker != null && infowindow != null) {
      marker.setMap(null);
      infowindow.close();
    }
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${apt}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      } else {
        console.log("viewMap 실패. 주소 : ", address);
      }
    });
  }

  function viewMapByCoords(aptName, lat, lng) {
    if (marker != null && infowindow != null) {
      marker.setMap(null);
      infowindow.close();
    }
    var coords = new kakao.maps.LatLng(lat, lng);

    // 결과값으로 받은 위치를 마커로 표시합니다
    marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });

    // 인포윈도우로 장소에 대한 설명을 표시합니다
    infowindow = new kakao.maps.InfoWindow({
      content: `<div style="width:150px;text-align:center;padding:6px 0;">${aptName}</div>`,
    });
    infowindow.open(map, marker);

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    map.setCenter(coords);
  }

  // 마커를 생성하고 지도위에 표시하는 함수입니다
  function addMarker(position) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: position,
    });

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
    console.log(`마커 추가! ${markers}`);
  }

  // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
  function setMarkers(map) {
    console.log(`마커 길이: ${markers.length}`);
    for (let i = 0; i < markers.length; i++) {
      console.log(`마커를 표시해요! ${markers[i]}`);
      markers[i].setMap(map);
    }
  }

  // "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
  function showMarkers() {
    setMarkers(map);
  }

  // "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
  function hideMarkers() {
    setMarkers(null);
  }

  function initTable() {
    let tbody = document.querySelector("#aptlist");
    let len = tbody.rows.length;
    for (let i = len - 1; i >= 0; i--) {
      tbody.deleteRow(i);
    }
  }

  ///////////////////////// select box 설정 (지역, 매매기간) /////////////////////////
  let date = new Date();

  let yearEl = document.querySelector("#year");
  let yearOpt = `<option value="">매매년도선택</option>`;
  let year = date.getFullYear();
  for (let i = year; i > year - 20; i--) {
    yearOpt += `<option value="${i}">${i}년</option>`;
  }
  yearEl.innerHTML = yearOpt;

  // 브라우저가 열리면 시도정보 얻기.
  sendRequest("sido", "*00000000");

  document.querySelector("#year").addEventListener("change", function () {
    let month = date.getMonth() + 1;
    let monthEl = document.querySelector("#month");
    let monthOpt = `<option value="">매매월선택</option>`;
    let yearSel = document.querySelector("#year");
    let m =
      yearSel[yearSel.selectedIndex].value == date.getFullYear() ? month : 13;
    for (let i = 1; i < m; i++) {
      monthOpt += `<option value="${i < 10 ? "0" + i : i}">${i}월</option>`;
    }
    monthEl.innerHTML = monthOpt;
  });

  // if (document.querySelectorAll(".apart-row").length != 0) {
  // document.querySelector(".apart-row").addEventListener("click", function () {
  //   console.log("뷰맵 실행!!!");
  //   viewMapByCoords(
  //     this.querySelector(".apart-name"),
  //     this.querySelector(".apart-lat"),
  //     this.querySelector(".apart-lng")
  //   );
  // });
  // }

  // https://juso.dev/docs/reg-code-api/
  // let url = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes";
  // let regcode = "*00000000";
  // 전국 특별/광역시, 도
  // https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000

  // 시도가 바뀌면 구군정보 얻기.
  document.querySelector("#sido").addEventListener("change", function () {
    if (this[this.selectedIndex].value) {
      let regcode = this[this.selectedIndex].value.substr(0, 2) + "*00000";
      sendRequest("gugun", regcode);
    } else {
      initOption("gugun");
      initOption("dong");
    }
  });

  // 구군이 바뀌면 동정보 얻기.
  document.querySelector("#gugun").addEventListener("change", function () {
    if (this[this.selectedIndex].value) {
      let regcode = this[this.selectedIndex].value.substr(0, 5) + "*";
      sendRequest("dong", regcode);
    } else {
      initOption("dong");
    }
  });

  function sendRequest(selid, regcode) {
    const url = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes";
    let params = "regcode_pattern=" + regcode + "&is_ignore_zero=true";
    fetch(`${url}?${params}`)
      .then((response) => response.json())
      .then((data) => addOption(selid, data));
  }

  function addOption(selid, data) {
    let opt = ``;
    initOption(selid);
    switch (selid) {
      case "sido":
        opt += `<option value="">시도선택</option>`;
        data.regcodes.forEach(function (regcode) {
          opt += `
            <option value="${regcode.code} ${regcode.name}">${regcode.name}</option>
            `;
        });
        break;
      case "gugun":
        opt += `<option value="">구군선택</option>`;
        for (let i = 0; i < data.regcodes.length; i++) {
          if (i != data.regcodes.length - 1) {
            if (
              data.regcodes[i].name.split(" ")[1] ==
                data.regcodes[i + 1].name.split(" ")[1] &&
              data.regcodes[i].name.split(" ").length !=
                data.regcodes[i + 1].name.split(" ").length
            ) {
              data.regcodes.splice(i, 1);
              i--;
            }
          }
        }
        let name = "";
        data.regcodes.forEach(function (regcode) {
          if (regcode.name.split(" ").length == 2)
            name = regcode.name.split(" ")[1];
          else
            name =
              regcode.name.split(" ")[1] + " " + regcode.name.split(" ")[2];
          opt += `
            <option value="${regcode.code} ${name}">${name}</option>
            `;
        });
        break;
      case "dong":
        opt += `<option value="">동선택</option>`;
        let idx = 2;
        data.regcodes.forEach(function (regcode) {
          if (regcode.name.split(" ").length != 3) idx = 3;
          let dongName = regcode.name.split(" ")[idx]; // 아파트 리스트 띄울 때 조건문으로 쓸 동이름 value에 추가
          opt += `
            <option value="${regcode.code} ${dongName}">${dongName}</option>
            `;
        });
    }
    document.querySelector(`#${selid}`).innerHTML = opt;
  }

  function initOption(selid) {
    let options = document.querySelector(`#${selid}`);
    options.length = 0;
    // let len = options.length;
    // for (let i = len - 1; i >= 0; i--) {
    //   options.remove(i);
    // }
  }
  /*
///////////////////////// 아파트 매매 정보 /////////////////////////
document.querySelector("#list-btn").addEventListener("click", function () {
  markers = [];
  map = new kakao.maps.Map(mapContainer, mapOption);
  
  let url =
    "http://localhost:8080/minhoo/house";
  let sidoSel = document.querySelector("#sido");
  let sidoName = sidoSel[sidoSel.selectedIndex].value.substr(11, );
  console.log(sidoName);	// 확인용
  
  let gugunSel = document.querySelector("#gugun");
  let gugunName = gugunSel[gugunSel.selectedIndex].value.substr(11, );
  
  
  let dongSel = document.querySelector("#dong");
  let dongName = dongSel[dongSel.selectedIndex].value.substr(11, );
  
  let yearSel = document.querySelector("#year");
  let year = yearSel[yearSel.selectedIndex].value;
  let monthSel = document.querySelector("#month");
  let month = monthSel[monthSel.selectedIndex].value;
  let dealYM = year + month;
  let queryParams =
    encodeURIComponent("mode") +
    "=" +
    encodeURIComponent("search-dong");
  queryParams +=
    "&" +
    encodeURIComponent("sido") +
    "=" +
    encodeURIComponent(sidoName);
  queryParams +=
    "&" +
    encodeURIComponent("gugun") +
    "=" +
    encodeURIComponent(gugunName);
  queryParams +=
    "&" +
    encodeURIComponent("dong") +
    "=" +
    encodeURIComponent(dongName);

  fetch(`${url}?${queryParams}`)
    .then((response) => response.text())
    .then((data) => makeList(data)); 
});*/

  // 아파트 리스트 추가
  function makeList(data) {
    document.querySelector("table").setAttribute("style", "display: ;");
    let tbody = document.querySelector("#aptlist");
    console.log(data);
    let parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
    // console.log(xml);
    initTable();
    let apts = xml.querySelectorAll("item");
    apts.forEach((apt) => {
      if (
        // 고른 동의 매물만 추가
        apt.querySelector("법정동").textContent.substring(1) === // queryselector의 법정동은 띄어쓰기가 포함돼있어 인덱스 1부터 잘라와야 함.
        document.querySelector("#dong").value.split(" ")[1] // dong의 value는 "code 동이름" 형태임.
      ) {
        let tr = document.createElement("tr");

        let nameTd = document.createElement("td");
        nameTd.appendChild(
          document.createTextNode(apt.querySelector("아파트").textContent)
        );
        tr.appendChild(nameTd);

        let floorTd = document.createElement("td");
        floorTd.appendChild(
          document.createTextNode(apt.querySelector("층").textContent)
        );
        tr.appendChild(floorTd);

        let areaTd = document.createElement("td");
        areaTd.appendChild(
          document.createTextNode(apt.querySelector("전용면적").textContent)
        );
        tr.appendChild(areaTd);

        let dongTd = document.createElement("td");
        dongTd.appendChild(
          document.createTextNode(apt.querySelector("법정동").textContent)
        );
        tr.appendChild(dongTd);

        let priceTd = document.createElement("td");
        priceTd.appendChild(
          document.createTextNode(
            apt.querySelector("거래금액").textContent + "만원"
          )
        );
        priceTd.classList.add("text-end");
        tr.appendChild(priceTd);

        let address =
          apt.querySelector("중개사소재지").textContent +
          " " +
          apt.querySelector("법정동").textContent +
          " " +
          apt.querySelector("지번").textContent;
        tr.addEventListener("click", () =>
          viewMap(apt.querySelector("아파트").textContent, address)
        );
        tbody.appendChild(tr);

        moveMapToDong(
          `${document.querySelector("#sido").value.split(" ")[1]} ${
            document.querySelector("#gugun").value.split(" ")[1]
          } ${document.querySelector("#dong").value.split(" ")[1]}`,
          address,
          apt
        );
      } else {
        let tr = document.createElement("tr");
        let nameTd = document.createElement("td");
        let floorTd = document.createElement("td");
        let areaTd = document.createElement("td");
        let dongTd = document.createElement("td");
        let priceTd = document.createElement("td");
        priceTd.classList.add("text-end");
        tr.appendChild(priceTd);

        moveMapToDong(
          `${document.querySelector("#sido").value.split(" ")[1]} ${
            document.querySelector("#gugun").value.split(" ")[1]
          } ${document.querySelector("#dong").value.split(" ")[1]}`,
          null,
          null
        );
      }
    });
  }

  function moveMapToDong(dong, specificAdress, apt) {
    // 결과값으로 받은 위치를 마커로 표시합니다
    // 검색한 동으로 카카오지도 이동
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(dong, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords);
      } else {
        console.log("잘못 했어요");
      }
    });
    if (specificAdress != null) {
      // 상세 주소로 좌표를 검색합니다
      geocoder.addressSearch(specificAdress, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          addMarker(coords);
          showMarkers();
        }
      });
    } else {
    }
  }
});
const doSearchDong = async () => {
  if (!address.sido) {
    alert("시도를 선택해주세요.");
    return;
  }
  if (!address.gugun) {
    alert("구군을 선택해주세요.");
    return;
  }
  if (!address.dong) {
    alert("동을 선택해주세요.");
    return;
  }
  // const success = (response) => {
  //   // if (response.status == 200) {
  //     if(response.data)
  //       houseInfoList.value = response.data;
  //     else houseInfoList.value = [];
  //     // 결과 메시지 출력
  //     console.log(`searchDong 성공. 검색결과 ${houseInfoList.value.length}건`);
  // };
  // const fail = (error) => console.log(error);
  // searchDong(address, success, fail);
  const resp = await selectDong(address);
  if (resp === "success") {
    console.log(`selectDong 성공. 검색결과 ${houseInfoList.value.length}건`);
    isHouseInfoListShow.value = true;
  } else if (resp === "empty") {
    console.log("selectDong 성공. 검색결과 없음.");
    isHouseInfoListShow.value = true;
  }
};
const initHouseDealList = () => {
  houseDealList.value.length = 0;
};
</script>

<template>
  <div class="col-md-9">
    <div class="alert alert-success mt-3 text-center fw-bold" role="alert">
      아파트 정보
    </div>
    <!-- 아파트 매매 정보 검색 start -->
    <form id="form-search" method="GET" action="">
      <div class="row col-md-12 justify-content-center mb-2">
        <div class="form-group col-md-2">
          <select
            class="form-select bg-secondary text-light"
            id="sido"
            name="sido"
            v-model="address.sido"
          >
            <option value="">시도선택</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <select
            class="form-select bg-secondary text-light"
            id="gugun"
            name="gugun"
            v-model="address.gugun"
          >
            <option value="">구군선택</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <select
            class="form-select bg-secondary text-light"
            id="dong"
            name="dong"
            v-model="address.dong"
          >
            <option value="">동선택</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <select
            class="form-select bg-dark text-light"
            id="year"
            name="year"
          ></select>
        </div>
        <div class="form-group col-md-2">
          <select
            class="form-select bg-dark text-light"
            id="month"
            name="month"
          >
            <option value="">매매월선택</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <button
            type="button"
            id="list-btn"
            class="btn btn-outline-primary"
            @click="doSearchDong"
          >
            아파트 검색
          </button>
        </div>
      </div>
    </form>
    <!-- kakao map start -->
    <div
      ref="mapDiv"
      id="map"
      class="mt-3"
      style="width: 100%; height: 400px"
    ></div>
    <!-- kakao map end -->

    <button v-show="houseDealList.length != 0" @click="initHouseDealList">
      아파트 정보로 돌아가기
    </button>

    <div v-if="isHouseInfoListShow">
      <!-- "houseInfoList.length != 0 && houseDealList.length == 0" -->
      <HouseInfoList v-show="houseDealList.length == 0" />
    </div>

    <!-- <template v-if="houseInfoList.length == 0 && houseDealList.length != 0"> -->
    <div v-show="houseDealList.length != 0">
      <HouseDealList />
    </div>
  </div>
</template>

<style scoped></style>
