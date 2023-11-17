<script setup>
import LeftMenuNav from "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/LeftMenuNav.vue";
import LeftMenuBody from "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/LeftMenuBody.vue";
</script>

<template>
  <div id="right-menu-container">
    <LeftMenuNav />
    <LeftMenuBody />
  </div>
</template>

<style scoped>
#right-menu-container {
  position: absolute;
  left: 90vw;
  height: 100vh;
  width: 100px;
  background-color: red;
  display: flex;
}
</style>
