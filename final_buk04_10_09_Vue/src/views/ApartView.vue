<script setup>
import VKakaoMap from "@/components/common/VKakaoMap.vue";

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
</template>

<style scoped></style>
