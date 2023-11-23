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

  <main class="sc-bbDxtK iNYtyb" style="position: relative">
    <!-- 페이지 상부 -->
    <HeadingNavIndex />
    <section class="sc-cjpfIh dxleaB">
      <div class="sc-jjeeWu ihRlrO">
        <img src="src\assets\img\v725-te-22.jpg" alt="background" />
        <div class="sc-KXvuv jtYTiW">
          <h2 class="sc-eTZVu nQjLg">
            소상공인을 위한 상권 정보<br />오픈스토어
          </h2>
          <!-- <div class="sc-NjEqx kQLQuf">
            <a
              data-gtm-action="mainhome_main_search_box_chips_click"
              data-gtm-label="mapo"
              class="sc-jlqnSw cXrUXl"
            ></a>
          </div> -->

          <div
            class="sc-hsZwpi gGbVFK sc-bsqviP djZIeE sc-cWiZSr kxttkI dropdown"
          >
            <!-- <form>
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'apart-view' }"
              >
                <button class="sc-gcHwEF tbLGf">매물 지도 보러가기</button>
              </router-link>
            </form> -->
            <div class="sc-hgiRw fKwRBh">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'apart-view' }"
                >지도 보러가기<span
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg1"
                  >
                    <!-- <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1538 18.5L11.0215 17.6187L6.35692 12.875H20V11.625H6.35692L11.0215 6.88125L10.1538 6L4 12.25L10.1538 18.5Z"
                      fill="#14171A"
                    ></path> -->
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1538 18.5L11.0215 17.6187L6.35692 12.875H20V11.625H6.35692L11.0215 6.88125L10.1538 6L4 12.25L10.1538 18.5Z"
                      fill="#edeff2"
                    ></path>
                  </svg> </span
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<style scoped>
.fKwRBh {
  bottom: 0px px;
  width: 250px;
  height: 72px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}
.fKwRBh a {
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  /* color: rgb(255, 255, 255); */
  color: #000;
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
  height: 93vh;
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
  height: 100%;
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
.svg1 {
  width: 24px;
  height: 24px;
  background-color: #777;
  border-radius: 50%;
  display: flex;
  margin-left: 16px;
  padding: 4px;
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
