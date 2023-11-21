<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
//Data

//Method
// const moveDetail = () => {
//   router.push({
//     name: "ApartDetail",
//     // params: {},
//   });
// };
</script>

<template>
  <div class="search-body">
    <!-- 검색창 -->
    <div class="search-body-up">
      <div class="search-body-search">
        <div
          data-gtm-action="search_search_box_click"
          data-testid="search-bar"
          class="sc-hsZwpi gGbVFK sc-hBAWal hbQMmF dropdown"
        >
          <form class="sc-fkxeQW lbzVUA empty">
            <input
              class="sc-gqgnwQ jCTgjP dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="keyword"
              autocomplete="off"
              name="keyword"
              type="text"
              tabindex="1"
              placeholder="주소·장소명으로 검색"
              value=""
            /><button
              title="검색"
              aria-label="search"
              tabindex="3"
              type="submit"
              class="sc-gcHwEF tbLGf"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1A8CFF"
                xmlns="http://www.w3.org/2000/svg"
                class="swk-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0491 17.4633C14.7873 18.4274 13.2105 19 11.5 19C7.35786 19 4 15.6421 4 11.5C4 7.35786 7.35786 4 11.5 4C15.6421 4 19 7.35786 19 11.5C19 13.2105 18.4274 14.7873 17.4633 16.0491L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16.0491 17.4633ZM17 11.5C17 14.5376 14.5376 17 11.5 17C8.46243 17 6 14.5376 6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- 검색 결과 리스트 -->
    <!-- <div class="simplebar-content-wrapper"> -->
    <div role="tabpanel" class="apart-list">
      <div class="search-list-box">
        <ul class="search-list-ul">
          <li data-pnu="1159010200102960009" class="search-list-li">
            <router-link
              :to="{ name: 'ApartDetail', params: { id: '1' } }"
              aria-current="page"
            >
              <div role="button" class="search-list-li-detail">
                <div class="sc-juGoRN cujSyQ">
                  <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 296-9</h4>
                  <p class="sc-bKGzYo beCmdD">토지ㆍ47m²ㆍ1년이내</p>
                </div>
                <div class="sc-hMQQaK cymzWl">
                  <h3 class="sc-jjykVC irPSbt">2.3억원</h3>
                  <p class="sc-gbNofL pDonz">489만원/m²</p>
                  <p class="sc-haGfLn cwMZDB">2023.04</p>
                </div>
              </div>
            </router-link>
          </li>
          <!-- <li data-pnu="1159010200102560151" class="search-list-li">
            <router-link :to="{ name: 'ApartDetail' }" aria-current="page">
              <div role="button" class="search-list-li-detail">
                <div class="sc-juGoRN cujSyQ">
                  <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 256-151</h4>
                  <p class="sc-bKGzYo beCmdD">단독다가구ㆍ254m²ㆍ16년</p>
                </div>
                <div class="sc-hMQQaK cymzWl">
                  <h3 class="sc-jjykVC irPSbt">30.0억원</h3>
                  <p class="sc-gbNofL pDonz">1,181만원/m²</p>
                  <p class="sc-haGfLn cwMZDB">2023.02</p>
                </div>
              </div>
            </router-link>
          </li>
          <li data-pnu="1159010200102990101" class="search-list-li">
            <router-link :to="{ name: 'ApartDetail' }" aria-current="page">
              <div role="button" class="search-list-li-detail">
                <div class="sc-juGoRN cujSyQ">
                  <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 299-101</h4>
                  <p class="sc-bKGzYo beCmdD">단독다가구ㆍ169m²ㆍ31년</p>
                </div>
                <div class="sc-hMQQaK cymzWl">
                  <h3 class="sc-jjykVC irPSbt">15.3억원</h3>
                  <p class="sc-gbNofL pDonz">905만원/m²</p>
                  <p class="sc-haGfLn cwMZDB">2023.01</p>
                </div>
              </div>
            </router-link>
          </li>
          <li data-pnu="1159010200102960012" class="search-list-li">
            <router-link :to="{ name: 'ApartDetail' }" aria-current="page">
              <div role="button" class="search-list-li-detail">
                <div class="sc-juGoRN cujSyQ">
                  <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 296-12</h4>
                  <p class="sc-bKGzYo beCmdD">상가ㆍ102m²ㆍ37년</p>
                </div>
                <div class="sc-hMQQaK cymzWl">
                  <h3 class="sc-jjykVC irPSbt">10.4억원</h3>
                  <p class="sc-gbNofL pDonz">1,020만원/m²</p>
                  <p class="sc-haGfLn cwMZDB">2022.10</p>
                </div>
              </div>
            </router-link>
          </li>
          <li data-pnu="1159010200102560273" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 256-273</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ235m²ㆍ35년</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">17.8억원</h3>
                <p class="sc-gbNofL pDonz">755만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2022.05</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102990001" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 299-1</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ329m²ㆍ48년</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">34.8억원</h3>
                <p class="sc-gbNofL pDonz">1,059만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2022.03</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102990140" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 299-140</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ357m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">34.5억원</h3>
                <p class="sc-gbNofL pDonz">968만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.10</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102940004" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 294-4</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ126m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">8.9억원</h3>
                <p class="sc-gbNofL pDonz">706만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.09</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102560214" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 256-214</h4>
                <p class="sc-bKGzYo beCmdD">상가ㆍ264m²ㆍ27년</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">17.5억원</h3>
                <p class="sc-gbNofL pDonz">663만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.08</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102940015" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 294-15</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ213m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">17.7억원</h3>
                <p class="sc-gbNofL pDonz">832만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.07</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102980030" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 298-30</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ268m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">18.4억원</h3>
                <p class="sc-gbNofL pDonz">685만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.05</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102560140" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 256-140</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ175m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">17.5억원</h3>
                <p class="sc-gbNofL pDonz">998만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.03</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200103040004" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 304-4</h4>
                <p class="sc-bKGzYo beCmdD">상가ㆍ155m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">13.8억원</h3>
                <p class="sc-gbNofL pDonz">890만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2021.02</p>
              </div>
            </div>
          </li>
          <li data-pnu="1159010200102990004" class="search-list-li">
            <div role="button" class="search-list-li-detail">
              <div class="sc-juGoRN cujSyQ">
                <h4 class="sc-eFfTkT btIhdS">서울 동작구 상도동 299-4</h4>
                <p class="sc-bKGzYo beCmdD">단독다가구ㆍ159m²ㆍ1년이내</p>
              </div>
              <div class="sc-hMQQaK cymzWl">
                <h3 class="sc-jjykVC irPSbt">14.4억원</h3>
                <p class="sc-gbNofL pDonz">906만원/m²</p>
                <p class="sc-haGfLn cwMZDB">2020.12</p>
              </div>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- </div> -->

    <!-- 검색리스트 상세 정보 -->
    <div></div>

    <!--스크롤바-->
    <div class="simplebar-track simplebar-vertical" style="visibility: visible">
      <div
        class="simplebar-scrollbar"
        style="
          height: 340px;
          transform: translate3d(0px, 0px, 0px);
          display: block;
        "
      ></div>
    </div>
  </div>
</template>

<style scoped>
*,
:after,
:before {
  box-sizing: border-box;
}
.search-body-up {
  width: 100%;
  height: 15%;
  /* height : auto; */
}
.search-body-search {
  width: 100%;
  padding: 24px 20px 0px;
  position: relative;
  height: 100px;
}
.search-list-box {
  padding-bottom: 100px;
  box-sizing: border-box;
  overflow: visible;
}
.search-body {
  scroll-behavior: smooth;
}
.search-list-ul {
  list-style: none;
  padding-top: 4px;
  margin: 0px;
  padding: 0px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.search-list-li {
  display: list-item;
  text-align: -webkit-match-parent;
  padding: 16px 20px 0px;
  transition: background-color 0.2s ease 0s;
}
.simplebar-track {
  bottom: 0;
  right: 0;
  z-index: 1;
}
.simplebar-track.simplebar-vertical {
  top: 0;
  width: 11px;
  visibility: visible;
}
.simplebar-height-auto-observer,
.simplebar-track {
  overflow: hidden;
  pointer-events: none;
  position: absolute;
}
.simplebar-scrollbar {
  left: 0;
  min-height: 10px;
  position: absolute;
  right: 0;
}
.search-list-li-detail {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: flex-start;
}
[role="button"] {
  cursor: pointer;
}
/* :root {
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-2xl: 2rem;
  --bs-border-radius-pill: 50rem;
} */
.simplebar-content-wrapper {
  -ms-overflow-style: none;
  box-sizing: border-box !important;
  direction: inherit;
  display: block;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  scrollbar-width: none;
  width: auto;
}
</style>
