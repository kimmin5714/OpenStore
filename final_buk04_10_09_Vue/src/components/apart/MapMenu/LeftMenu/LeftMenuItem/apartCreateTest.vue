<script setup>
import { ref } from "vue";
import { useMapStore } from "@/stores/map";

// Pinia
const storeMap = useMapStore();
const { insertEstate } = storeMap;

// 매물 등록 함수 호출 및 매물 객체 생성
const estate = ref({
  dealClass: "테스트",
  dealAmount: "",
  floor: "",
  area: "",
  description: "",
  joinYear: "",
  joinMonth: "",
  joinDay: "",
  sido: "",
  gugun: "",
  dong: "",
  jibun: "",
  dongCode: "",
  lat: "",
  lon: "",
});

const doInsert = async () => {
  const resp = await insertEstate(estate.value);
  if (resp === "success") {
    alert("등록이 완료되었습니다.");
  } else {
    console.log(resp);
    alert("등록에 실패했습니다.");
  }
};
</script>

<template>
  <button class="btn btn-outline-primary" @click="doInsert">
    매물 등록!!!!!
  </button>
</template>

<style scoped></style>
