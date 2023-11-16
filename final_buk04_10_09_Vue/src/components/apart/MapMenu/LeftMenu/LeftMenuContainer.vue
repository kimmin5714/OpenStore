<script setup>
import LeftMenuNav from "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/LeftMenuNav.vue";
import LeftMenuBody from "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/LeftMenuBody.vue";
</script>

<template>
  <div id="left-menu-container">
    <LeftMenuNav />
    <LeftMenuBody />
  </div>
</template>

<style scoped>
#left-menu-container {
  height: 100vh;
  background-color: red;
  display: flex;
}
</style>
