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
const checkLogin = () => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    getUserInfo(token);
  }
};
const logout = () => {
  userLogout(userInfo.value.userId);
};
onMounted(() => {
  checkLogin();
});

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
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container">
      <RouterLink
        class="navbar-brand text-warning fw-bold"
        :to="{ name: 'IndexView' }"
      >
        Open Store
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              aria-current="page"
              :to="{ name: 'apart-view' }"
            >
              지도
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <a class="btn btn-outline-danger" @click="importData">
              DATA IMPORT
            </a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-danger" @click="createRandomEstate">
              !!!매물 랜덤 생성!!!
            </a>
          </li> -->
        </ul>

        <ul
          class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <template v-if="isLogin">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" style="font-weight: bold">
                <strong>{{ userInfo.userName }}</strong> ({{
                  userInfo.userId
                }})님 안녕하세요.</a
              >
            </li>
            <li class="nav-item">
              <button class="nav-link" aria-current="page" @click="moveBoard">
                공지사항
              </button>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'member-modify' }"
                class="nav-link"
                aria-current="page"
                >정보 수정</router-link
              >
            </li>
            <li class="nav-item">
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
            <li class="nav-item">
              <button class="nav-link" aria-current="page" @click="moveBoard">
                공지사항
              </button>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'user-login' }"
                class="nav-link"
                aria-current="page"
                >로그인</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'member-join' }"
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

<style scoped></style>
