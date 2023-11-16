<script setup></script>

<template>
  <div>
    <!-- Suspense : Pinia에서 비동기 컴포넌트를 렌더링하기 위해서는 그의 부모에서 Suspense 요소로 감싸야 한다. -->
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<style scoped></style>
