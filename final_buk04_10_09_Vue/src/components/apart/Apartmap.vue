<script setup>
import HouseDealList from "@/components/apart/HouseDealList.vue";
import HouseInfoList from "@/components/apart/HouseInfoList.vue";
import VKakaoMap from "@/components/common/VKakaoMap.vue";
import { ref, reactive, onMounted } from "vue";
import { searchDong } from "@/api/apart.js";
import { useApartStore } from "@/stores/apart";
import { storeToRefs } from "pinia";
// import "@/assets/js/key.js";   // 아파트 API key

// Tools
const storeApart = useApartStore();
const { houseInfoList, houseDealList, selectPoint } = storeToRefs(storeApart);
const { selectDong } = storeApart;

// Data
const address = reactive({
  sido: "",
  gugun: "",
  dong: "",
});
const isHouseInfoListShow = ref(false);

// Method
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
  const resp = await selectDong(address);
  if (resp === "success") {
    console.log(`selectDong 성공. 검색결과 ${houseInfoList.value.length}건`);
    isHouseInfoListShow.value = true;
  } else if (resp === "empty") {
    console.log("selectDong 성공. 검색결과 없음.");
    isHouseInfoListShow.value = true;
  }
};

onMounted(() => {
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
  }
});
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
    <!-- <div
      ref="mapDiv"
      id="map"
      class="mt-3"
      style="width: 100%; height: 400px"
    ></div> -->
    <!-- <Kakaomap /> -->
    <VKakaoMap :pointList="houseInfoList" :selectPoint="selectPoint" />
    <!-- kakao map end -->

    <div class="mt-5">
      <div v-if="isHouseInfoListShow">
        <!-- "houseInfoList.length != 0 && houseDealList.length == 0" -->
        <HouseInfoList v-show="houseDealList.length == 0" />
      </div>

      <!-- <template v-if="houseInfoList.length == 0 && houseDealList.length != 0"> -->
      <div v-show="houseDealList.length != 0">
        <HouseDealList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
