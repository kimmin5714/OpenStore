<script setup>
import LeftMenuContainer from "@/components/apart/MapMenu/LeftMenu/LeftMenuContainer.vue";
</script>

<template>
  <div id="map-menu">
    <LeftMenuContainer />
  </div>
</template>

<style scoped>
#map-menu {
  position: absolute;
  z-index: 2;
}
</style>
