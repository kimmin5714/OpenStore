<script setup>
import { searchApt } from "@/api/apart.js";
import { useApartStore } from "@/stores/apart";
import { storeToRefs } from "pinia";

// Tools
const props = defineProps({ house: Object });
const storeApart = useApartStore();
const { houseDealList, selectPoint } = storeToRefs(storeApart);
const { selectApt } = storeApart;

// Mehtod
const doSearchApt = async () => {
  // const success = (response) => {
  //   if (response.status == 200) {
  //     props.houseDealList.length = 0;
  //     props.houseDealList.push(...response.data);
  //     // 결과 메시지 출력
  //     console.log(`searchApt 성공. 검색결과 ${props.houseDealList.length}건`);
  //   }
  // };
  // const fail = (error) => console.log(error);
  // console.log(props.house);
  // searchApt(props.house.aptCode, success, fail);
  const resp = await selectApt(props.house.aptCode);
  if (resp === "success") {
    console.log(`searchApt 성공. 검색결과 ${houseDealList.value.length}건`);
  } else if (resp === "empty") {
    console.log("searchApt 성공. 검색결과 없음");
  }

  selectPoint.value = props.house;
};
</script>

<template>
  <tr class="text-center apart-row" @click="doSearchApt">
    <td scope="row">
      <!-- <a
              href="${root}/house?mode=search-apt&aptCode=${house.aptCode}&dealYear=${year}&dealMonth=${month}"
              >${house.aptCode}</a
            > -->
      {{ house.aptCode }}
    </td>
    <td class="apart-name">
      {{ house.apartmentName }}
    </td>
    <td>{{ house.buildYear }}</td>
    <td>{{ house.roadName }}</td>
    <td>{{ house.dong }}</td>
    <td class="apart-lng">{{ house.lng }}</td>
    <td class="apart-lat">{{ house.lat }}</td>
  </tr>
</template>

<style scoped></style>
