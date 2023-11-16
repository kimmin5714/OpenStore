<script setup>
import LeftMenuContainer from "@/components/apart/MapMenu/LeftMenu/LeftMenuContainer.vue";
import RightMenuContainer from "@/components/apart/MapMenu/RightMenu/RightMenuContainer.vue";
</script>

<template>
  <div id="map-menu">
    <LeftMenuContainer />
    <RightMenuContainer />
  </div>
</template>

<style scoped>
#map-menu {
  position: absolute;
  z-index: 2;
}
</style>
