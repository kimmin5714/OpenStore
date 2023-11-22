<script setup>
import { useRouter, useRoute } from "vue-router";
//  import { useEstateStore } from "@/stores/estate";
import { storeToRefs } from "pinia";
import { useMapStore } from "@/stores/map";
import { onMounted, reactive, ref, watch } from "vue";
//  import aptListItem from "./item/aptListItem.vue";

// Router
const router = useRouter();
const route = useRoute();

// Pinia
const storeMap = useMapStore();
const { estateList } = storeToRefs(storeMap);
const { insertEstate, sendRequest, initOption, selectEstateListByAddress } =
  storeMap;

// Data
const searchAddress = reactive({
  sido: "1100000000 서울특별시",
  gugun: "",
  dong: "",
});

const searchType = ref("D");

// Method
watch(
  () => searchAddress.gugun,
  () => {
    if (searchAddress.gugun) {
      let regcode = searchAddress.gugun.substr(0, 5) + "*";
      sendRequest("dong", regcode);
    } else {
      initOption("dong");
    }
  },
  { deep: true }
);

watch(
  () => searchAddress.dong,
  async () => {
    if (searchAddress.dong) {
      if (!searchAddress.sido) {
        alert("주소(시도)를 찾을 수 없습니다.");
        return;
      } else if (!searchAddress.gugun) {
        alert("주소(구군)를 찾을 수 없습니다.");
        return;
      } else if (!searchAddress.dong) {
        alert("주소(동)를 찾을 수 없습니다.");
        return;
      }

      const address = {
        sido: searchAddress.sido.substr(11),
        gugun: searchAddress.gugun.substr(11),
        dong: searchAddress.dong.substr(11),
      };

      const resp = await selectEstateListByAddress(address);
    }
  }
);

watch(
  () => searchType.value,
  () => {
    if (searchType.value === "D") {
      sendRequest("gugun", "11*00000");
    }
  },
  { deep: true }
);

if (searchType.value === "D") {
  sendRequest("gugun", "11*00000");
}

// //Pinia
// const { lat, lon, getterEstateList } = storeToRefs(storeEstate);
// const { selectEstateList } = storeEstate;

// //Data
// const isListEmpty = ref(false);
// const params = ref({
//   lat: lat.value,
//   lon: lon.value,
// });
// //Method
// onMounted(() => {
//   getEstateList();
// });

// const getEstateList = async () => {
//   const startTime = new Date();
//   const resp = await selectEstateList(params.value);
//   if (resp === "success") {
//     isListEmpty.value = false;
//   } else if (resp === "empty") {
//     isListEmpty.value = true;
//   } else if (resp === "fail") {
//     alert("목록을 가져오는데 실패했습니다.");
//   }

//   const endTime = new Date();
//   console.log(
//     "경과 시간 : ",
//     endTime.getMilliseconds() - startTime.getMilliseconds()
//   );
// };
</script>

<template>
  <!--검색창-->
  <div id="searchBox" class="card">
    <div>
      <div class="p-2">
        <div class="d-flex">
          <i class="fa fa-search"></i>
          <h6 class="ps-2">검색 방법을 선택하세요</h6>
        </div>
        <div class="py-1 px-2 d-flex">
          <div class="form-check pe-3">
            <input
              value="D"
              v-model="searchType"
              class="form-check-input"
              type="radio"
              name="search"
              id="searchByDong"
            />
            <label class="form-check-label" for="searchByDong">동 검색</label>
          </div>
        </div>
        <div
          v-if="searchType == 'D'"
          class="pb-2 d-flex justify-content-evenly"
        >
          <div class="btn-group">
            <button type="button" class="btn btn-primary">서울시</button>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <fieldset>
              <!-- <select
                v-model="selectGuName"
                @change="onGuMenuChange"
                class="array-select form-control form-select"
                aria-label="example">
                <option value="default" selected>구 선택</option>
                <option
                  v-for="(item, index) in gu"
                  :key="index"
                  :value="item.guCode">
                  {{ item.guName }}
                </option>
              </select> -->
              <select
                id="gugun"
                class="array-select form-control form-select"
                v-model="searchAddress.gugun"
              >
                <option value="">주소(구군)</option>
              </select>
            </fieldset>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <fieldset>
              <select
                id="dong"
                class="form-select"
                v-model="searchAddress.dong"
              >
                <option value="">주소(동)</option>
              </select>
            </fieldset>
          </div>
        </div>
        <div v-if="searchType == 'K'" class="input-group pb-2 px-3">
          <input
            @keyup.enter="onKeywordSearch"
            type="text"
            v-model="inputKeyword"
            class="form-control d-inline-block"
            placeholder="건물명 또는 동을 입력하세요"
          />
          <button
            @click="onKeywordSearch"
            class="btn btn-primary d-inline-block"
            type="button"
          >
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div v-if="searchType == 'K'" class="input-group pb-2 px-3">
        <input
          @keyup.enter="onKeywordSearch"
          type="text"
          v-model="inputKeyword"
          class="form-control d-inline-block"
          placeholder="건물명 또는 동을 입력하세요"
        />
        <button
          @click="onKeywordSearch"
          class="btn btn-primary d-inline-block"
          type="button"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- 검색 결과 리스트 -->
  <!-- <aptListItem
      v-for="(estate, index) in getterEstateList"
      :key="estate.estateId"
      :index="index"
      :estate="estate" /> -->
  <ul class="search-list-ul">
    <li v-for="estate in estateList" :key="estate.id" class="search-list-li">
      <router-link
        :to="{ name: 'ApartDetail', params: { id: estate.id } }"
        aria-current="page"
      >
        <div role="button" class="search-list-li-detail">
          <div class="sc-juGoRN cujSyQ">
            <h4 class="sc-eFfTkT btIhdS">{{ estate.dong }}</h4>
            <p class="sc-bKGzYo beCmdD">토지ㆍ47m²ㆍ1년이내</p>
          </div>
          <div class="sc-hMQQaK cymzWl">
            <h3 class="sc-jjykVC irPSbt">{{ estate.dealAmount }}</h3>
            <p class="sc-gbNofL pDonz">489만원/m²</p>
            <p class="sc-haGfLn cwMZDB">{{ estate.join_year }}</p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>

  <!--스크롤바-->
  <div class="simplebar-track simplebar-vertical" style="visibility: visible">
    <div
      class="simplebar-scrollbar"
      style="
        height: 340px;
        transform: translate3d(0px, 0px, 0px);
        display: block;
      "
    ></div>
  </div>
</template>

<style scoped>
*,
:after,
:before {
  box-sizing: border-box;
}

.simplebar-track {
  bottom: 0;
  right: 0;
  z-index: 1;
}
.simplebar-track.simplebar-vertical {
  top: 0;
  width: 11px;
  visibility: visible;
}
.simplebar-height-auto-observer,
.simplebar-track {
  overflow: hidden;
  pointer-events: none;
  position: absolute;
}
.simplebar-scrollbar {
  left: 0;
  min-height: 10px;
  position: absolute;
  right: 0;
}

[role="button"] {
  cursor: pointer;
}
/* :root {
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-2xl: 2rem;
  --bs-border-radius-pill: 50rem;
} */
.simplebar-content-wrapper {
  -ms-overflow-style: none;
  box-sizing: border-box !important;
  direction: inherit;
  display: block;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  scrollbar-width: none;
  width: auto;
}
.search-list-ul {
  list-style: none;
  padding-top: 4px;
  margin: 0px;
  padding: 0px;
  display: inline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.search-list-li {
  display: list-item;
  text-align: -webkit-match-parent;
  padding: 25px 20px 0px;
  transition: background-color 0.2s ease 0s;
}
.search-list-li-detail {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: flex-start;
}
#searchBox {
  top: 20px;
  left: 20px;
  width: 360px;
  padding: 10px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.7);
  overflow-y: auto;
  margin-bottom: 24px;
}
</style>
