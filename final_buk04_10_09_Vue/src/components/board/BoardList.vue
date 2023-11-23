<script setup>
import { ref, reactive, onMounted, onBeforeUpdate } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { storeToRefs } from "pinia";
import BoardListItem from "@/components/board/item/BoardListItem.vue";
import VPageNavigation from "@/components/common/VPageNavigation.vue";
import VSelect from "@/components/common/VSelect.vue";

// Tools
// Router를 프로그래밍 방식으로 사용하기 위해
// Router 객체를 얻기
const route = useRoute();
const router = useRouter();
const storeBoard = useBoardStore();
// Pinia
const { currentPage, totalPage, key, word, getterArticles } =
  storeToRefs(storeBoard);
// const {getterArticles} = storeBoard;
const { selectArticles } = storeBoard;

// Data
const isListEmpty = ref(false);
const isAdmin = true;
const { VITE_ARTICLE_LIST_SIZE } = import.meta.env;

const params = ref({
  pgno: currentPage.value,
  spp: VITE_ARTICLE_LIST_SIZE,
  key: key.value,
  word: word.value,
});

const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "글번호", value: "article_no" },
  { text: "제목", value: "subject" },
  // { text: "작성자아이디", value: "user_id" },
  { text: "작성자", value: "user_name" },
]);

// Method
onMounted(() => {
  getArticleList();
});

const getArticleList = async () => {
  const startTime = new Date();
  const resp = await selectArticles(params.value);
  if (resp === "success") {
    isListEmpty.value = false;
  } else if (resp === "empty") {
    isListEmpty.value = true;
  } else if (resp === "fail") {
    alert("목록을 가져오는데 실패했습니다.");
  }

  const endTime = new Date();
  console.log(
    "경과 시간 : ",
    endTime.getMilliseconds() - startTime.getMilliseconds()
  );
};
const onPageChange = (val) => {
  console.log(`onPageChange : ${val}`);
  currentPage.value = val;
  params.value.pgno = val;
  getArticleList();
};

const changeKey = (val) => {
  console.log("BoarList에서 선택한 조건 : " + val);
  params.value.key = val;
};

const validateSearch = () => {
  if (!params.value.key) {
    params.value.word = "";
  }

  params.value.pgno = 1;
  params.value.word = word.value;
  params.value.key = key.value;

  getArticleList();
};
</script>

<template>
  <div class="row justify-content-center">
    <div style="padding: 24px 0px 24px; align-items: center">
      <h3 class="estate-list-header">공지사항</h3>
    </div>
    <div class="col-lg-8 col-md-10 col-sm-12">
      <div class="row align-self-center mb-2">
        <div class="col-md-2 text-start">
          <span v-if="isAdmin">
            <button
              type="button"
              id="btn-mv-register"
              class="btn btn-outline-primary btn-sm"
              @click="$router.push({ name: 'BoardCreate' })">
              글쓰기
            </button>
          </span>
        </div>
        <div class="col-md-7 offset-3">
          <form class="d-flex" @keydown.enter.prevent="submit">
            <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
            <div class="input-group input-group-sm">
              <input
                type="text"
                name="word"
                id="word"
                class="form-control"
                placeholder="검색어..."
                v-model="word"
                @keyup.enter="validateSearch" />
              <button
                id="btn-searchL"
                class="btn btn-dark"
                type="button"
                @click="validateSearch">
                검색
              </button>
            </div>
          </form>
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr class="text-center">
            <th scope="col">글번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <BoardListItem
            v-for="(article, index) in getterArticles"
            :key="article.articleNo"
            :index="index"
            :article="article" />
          <h2 v-show="isListEmpty">검색 결과가 존재하지 않습니다.</h2>
        </tbody>
      </table>
      <!-- <PageNavigater/> -->
      <VPageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"></VPageNavigation>
    </div>
  </div>
</template>

<style scoped>
.estate-list-header {
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  text-align: center;
  color: rgb(54, 59, 64);
}
h3 {
  margin: 0px;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
