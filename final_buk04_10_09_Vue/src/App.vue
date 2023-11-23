<script setup>
import { RouterView } from "vue-router";
import HeadingNav from "@/components/common/HeadingNav.vue";
</script>

<template>
  <RouterView />
</template>

<style>
a {
  text-decoration: none;
  color: black;
}
* {
  font-family: "프리텐다드", "Pretendard-Regular";
  /* color: rgba(0, 0, 0, 0); */
}
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
}
</style>
