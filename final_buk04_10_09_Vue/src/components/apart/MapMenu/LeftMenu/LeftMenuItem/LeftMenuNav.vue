<script setup>
import { useAdminStore } from "@/stores/admin";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Pinia
const { userInfo, isLogin } = storeToRefs(useAdminStore());
const { userLogout, getUserInfo } = useAdminStore();

const checkLogin = async () => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    await getUserInfo(token);
  }
};
const logout = async () => {
  await userLogout(userInfo.value.userId);
  alert("로그아웃되었습니다.");
  router.push({ name: "IndexView" });
};
checkLogin();
</script>

<template>
  <div id="left-menu-nav">
    <div style="margin-bottom: 20px; cursor: pointer">
      <RouterLink
        class="navbar-brand text-warning fw-bold"
        :to="{ name: 'IndexView' }"
      >
        <a href="#" style="color: #0d6efd">
          <img
            src="@/assets/img/header-logo.png"
            alt=""
            width="36"
            height="29"
          />
        </a>
      </RouterLink>
    </div>

    <div style="width: 100%; padding: 0px 10px">
      <hr color="#DFE5EB" class="bar" />
    </div>

    <ul class="navbar-list-ul">
      <router-link
        :to="{ name: 'apart-navbar-search' }"
        aria-current="page"
        class="go"
      >
        <li class="navbar-list-li">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#BCC4CC"
            xmlns="http://www.w3.org/2000/svg"
            class="swk-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8937 18.4513C15.2741 19.7341 13.2265 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11C20.5 13.2275 19.7334 15.2759 18.4496 16.8959L22.2763 20.7226C22.7058 21.1521 22.7058 21.8486 22.2763 22.2782C21.8467 22.7078 21.1502 22.7078 20.7206 22.2782L16.8937 18.4513ZM18.3 11C18.3 15.0317 15.0317 18.3 11 18.3C6.96832 18.3 3.7 15.0317 3.7 11C3.7 6.96832 6.96832 3.7 11 3.7C15.0317 3.7 18.3 6.96832 18.3 11Z"
              fill="#1A8CFF"
            ></path>
          </svg>
          <div class="nav-text">탐색</div>
        </li>
      </router-link>
      <router-link :to="{ name: 'BoardView' }" aria-current="page" class="go">
        <li class="navbar-list-li">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#BCC4CC"
            xmlns="http://www.w3.org/2000/svg"
            class="swk-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9993 20C10.9993 20.5523 11.447 21 11.9993 21C12.5515 21 12.9993 20.5523 12.9993 20H14.9993C14.9993 21.6569 13.6561 23 11.9993 23C10.3424 23 8.99926 21.6569 8.99926 20H10.9993Z"
              fill="#1A8CFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.3033 18L19.0675 17.515C18.4742 16.2945 18.1659 14.9552 18.1659 13.5982V10.1667C18.1659 6.76091 15.405 4 11.9993 4C8.5935 4 5.83259 6.76091 5.83259 10.1667V13.5982C5.83259 14.9552 5.52432 16.2945 4.93104 17.515L4.69527 18H19.3033ZM11.9993 2C7.48893 2 3.8326 5.65634 3.8326 10.1667V13.5982C3.8326 14.6523 3.59314 15.6926 3.1323 16.6406L2.75088 17.4252C2.17245 18.6151 3.03907 20 4.36213 20H19.6364C20.9595 20 21.8261 18.6151 21.2476 17.4252L20.8662 16.6406C20.4054 15.6926 20.1659 14.6523 20.1659 13.5982V10.1667C20.1659 5.65634 16.5096 2 11.9993 2Z"
              fill="#1A8CFF"
            ></path>
          </svg>
          <div class="nav-text">공지사항</div>
        </li>
      </router-link>
      <template v-if="!isLogin">
        <router-link
          :to="{ name: 'user-login' }"
          aria-current="page"
          class="go"
        >
          <li class="navbar-list-li">
            <svg
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="swk-icon"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
            <div class="nav-text">로그인</div>
          </li>
        </router-link>
        <router-link :to="{ name: 'user-join' }" aria-current="page" class="go">
          <li class="navbar-list-li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="swk-icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              />
              <path
                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z"
              />
            </svg>
            <div class="nav-text">회원가입</div>
          </li>
        </router-link>
      </template>
      <template v-else>
        <router-link
          :to="{ name: 'EstateInsert' }"
          aria-current="page"
          class="go"
        >
          <li class="navbar-list-li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="swk-icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5"
              />
              <path
                d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
              />
            </svg>
            <div class="nav-text">매물 등록</div>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'user-modify' }"
          aria-current="page"
          class="go"
        >
          <li class="navbar-list-li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="swk-icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"
              />
              <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              />
            </svg>
            <div class="nav-text">정보 수정</div>
          </li>
        </router-link>
        <a
          @click="logout"
          aria-current="page"
          class="go"
          style="cursor: pointer"
        >
          <li class="navbar-list-li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="swk-icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"
              />
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <div class="nav-text">로그아웃</div>
          </li>
        </a>
      </template>
    </ul>
  </div>
</template>

<style scoped>
#left-menu-nav {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px 0px 12px;
  width: 70px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-right: 1px solid rgb(223, 229, 235);
  z-index: 1000;
}
.swk-icon {
  vertical-align: middle;
  width: 24;
  height: 24;
  fill: #0d6efd;
  margin-bottom: 10px;
}
ul,
p {
  margin: 0px;
  padding: 0px;
}
.navbar-list-ul {
  list-style-type: none;
  padding-left: 0%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.navbar-list-li {
  display: list-item;
  text-align: center;
  width: 60px;
  position: relative;
  padding: 16px 8px;
  transition: background-color 0.2s ease-in-out;
  border-radius: 10px;
}

.navbar-list-li:hover {
  background-color: #eee;
}
svg {
  vertical-align: middle;
}
.bar {
  height: 1px;
  width: 100%;
  max-width: 100%;
  border: none;
  background-color: rgb(223, 229, 235);
  opacity: 1;
  margin: 0px;
}
.go {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: var(--bs-link-color);
  color: #0d6efd;
}
.nav-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgb(123, 132, 140);
  text-align: center;
}
</style>
