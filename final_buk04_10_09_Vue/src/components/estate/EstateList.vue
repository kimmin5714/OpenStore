<script setup>
import HeadingNav from "@/components/common/HeadingNav.vue";
import Footer from "../common/Footer.vue";
</script>

<template>
  <HeadingNav />
  <main>
    <div class="container my-5">
      <!-- 검색 / 카테고리 선택 영역 -->
      <div class="row mb-5">
        <div class="col">
          <ul class="nav nav-tabs tab-body-header rounded d-inline-flex">
            <li class="nav-item">
              <input
                value="전체"
                v-model="dealType"
                class="d-none"
                type="radio"
                id="all" />
              <label
                :class="[searchDealType == '전체' ? 'active' : '']"
                class="nav-link cursor-pointer"
                for="all"
                >전체</label
              >
            </li>
            <li class="nav-item">
              <input
                value="매매"
                v-model="dealType"
                class="d-none"
                type="radio"
                id="lease" />
              <label
                :class="[searchDealType == '매매' ? 'active' : '']"
                class="nav-link cursor-pointer"
                for="lease"
                >매매</label
              >
            </li>
            <li class="nav-item">
              <input
                value="전세"
                v-model="dealType"
                class="d-none"
                type="radio"
                id="sell" />
              <label
                :class="[searchDealType == '전세' ? 'active' : '']"
                class="nav-link cursor-pointer"
                for="sell"
                >전세</label
              >
            </li>
            <li class="nav-item">
              <input
                value="월세"
                v-model="dealType"
                class="d-none"
                type="radio"
                id="month" />
              <label
                :class="[searchDealType == '월세' ? 'active' : '']"
                class="nav-link cursor-pointer"
                for="month"
                >월세</label
              >
            </li>
          </ul>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <div style="width: 20%">
            <select
              v-model="keywordType"
              class="form-control form-select"
              aria-label="example">
              <option value="all">제목+내용</option>
              <option value="houseName">건물명</option>
              <option value="compName">업체명</option>
              <option value="area">면적</option>
            </select>
          </div>
          <div class="ms-3 input-group d-flex w-50">
            <input
              @enter="search"
              type="text"
              v-model="keyword"
              class="form-control d-inline-block"
              placeholder="키워드를 입력해주세요" />
            <button
              @click="search"
              class="btn btn-primary d-inline-block"
              type="button">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style scoped></style>
