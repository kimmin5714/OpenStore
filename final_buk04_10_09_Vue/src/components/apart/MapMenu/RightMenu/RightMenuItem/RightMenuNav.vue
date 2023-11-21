<script setup>
import { useMapStore } from "@/stores/map";
import { storeToRefs } from "pinia";
const storeMap = useMapStore();
const { isStoreListClicked, isDealCostSelected } = storeToRefs(storeMap);

const doStoreList = () => {
  isStoreListClicked.value = true;
};
const doDealCostAvgByDong = () => {
  isDealCostSelected.value = true;
};
</script>

<template>
  <div id="right-menu-nav">
    <div class="nav-item">
      <button class="item-button" @click="doStoreList">주변 상가 정보</button>
    </div>
    <!-- <div class="nav-item">
      <button class="item-button" @click="doStoreList">주변 상가 정보</button>
    </div> -->
  </div>
</template>

<style scoped>
#right-menu-nav {
  /* position: absolute;
  right: 20px;

  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px 0px 12px;
  width: 70px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-right: 1px solid rgb(223, 229, 235); */
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 84px;
  bottom: 40px;
  right: 20px;
  z-index: 1000;

  background-color: blue;
}
.nav-item {
  border-radius: 6px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 4px 24px;
}
.item-button {
  width: 44px;
  height: 50px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: inherit;
  background-color: rgb(255, 255, 255);
  font-size: 10px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(26, 140, 255);
}
</style>
