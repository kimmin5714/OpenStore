<script setup>
import { onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useMapStore } from "@/stores/map";

// Router
const router = useRouter();
const route = useRoute();

// Pinia
const storeMap = useMapStore();
const { estate } = storeToRefs(storeMap);
const { selectEstate } = storeMap;

// Methods
// onMounted(async () => {

// });
console.log("마운티드!!!");
const resp = await selectEstate(route.params.id);
if (resp !== "success") {
  alert("매물을 찾을 수 없습니다.");
}
watch(
  () => route.params.id,
  async () => {
    console.log("id 변경!!!!!");
    if (route.params.id) {
      const resp = await selectEstate(route.params.id);
      if (resp !== "success") {
        alert("매물을 찾을 수 없습니다.");
      }
    }
  }
);
onBeforeUnmount(() => {
  estate.value = undefined;
});
</script>

<template>
  <div class="apartdetail-container">
    <div class="tabbar-container">
      <header class="apartdetail-header">
        <div class="detail-btn-container">
          <router-link
            :to="{ name: 'apart-navbar-search' }"
            aria-current="page"
          >
            <button data-testid="back-button" class="detail-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.73839 18.1336C9.93458 18.3345 10.2577 18.3345 10.4539 18.1336L10.6502 17.9326C10.8397 17.7384 10.8398 17.4285 10.6504 17.2342L6.34615 12.8198C6.28438 12.7565 6.32927 12.65 6.41775 12.65H19.75C20.0261 12.65 20.25 12.4261 20.25 12.15V11.85C20.25 11.5739 20.0261 11.35 19.75 11.35H6.41775C6.32927 11.35 6.28438 11.2435 6.34615 11.1802L10.6504 6.76579C10.8398 6.57151 10.8397 6.26159 10.6502 6.06744L10.4539 5.86643C10.2577 5.66549 9.93458 5.66549 9.73839 5.86643L4.09103 11.6507C3.90138 11.845 3.90138 12.155 4.09103 12.3493L9.73839 18.1336Z"
                  fill="#14171A"
                  stroke="#14171A"
                  stroke-width="0.6"
                ></path>
              </svg>
            </button>
          </router-link>
        </div>
        <h2 class="header-container">
          <header
            class="header-text"
            style="opacity: 0; transition: opacity 0.2s ease 0s"
          >
            서울 강남구 삼성동 26-29
          </header>
        </h2>
        <div class="detail-btn2-container">
          <div class="sc-gahUGN gKkFSe">
            <button
              type="button"
              data-testid="bookmark-button"
              data-gtm-action="analytics_basic_bookmark"
              class="detail-btn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#14171A"
                xmlns="http://www.w3.org/2000/svg"
                class="swk-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 5.5H7C6.44772 5.5 6 5.94772 6 6.5L6 18.554L10.8929 16.6112C11.604 16.3289 12.396 16.3289 13.1071 16.6112L18 18.554V6.5C18 5.94772 17.5523 5.5 17 5.5ZM7 3.5C5.34315 3.5 4 4.84315 4 6.5V18.554C4 19.9668 5.42502 20.9342 6.73807 20.4128L11.631 18.4701C11.868 18.3759 12.132 18.3759 12.369 18.4701L17.2619 20.4128C18.575 20.9342 20 19.9668 20 18.554V6.5C20 4.84315 18.6569 3.5 17 3.5H7Z"
                  fill="#14171A"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div style="padding-top: env(safe-area-inset-top, 0)"></div>

      <div class="sc-bPOUnH iTMLih">
        <section style="flex: 1 1 0%; margin-top: 20px">
          <div style="background-color: rgb(255, 255, 255); min-height: 58px">
            <div class="detail-addr">
              {{ estate.sido }} {{ estate.gugun }} {{ estate.dong }}
              {{ estate.jibun }}
            </div>
            <div class="detail-addr2">
              <div class="detail-addr3">삼성로119길 37-15</div>
              <div style="display: flex"></div>
            </div>
          </div>
          <div style="padding-bottom: 4px">
            <hr color="#F0F4F7" class="bar" />
            <div class="detail-des">
              <div class="detail-des2">
                <div class="detail-des3">
                  <div class="detail-text">매매가</div>
                  <div class="detail-des4">
                    <div class="detail-des5">
                      <span class="detail-text2">{{ estate.dealAmount }}</span
                      ><span class="detail-text3"
                        >( 거래 종류 : {{ estate.dealClass }} )</span
                      >
                    </div>
                  </div>
                </div>
                <div class="detail-des2">
                  <div class="detail-des3">
                    <div class="detail-text">층</div>
                    <div class="detail-des4">
                      <div class="detail-des5">
                        <span class="detail-text2">{{ estate.floor }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="detail-des2">
                  <div class="detail-des3">
                    <div class="detail-text">면적</div>
                    <div class="detail-des4">
                      <div class="detail-des5">
                        <span class="detail-text2"
                          >{{ estate.area }} m<sup>3</sup></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="detail-des2">
                  <div class="detail-des3">
                    <div class="detail-text">매물 설명</div>
                    <div class="detail-des4">
                      <div class="detail-des5">
                        <span class="detail-description">{{
                          estate.description
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <header class="estate-detail-header">
          <div class="estate-detail-subject">근방 상권 매출</div>
        </header>
      </div>
      <div style="padding: 0px 20px">
        <hr color="#F0F4F7" class="bar" />
        <div class="detail-des">
          <div class="detail-des2">
            <div class="detail-des3">
              <div class="detail-text">근처 상권</div>
              <div class="detail-des4">
                <div class="detail-des5">
                  <span class="detail-text2">ㅇㅇㅇ 상권</span>
                </div>
              </div>
            </div>
            <div class="detail-des2">
              <div class="detail-des3">
                <div class="detail-text">상권 매출</div>
                <div class="detail-des4">
                  <div class="detail-des5">
                    <span class="detail-text2">100억원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <header class="estate-detail-header">
          <div class="estate-detail-subject">평균 실거래가</div>
        </header>
      </div>
      <div style="padding: 0px 20px">
        <hr color="#F0F4F7" class="bar" />
        <div class="detail-des">
          <div class="detail-des2">
            <div class="detail-des3">
              <div class="detail-text">해당 동</div>
              <div class="detail-des4">
                <div class="detail-des5">
                  <span class="detail-text2">ㅁㅁㅁ 동</span>
                </div>
              </div>
            </div>
            <div class="detail-des2">
              <div class="detail-des3">
                <div class="detail-text">평균 실거래가</div>
                <div class="detail-des4">
                  <div class="detail-des5">
                    <span class="detail-text2">50억원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  padding-top: 0px;
}
.header-text {
  opacity: 0;
  max-width: calc(1047px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detail-btn2-container {
  position: absolute;
  top: 12px;
  right: 8px;
  padding: 8px;
}
.detail-btn-container {
  position: absolute;
  top: 12px;
  left: 8px;
  padding: 8px;
}
.detail-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(20, 23, 26);
}
.detail-text2 {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(20, 23, 26);
}
.detail-text3 {
  margin-left: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(90, 96, 102);
}
.detail-des {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}
.detail-des2 {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
}
.detail-des3 {
  flex: 1 1 0%;
  display: flex;
  margin-bottom: 16px;
}
.detail-des3 > :not(:last-child) {
  margin-right: 16px;
}
.detail-des4 {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(20, 23, 26);
}
.detail-des5 {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.detail-text {
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  color: rgb(90, 96, 102);
}
.bar {
  height: 1px;
  width: 100%;
  max-width: 100%;
  border: none;
  background-color: rgb(240, 244, 247);
  opacity: 1;
  margin: 16px 0px;
}
.detail-addr2 {
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
}
.detail-addr3 {
  margin-right: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: rgb(123, 132, 140);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail-addr {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: rgb(20, 23, 26);
}
.iTMLih {
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 0px 20px;
  margin-bottom: 20px !important;
}
.detail-detail {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.detail-font1 {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(20, 23, 26);
}
.detail-font2 {
  margin-left: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(90, 96, 102);
}
.detail-container > :not(:last-child) {
  margin-right: 16px;
}
.detail-container {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}
.apartdetail-container {
  flex: 1 1 0%;
  display: flex;
  margin-bottom: 16px;
}
.estate-detail-header {
  width: 100%;
  background-color: white;
  padding: 24px 20px 0px;
  border-top: 12px solid rgb(245, 248, 250);
}
.estate-detail-subject {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: rgb(20, 23, 26);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
}
.apartdetail-container {
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  height: 100%;
  background: rgb(255, 255, 255);
  overflow: hidden;
  transform: translateZ(0px);
}
.tabbar-container {
  padding-top: 56px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.apartdetail-header {
  height: 62px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: calc(56px + env(safe-area-inset-top, 0));
  position: fixed;
  top: 0px;
  left: 0px;
  border-radius: inherit;
  background-color: rgb(255, 255, 255);
  color: rgb(20, 23, 26);
  z-index: 50;
  transition: transform 0.3s ease 0s;
}
.detail-btn {
  background-color: transparent;
  color: currentcolor;
  border: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
}
.word {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: rgb(20, 23, 26);
}
.detail-section {
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 0px 20px;
  margin-bottom: 20px !important;
}
</style>
