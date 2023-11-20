<script setup></script>

<template>
  <div id="left-menu-body">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
#left-menu-body {
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  height: 100%;
  background: rgb(255, 255, 255);
  overflow: hidden;
  transform: translateZ(0px);
}
</style>
