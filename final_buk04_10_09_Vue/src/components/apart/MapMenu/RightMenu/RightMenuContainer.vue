<script setup>
import RightMenuNav from "@/components/apart/MapMenu/RightMenu/RightMenuItem/RightMenuNav.vue";
</script>

<template>
  <div id="right-menu-container">
    <RightMenuNav />
  </div>
</template>

<style scoped>
#right-menu-container {
  position: absolute;
  /* left: calc(100vw - 120px); */
  right: 0px;
  height: 100vh;
  background-color: red;
  display: flex;
}
</style>
