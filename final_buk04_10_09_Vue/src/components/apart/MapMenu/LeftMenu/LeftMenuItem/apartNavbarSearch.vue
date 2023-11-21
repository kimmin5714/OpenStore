<script setup>
import { useRouter, useRoute } from "vue-router";
//  import { useEstateStore } from "@/stores/estate";
//  import { storeToRefs } from "pinia";
//  import aptListItem from "./item/aptListItem.vue";

// const router = useRouter();
// const route = useRoute();
//  const storeBoard = useEstateStore();

// //Pinia
// const { lat, lon, getterEstateList } = storeToRefs(storeEstate);
// const { selectEstateList } = storeEstate;

// //Data
// const isListEmpty = ref(false);
// const params = ref({
//   lat: lat.value,
//   lon: lon.value,
// });

// //Method
// onMounted(() => {
//   getEstateList();
// });

// const getEstateList = async () => {
//   const startTime = new Date();
//   const resp = await selectEstateList(params.value);
//   if (resp === "success") {
//     isListEmpty.value = false;
//   } else if (resp === "empty") {
//     isListEmpty.value = true;
//   } else if (resp === "fail") {
//     alert("목록을 가져오는데 실패했습니다.");
//   }

//   const endTime = new Date();
//   console.log(
//     "경과 시간 : ",
//     endTime.getMilliseconds() - startTime.getMilliseconds()
//   );
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
          class="sc-hsZwpi gGbVFK sc-hBAWal hbQMmF dropdown">
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
              value="" /><button
              title="검색"
              aria-label="search"
              tabindex="3"
              type="submit"
              class="sc-gcHwEF tbLGf">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1A8CFF"
                xmlns="http://www.w3.org/2000/svg"
                class="swk-icon">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0491 17.4633C14.7873 18.4274 13.2105 19 11.5 19C7.35786 19 4 15.6421 4 11.5C4 7.35786 7.35786 4 11.5 4C15.6421 4 19 7.35786 19 11.5C19 13.2105 18.4274 14.7873 17.4633 16.0491L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16.0491 17.4633ZM17 11.5C17 14.5376 14.5376 17 11.5 17C8.46243 17 6 14.5376 6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5Z"
                  fill="white"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- 검색 결과 리스트 -->
    <!-- <aptListItem
      v-for="(estate, index) in getterEstateList"
      :key="estate.estateId"
      :index="index"
      :estate="estate" /> -->
    <ul class="search-list-ul">
      <li data-pnu="1159010200102960009" class="search-list-li">
        <router-link
          :to="{ name: 'ApartDetail', params: { id: '1' } }"
          aria-current="page">
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
    </ul>

    <!--스크롤바-->
    <div class="simplebar-track simplebar-vertical" style="visibility: visible">
      <div
        class="simplebar-scrollbar"
        style="
          height: 340px;
          transform: translate3d(0px, 0px, 0px);
          display: block;
        "></div>
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
.search-list-li-detail {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: flex-start;
}
</style>
