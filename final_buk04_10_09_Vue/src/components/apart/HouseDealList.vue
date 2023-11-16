<script setup>
import { useApartStore } from "@/stores/apart";
import { storeToRefs } from "pinia";

// Tools
const storeApart = useApartStore();
const { houseDealList, selectPoint } = storeToRefs(storeApart);

// Methods
const initHouseDealList = () => {
  houseDealList.value.length = 0;
};
</script>

<template>
  <button v-show="houseDealList.length != 0" @click="initHouseDealList">
    아파트 정보로 돌아가기
  </button>
  <div class="mt-3">
    <h5>
      아파트 이름 : <strong>{{ selectPoint.apartmentName }}</strong
      ><br />
      지번 : <strong>{{ selectPoint.roadName }}</strong>
    </h5>
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th>거래 금액</th>
          <th>거래 년도</th>
          <th>거래 월</th>
          <th>거래 일</th>
          <th>면적</th>
          <th>층</th>
        </tr>
      </thead>
      <tbody id="aptlist">
        <tr v-for="houseDeal in houseDealList">
          <!-- <tr class="text-center"> -->
          <td scope="row">{{ houseDeal.dealAmount }}</td>
          <td>{{ houseDeal.dealYear }}</td>
          <td>{{ houseDeal.dealMonth }}</td>
          <td>{{ houseDeal.dealDay }}</td>
          <td>{{ houseDeal.area }}</td>
          <td>{{ houseDeal.floor }}</td>
          <!-- </tr> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
