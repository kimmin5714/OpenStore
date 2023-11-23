<script setup>
import HeadingNavIndex from "@/components/common/HeadingNavIndex.vue";
import Footer from "../components/common/Footer.vue";
</script>

<template>
  <!-- <main
    class="container border col-10 p-5 d-flex flex-column justify-content-center"
  >
    <div class="d-flex justify-content-evenly">
      <RouterLink
        :to="{ name: 'ApartView' }"
        class="text-decoration-none text-dark"
      >
        <div class="select-menu d-flex flex-column fw-bold fs-2 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            fill="currentColor"
            class="bi bi-buildings"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"
            />
            <path
              d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"
            />
          </svg>
          <br />
          아파트
        </div>
      </RouterLink>
    </div>
  </main> -->

  <main class="sc-bbDxtK iNYtyb">
    <!-- 페이지 상부 -->
    <HeadingNavIndex />
    <section class="sc-cjpfIh dxleaB">
      <div class="sc-jjeeWu ihRlrO">
        <img src="src\assets\img\v725-te-22.jpg" alt="background" />
        <div class="sc-KXvuv jtYTiW">
          <h2 class="sc-eTZVu nQjLg">
            소상공인 상권 정보 솔루션<br />오픈스토어
          </h2>
          <div class="sc-NjEqx kQLQuf">
            <a
              data-gtm-action="mainhome_main_search_box_chips_click"
              data-gtm-label="mapo"
              class="sc-jlqnSw cXrUXl"></a>
          </div>

          <div
            class="sc-hsZwpi gGbVFK sc-bsqviP djZIeE sc-cWiZSr kxttkI dropdown">
            <form>
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'apart-view' }">
                <button class="sc-gcHwEF tbLGf">매물 지도 보러가기</button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--  페이지 하부 -->
    <section class="sc-fLHMoE dYa-dTS sc-jRZndg hgliO">
      <div class="sc-fxhZON glONzd">
        <h2 class="sc-fZSDuZ jNyKgC">
          건축의 모든 과정을 랜드북이 함께합니다.
        </h2>
        <div class="sc-dMuQbb gtLrFf">
          <a class="sc-hGNIFk bmEnfh" href="/#analytics"
            ><p class="sc-hEBzJi losPqi">아직 토지를 고르는 중인가요?</p>
            <p class="sc-dOGYXd dXhram">
              AI 건축분석으로 빠르게<br />비교하고 선택하세요
            </p>
            <div class="sc-cBBlDJ cMXFRm">
              <svg
                width="28"
                height="39"
                viewBox="0 0 28 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 9.67504C7.79732 9.21943 8.53601 9.21943 8.99162 9.67504L14 14.6834L19.0084 9.67504C19.464 9.21943 20.2027 9.21943 20.6583 9.67504C21.1139 10.1307 21.1139 10.8693 20.6583 11.325L14.825 17.1583C14.3693 17.6139 13.6307 17.6139 13.175 17.1583L7.34171 11.325C6.8861 10.8693 6.8861 10.1307 7.34171 9.67504Z"
                  fill="#0064D6"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 20.675C7.79732 20.2194 8.53601 20.2194 8.99162 20.675L14 25.6834L19.0084 20.675C19.464 20.2194 20.2027 20.2194 20.6583 20.675C21.1139 21.1307 21.1139 21.8693 20.6583 22.325L14.825 28.1583C14.3693 28.6139 13.6307 28.6139 13.175 28.1583L7.34171 22.325C6.8861 21.8693 6.8861 21.1307 7.34171 20.675Z"
                  fill="#0064D6"></path>
              </svg></div></a
          ><a class="sc-hGNIFk bmEnfh" href="/#consult"
            ><p class="sc-hEBzJi losPqi">내 토지의 정확한 진단이 필요한가요?</p>
            <p class="sc-dOGYXd dXhram">
              건축 컨설팅을 통해 전문가에게<br />궁금한 것들을 물어보세요
            </p>
            <div class="sc-cBBlDJ cMXFRm">
              <svg
                width="28"
                height="39"
                viewBox="0 0 28 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 9.67504C7.79732 9.21943 8.53601 9.21943 8.99162 9.67504L14 14.6834L19.0084 9.67504C19.464 9.21943 20.2027 9.21943 20.6583 9.67504C21.1139 10.1307 21.1139 10.8693 20.6583 11.325L14.825 17.1583C14.3693 17.6139 13.6307 17.6139 13.175 17.1583L7.34171 11.325C6.8861 10.8693 6.8861 10.1307 7.34171 9.67504Z"
                  fill="#0064D6"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 20.675C7.79732 20.2194 8.53601 20.2194 8.99162 20.675L14 25.6834L19.0084 20.675C19.464 20.2194 20.2027 20.2194 20.6583 20.675C21.1139 21.1307 21.1139 21.8693 20.6583 22.325L14.825 28.1583C14.3693 28.6139 13.6307 28.6139 13.175 28.1583L7.34171 22.325C6.8861 21.8693 6.8861 21.1307 7.34171 20.675Z"
                  fill="#0064D6"></path>
              </svg></div></a
          ><a class="sc-hGNIFk bmEnfh" href="/#pm"
            ><p class="sc-hEBzJi losPqi">혼자서는 건축이 어려우신가요?</p>
            <p class="sc-dOGYXd dXhram">
              PM 건축으로 랜드북팀과<br />건축의 모든 과정을 함께하세요
            </p>
            <div class="sc-cBBlDJ cMXFRm">
              <svg
                width="28"
                height="39"
                viewBox="0 0 28 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 9.67504C7.79732 9.21943 8.53601 9.21943 8.99162 9.67504L14 14.6834L19.0084 9.67504C19.464 9.21943 20.2027 9.21943 20.6583 9.67504C21.1139 10.1307 21.1139 10.8693 20.6583 11.325L14.825 17.1583C14.3693 17.6139 13.6307 17.6139 13.175 17.1583L7.34171 11.325C6.8861 10.8693 6.8861 10.1307 7.34171 9.67504Z"
                  fill="#0064D6"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34171 20.675C7.79732 20.2194 8.53601 20.2194 8.99162 20.675L14 25.6834L19.0084 20.675C19.464 20.2194 20.2027 20.2194 20.6583 20.675C21.1139 21.1307 21.1139 21.8693 20.6583 22.325L14.825 28.1583C14.3693 28.6139 13.6307 28.6139 13.175 28.1583L7.34171 22.325C6.8861 21.8693 6.8861 21.1307 7.34171 20.675Z"
                  fill="#0064D6"></path>
              </svg></div
          ></a>
        </div>
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<style scoped>
.fKwRBh {
  position: absolute;
  bottom: 0px px;
  border-top: 1px solid rgb(223, 229, 235);
  width: 100%;
  height: 72px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.fKwRBh a {
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgb(255, 255, 255);
  text-decoration: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.dxleaB {
  position: relative;
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.kWrUYh {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 0px;
}
.hoCfuw {
  position: absolute;
  width: 100%;
  height: 100%;
}
.ihRlrO {
  position: relative;
  width: 100%;
  height: 100%;
}
.hoCfuw > div:first-child {
  z-index: initial;
  height: 100%;
}
.ihRlrO img {
  width: 100%;
  height: 93%;
  object-fit: cover;
}
.jtYTiW {
  position: absolute;
  width: 100%;
  height: 83%;
  top: 0px;
  left: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
}
.nQjLg {
  font-weight: 700;
  font-size: 74px;
  line-height: 96px;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
  letter-spacing: 0.1px;
}
.djZIeE {
  margin-left: 24px;
  transition: none 0s ease 0s;
}
.gGbVFK {
  position: relative;
}
.djZIeE form {
  background: rgb(255, 255, 255);
  border-radius: 36px;
  border: 1px solid rgb(240, 244, 247);
  padding: 0px 20px;
  width: 380px;
  height: 44px;
}
.kxttkI form {
  height: 56px;
  width: 555px !important;
}
.lbzVUA {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  border-radius: 24px;
  border: 2px solid rgb(0, 130, 229);
  padding: 0px 16px 0px 24px;
  height: 44px;
  background-color: rgb(255, 255, 255);
}
.jCTgjP {
  margin-right: 8px;
  height: 30px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  word-break: keep-all;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(54, 59, 64);
  border: none;
}
.tbLGf {
  width: 100%;
  height: 40px;
  border: 0px;
  border-radius: 40px;
  background: rgb(240, 248, 255);
  outline: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 6px;
}
.kQLQuf {
  display: flex;
  margin-top: 0px;
  margin-bottom: 30px;
}
.cXrUXl {
  display: flex;
  padding: 4px 16px;
  width: 69px;
  height: 28px;
  background: rgb(240, 248, 255);
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgb(90, 96, 102);
  text-decoration: none;
}
.sc-jlqnSw + .sc-jlqnSw {
  margin-left: 12px;
}
.dYa-dTS {
  position: relative;
  min-width: 1200px;
}
.hgliO {
  padding: 150px 0px 160px;
  background-color: rgb(245, 248, 250);
}
.glONzd {
  width: 1200px;
  margin: 0px auto;
  position: relative;
}
.jNyKgC {
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  color: rgb(20, 23, 26);
}
.gtLrFf {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 68px;
}
.gtLrFf > a {
  width: 384px;
}
.gtLrFf > * + * {
  margin-left: 24px;
}
.bmEnfh {
  background: rgb(255, 255, 255);
  border-radius: 20px;
  height: 230px;
  text-align: center;
  text-decoration: none;
  padding: 40px 60px 30px;
}
.losPqi {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgb(123, 132, 140);
}
.dXhram {
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: rgb(20, 23, 26);
  margin: 16px 0px 20px;
}
body {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
}
* {
  /* font-family: "Nanum Gothic" !important; */
  font-weight: bold !important;
}
</style>
