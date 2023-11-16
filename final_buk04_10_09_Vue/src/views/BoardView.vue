<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { storeToRefs } from "pinia";
import { nextTick } from "vue";
import { onBeforeUnmount } from "vue";

// Tools
const storeBoard = useBoardStore();
const { currentPage, totalPage, key, word } = storeToRefs(storeBoard);

// Method
// onBeforeUnmount(() => {
//   nextTick();
// });
// onBeforeRouteLeave((to, from, next) => {
//   console.log("to:", to);
//   console.log("from:", from);
//   next();
// });
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
