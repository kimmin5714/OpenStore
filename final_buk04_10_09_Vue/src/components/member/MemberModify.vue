<script setup>
import MemberFormItem from "./item/MemberFormItem.vue";
</script>

<template>
  <div class="container">
    <div class="card-body p-5">
      <h1 class="text-uppercase text-center mb-5 fs-2">회원 정보 수정</h1>
      <div class="row justify-content-center">
        <div class="col-lg-10 text-start">
          <MemberFormItem type="modify" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
