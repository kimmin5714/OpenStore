<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({ estate: Object });
</script>

<template>
  <span>매물 리스트</span>
  <div role="tabpanel" class="apart-list">
    <div class="search-list-box">
      <ul class="search-list-ul">
        <li data-pnu="1159010200102960009" class="search-list-li">
          <router-link :to="{ name: 'ApartDetail' }" aria-current="page">
            <div role="button" class="search-list-li-detail">
              <div class="sc-eJWqde gNhXOz">
                <h4 class="sc-fhVjgA bLsMZM">
                  {{ estate.sido }} {{ estate.gugun }} {{ estate.dong }}
                  {{ estate.jibun }}
                </h4>
                <p class="sc-jEKIOJ ebLesl">
                  {{ estate.dealClass }}ㆍ{{ estate.area }}평ㆍ{{
                    estate.floor
                  }}층
                </p>
              </div>
              <div class="sc-jgLPLn gwugoV">
                <h3 class="sc-eeUBpP giqlQF">{{ estate.dealAmount }}만원</h3>
                <p class="sc-eCTutl hhEuVo">
                  {{ estate.join_year }}.{{ estate.join_month }}.{{
                    estate.join_day
                  }}
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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
