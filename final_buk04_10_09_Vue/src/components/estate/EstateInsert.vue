<script setup>
import HeadingNav from "@/components/common/HeadingNav.vue";
import Footer from "../common/Footer.vue";
import { reactive, watch } from "vue";
import { useMapStore } from "@/stores/map";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

// Router
const router = useRouter();

// Pinia
const storeMap = useMapStore();
const { insertEstate, sendRequest, initOption } = storeMap;

// State
const estate = reactive({
  dealClass: "매매",
  dealAmount: 0,
  floor: 0,
  area: 0,
  description: "",
  sido: "",
  gugun: "",
  dong: "",
  jibun: "",
});

// Action
watch(
  () => estate.sido,
  () => {
    if (estate.sido) {
      let regcode = estate.sido.substr(0, 2) + "*00000";
      sendRequest("gugun", regcode);
    } else {
      initOption("gugun");
      initOption("dong");
    }
  },
  { deep: true }
);

watch(
  () => estate.gugun,
  () => {
    if (estate.gugun) {
      let regcode = estate.gugun.substr(0, 5) + "*";
      sendRequest("dong", regcode);
    } else {
      initOption("dong");
    }
  },
  { deep: true }
);

const submitEstate = async () => {
  // 값 검증
  if (!estate.dealClass) {
    alert("매매를 입력해주세요.");
    return;
  } else if (!estate.dealAmount) {
    alert("매매가를 입력해주세요.");
    return;
  } else if (!estate.floor) {
    alert("층을 입력해주세요.");
    return;
  } else if (!estate.area) {
    alert("면적을 입력해주세요.");
    return;
  } else if (!estate.description) {
    alert("매물 설명을 입력해주세요.");
    return;
  } else if (!estate.sido) {
    alert("주소(시도)를 선택해주세요.");
    return;
  } else if (!estate.gugun) {
    alert("주소(구군)을 선택해주세요.");
    return;
  } else if (!estate.dong) {
    alert("주소(동)을 선택해주세요.");
    return;
  } else if (!estate.jibun) {
    alert("주소(지번)을 입력해주세요.");
    return;
  }

  estate.sido = estate.sido.substr(11);
  estate.gugun = estate.gugun.substr(11);
  estate.dong = estate.dong.substr(11);

  const resp = await insertEstate(estate);
  if (resp === "success") {
    alert("등록이 완료되었습니다.");
    console.log(router);
    router.push({ name: "IndexView" });
  } else {
    alert("등록 실패하였습니다.");
  }
};

sendRequest("sido", "*00000000");
</script>

<template>
  <HeadingNav />
  <div style="padding: 24px 0px 24px; align-items: center">
    <h3 class="estate-list-header">매물 등록</h3>
  </div>
  <div class="container my-5">
    <div class="row g-2">
      <div class="col-lg-3 col-md-6">
        <!-- <div class="form-floating">
          <input
            @click="selectHouseNo"
            v-model="houseName"
            type="text"
            class="form-control cursor-pointer"
            placeholder="실거래가 *" />
          <label>건물 정보 <span class="text-danger">*</span></label>
        </div> -->
      </div>
      <div class="col-lg-3 col-md-6"></div>
      <div class="col-lg-3 col-md-6"></div>
      <div class="col-lg-3 col-md-6"></div>
      <div class="col-lg-3 col-md-6">
        <div class="form-floating">
          <select disabled class="form-select" v-model="estate.dealClass">
            <option selected>매매</option>
            <option>전세</option>
            <option>월세</option>
          </select>
          <label>거래 종류 <span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="실거래가"
            v-model="estate.dealAmount"
          />
          <label>매매가 <span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="form-floating">
          <input
            v-model="estate.floor"
            type="text"
            class="form-control"
            placeholder="해당 층  *"
          />
          <label>해당 층 <span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="form-floating">
          <input
            v-model="estate.area"
            type="text"
            class="form-control"
            placeholder="면적(평) *"
          />
          <label>면적(평) <span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <!-- <div class="form-floating">
          <input
            v-model="estate.sido"
            type="text"
            class="form-control"
            placeholder="주소(시도) *"
          />
          <label>주소(시도) <span class="text-danger">*</span></label>
        </div> -->
        <div class="form-floating">
          <select id="sido" class="form-select" v-model="estate.sido">
            <option value="">주소(시도)</option>
          </select>
          <label>주소(시도)<span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <!-- <div class="form-floating">
          <input
            v-model="estate.gugun"
            type="text"
            class="form-control"
            placeholder="주소(구군) *"
          />
          <label>주소(구군) <span class="text-danger">*</span></label>
        </div> -->
        <div class="form-floating">
          <select id="gugun" class="form-select" v-model="estate.gugun">
            <option value="">주소(구군)</option>
          </select>
          <label>주소(구군)<span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <!-- <div class="form-floating">
          <input
            v-model="estate.dong"
            type="text"
            class="form-control"
            placeholder="주소(동) *"
          />
          <label>주소(동) <span class="text-danger">*</span></label>
        </div> -->
        <div class="form-floating">
          <select id="dong" class="form-select" v-model="estate.dong">
            <option value="">주소(동)</option>
          </select>
          <label>주소(동)<span class="text-danger">*</span></label>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="form-floating">
          <input
            v-model="estate.jibun"
            type="text"
            class="form-control"
            placeholder="주소(지번) *"
          />
          <label>주소(지번) <span class="text-danger">*</span></label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-floating">
          <input
            v-model="estate.description"
            type="text"
            class="form-control"
            placeholder="매물 설명 *"
          />
          <label>매물 설명 <span class="text-danger">*</span></label>
        </div>
      </div>

      <div class="col-12">
        <button @click="submitEstate" class="btn btn-primary float-end lift">
          작성완료
        </button>
        <router-link
          :to="{ name: 'IndexView' }"
          class="me-2 ml-3 btn btn-secondary float-end lift"
          >취소</router-link
        >
      </div>
    </div>
    <!-- <select-house-no-modal @modal-close="afterClose" /> -->
  </div>
  <Footer></Footer>
</template>

<style scoped>
.estate-list-header {
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: rgb(54, 59, 64);
}
h3 {
  margin: 0px;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.ck-content {
  height: 350px;
}
</style>
