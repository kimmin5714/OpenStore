<script setup>
import VKakaoMap from "@/components/common/VKakaoMap.vue";
import MapStoreFilter from "../components/apart/MapStoreFilter/MapStoreFilter.vue";
// import Apartmap from "../components/apart/Apartmap.vue";

const list = [];
const a = {};
</script>

<!-- <template>
  <div class="container p-4">
    <div class="row">
      <Apartmap />
    </div>
  </div>
</template> -->

<template>
  <VKakaoMap :pointList="list" :selectPoint="a" />
  <MapStoreFilter />
</template>

<style scoped></style>
