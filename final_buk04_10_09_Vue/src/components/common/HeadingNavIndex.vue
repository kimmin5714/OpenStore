<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin";
import { useMapStore } from "@/stores/map";
import { storeToRefs } from "pinia";

import { commercialProperties } from "@/api/api";

const route = useRoute();
const router = useRouter();

// Pinia
const { userInfo, isLogin } = storeToRefs(useAdminStore());
const { userLogout, getUserInfo } = useAdminStore();
const { insertEstateRandomly } = useMapStore();

// Data
// const userinfo = null;
// const userinfo = ref({
//   userId: "",
//   userName: "",
// });

// Method
const moveBoard = () => {
  // currentPage.value = 1;
  // totalPage.value = 1;
  // key.value = "";
  // word.value = "";
  // router.replace({ name: "BoardList" });
  router.push({ name: "BoardList" });
};

const moveEstateInsert = () => {
  router.push({ name: "EstateInsert" });
};
const checkLogin = async () => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    await getUserInfo(token);
  }
};
const logout = () => {
  userLogout(userInfo.value.userId);
};
// onMounted(() => {
checkLogin();
// });

const importData = async () => {
  await commercialProperties();
  console.log("Start Data Import");
};
const createRandomEstate = async () => {
  const resp = await insertEstateRandomly();
  if (resp === "success") {
    alert("자동생성 성공");
  } else {
    alert("자동생성 실패");
  }
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg"
    style="background-color: rgb(157, 191, 200); font-size: large">
    <div class="container">
      <RouterLink
        class="navbar-brand text-warning fw-bold"
        :to="{ name: 'IndexView' }">
        <a href="#" style="color: #0d6efd">
          <img
            src="@/assets/img/header-logo.jpg"
            alt=""
            width="50"
            height="40" />
        </a>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px">
          <template v-if="isLogin">
            <li class="nav-item nav">
              <a
                class="nav-link"
                aria-current="page"
                style="font-weight: bold; color: white">
                <strong>{{ userInfo.userName }}</strong> ({{
                  userInfo.userId
                }})님 안녕하세요.</a
              >
            </li>
            <li class="nav-item nav">
              <button
                style="color: white; font-weight: bolder"
                class="nav-link"
                aria-current="page"
                @click="moveBoard">
                공지사항
              </button>
            </li>
            <li class="nav-item nav">
              <router-link
                :to="{ name: 'user-modify' }"
                class="nav-link"
                aria-current="page"
                >정보 수정</router-link
              >
            </li>
            <li class="nav-item nav">
              <router-link
                :to="{ name: 'IndexView' }"
                class="nav-link"
                aria-current="page"
                @click="logout"
                >로그아웃</router-link
              >
            </li>
          </template>
          <template v-else>
            <li class="nav-item nav">
              <router-link
                :to="{ name: 'EstateInsert' }"
                class="nav-link"
                aria-current="page"
                >매물 등록</router-link
              >
            </li>
            <li class="nav-item nav">
              <router-link
                :to="{ name: 'BoardView' }"
                class="nav-link"
                aria-current="page"
                >공지사항</router-link
              >
            </li>
            <li class="nav-item nav">
              <router-link
                :to="{ name: 'user-login' }"
                class="nav-link"
                aria-current="page"
                >로그인</router-link
              >
            </li>
            <li class="nav-item nav">
              <router-link
                :to="{ name: 'user-join' }"
                class="nav-link"
                aria-current="page"
                >회원가입</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  color: rgb(255, 255, 255);
  font-weight: bolder;
}
* {
  /* font-family: "Nanum Gothic" !important; */
  font-weight: bold !important;
}
.nav {
  margin: 5px 10px;
}
</style>
