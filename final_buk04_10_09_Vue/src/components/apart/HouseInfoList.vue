<script setup>
import { ref } from "vue";
import HouseInfoListItem from "@/components/apart/HouseInfoListItem.vue";
import { useApartStore } from "@/stores/apart";
import { storeToRefs } from "pinia";

// Tools
const storeApart = useApartStore();
const { houseInfoList } = storeToRefs(storeApart);

// Data

// Method
</script>

<template>
  <table class="table table-hover text-center">
    <thead>
      <tr>
        <th>아파트 코드</th>
        <th>아파트이름</th>
        <th>건축년</th>
        <th>도로명</th>
        <th>동</th>
        <th>위도</th>
        <th>경도</th>
      </tr>
    </thead>
    <tbody id="aptlist">
      <!-- <c:forEach var="house" items="${houseList}"> -->

      <HouseInfoListItem v-for="house in houseInfoList" :house="house" />

      <h3 v-show="houseInfoList.length == 0">검색 결과가 존재하지 않습니다.</h3>
      <!-- </c:forEach> -->
    </tbody>
  </table>
</template>

<style scoped></style>
