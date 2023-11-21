<script setup></script>

<template>
  <div class="apartdetail-container">
    <div class="tabbar-container">
      <header class="apartdetail-header">
        <div class="sc-gelMue iFEMD">
          <router-link
            :to="{ name: 'apart-navbar-search' }"
            aria-current="page">
            <button data-testid="back-button" class="detail-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.73839 18.1336C9.93458 18.3345 10.2577 18.3345 10.4539 18.1336L10.6502 17.9326C10.8397 17.7384 10.8398 17.4285 10.6504 17.2342L6.34615 12.8198C6.28438 12.7565 6.32927 12.65 6.41775 12.65H19.75C20.0261 12.65 20.25 12.4261 20.25 12.15V11.85C20.25 11.5739 20.0261 11.35 19.75 11.35H6.41775C6.32927 11.35 6.28438 11.2435 6.34615 11.1802L10.6504 6.76579C10.8398 6.57151 10.8397 6.26159 10.6502 6.06744L10.4539 5.86643C10.2577 5.66549 9.93458 5.66549 9.73839 5.86643L4.09103 11.6507C3.90138 11.845 3.90138 12.155 4.09103 12.3493L9.73839 18.1336Z"
                  fill="#14171A"
                  stroke="#14171A"
                  stroke-width="0.6"></path>
              </svg>
            </button>
          </router-link>
        </div>
        <h2 class="sc-lgholE fDYjZc">
          <header
            class="sc-jhSRwE hUcgRA"
            style="opacity: 0; transition: opacity 0.2s ease 0s">
            서울 동작구 상도동 296-9
          </header>
        </h2>
        <div class="sc-ciyUsT cRtaWC">
          <div class="sc-gahUGN gKkFSe">
            <button
              type="button"
              data-testid="bookmark-button"
              data-gtm-action="analytics_basic_bookmark"
              class="detail-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#14171A"
                xmlns="http://www.w3.org/2000/svg"
                class="swk-icon">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 5.5H7C6.44772 5.5 6 5.94772 6 6.5L6 18.554L10.8929 16.6112C11.604 16.3289 12.396 16.3289 13.1071 16.6112L18 18.554V6.5C18 5.94772 17.5523 5.5 17 5.5ZM7 3.5C5.34315 3.5 4 4.84315 4 6.5V18.554C4 19.9668 5.42502 20.9342 6.73807 20.4128L11.631 18.4701C11.868 18.3759 12.132 18.3759 12.369 18.4701L17.2619 20.4128C18.575 20.9342 20 19.9668 20 18.554V6.5C20 4.84315 18.6569 3.5 17 3.5H7Z"
                  fill="#14171A"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div class="detail-section">
        <section style="flex: 1 1 0%; margin-top: 20px">
          <div style="background-color: rgb(255, 255, 255); min-height: 58px">
            <div class="word">서울 동작구 상도동 296-9</div>
            <div></div>
          </div>
        </section>
      </div>

      <hr color="#F0F4F7" />
      <span>매물 상세 정보</span>
      <div class="sc-bvfSZU bHobPb">
        <div class="sc-jQckMZ jsYRpn">
          <div class="sc-dWbBLu jAMfTw">매매 가격</div>
          <div class="sc-bbCjZD cIXtwt">
            <span class="sc-hIKods cVcxSv">ㅇㅇㅇ억</span>
          </div>
        </div>
        <div class="sc-jQckMZ jsYRpn">
          <div class="sc-dWbBLu jAMfTw">면적</div>
          <div class="sc-bbCjZD cIXtwt">
            <span class="sc-hIKods cVcxSv">ㅇㅇㅇ</span>
          </div>
        </div>
        <div class="sc-jQckMZ jsYRpn">
          <div class="sc-dWbBLu jAMfTw">주소</div>
          <div class="sc-bbCjZD cIXtwt">
            <span class="sc-hIKods cVcxSv">ㅇㅇㅇㅇㅇㅇㅇ</span>
          </div>
        </div>
      </div>

      <hr color="#F0F4F7" />
      <span> 근방 상권 매출</span>

      <hr color="#F0F4F7" />
      <span> 이 지역 평균 실거래가</span>
    </div>
  </div>
</template>

<style scoped>
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
