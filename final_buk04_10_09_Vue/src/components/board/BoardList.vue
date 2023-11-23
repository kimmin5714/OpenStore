<script setup>
import { ref, reactive, onMounted, onBeforeUpdate, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { useAdminStore } from "@/stores/admin";
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
const { userInfo } = storeToRefs(useAdminStore());
const { userLogout, getUserInfo } = useAdminStore();

// Data
const isAdmin = ref(false);
const isListEmpty = ref(false);
const { VITE_ARTICLE_LIST_SIZE } = import.meta.env;

const params = ref({
  pgno: currentPage.value,
  spp: VITE_ARTICLE_LIST_SIZE,
  key: key.value,
  word: word.value,
});

const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "제목", value: "subject" },
  { text: "글번호", value: "article_no" },
  // { text: "작성자아이디", value: "user_id" },
  { text: "작성자", value: "user_name" },
]);

// Method
onMounted(() => {
  getArticleList();
  checkLogin();
  if (userInfo.value && userInfo.value.userId === "admin") {
    isAdmin.value = true;
  } else {
    isAdmin.value = false;
  }
});

watch(
  () => userInfo.value,
  () => {
    if (userInfo.value && userInfo.value.userId === "admin") {
      isAdmin.value = true;
    } else {
      isAdmin.value = false;
    }
  }
);
const checkLogin = async () => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    await getUserInfo(token);
  }
};
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
  <div>
    <!-- <div style="padding: 24px 0px 24px; align-items: center">
      <h3 class="estate-list-header">공지사항</h3>
    </div> -->
    <div id="notice_header" class="notice_header">
      <div class="nh_title">
        <h2
          class="mx-4 my-6 overflow-hidden text-l font-bold"
          style="color: #0d6efd"
        >
          공지사항
        </h2>
      </div>
    </div>
    <div class="board-container">
      <div class="row align-self-center notice_search">
        <div class="col-md-2 text-start">
          <span v-if="isAdmin">
            <button
              type="button"
              id="btn-mv-register"
              class="btn btn-primary write_button"
              @click="$router.push({ name: 'BoardCreate' })"
            >
              공지 등록
            </button>
          </span>
        </div>
        <div class="col-md-6 offset-4">
          <form class="d-flex" @keydown.enter.prevent="submit">
            <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />

            <div class="input-group input-group-sm">
              <input
                type="text"
                name="word"
                id="word"
                class="form-control input_box"
                placeholder="검색어..."
                v-model="word"
                @keyup.enter="validateSearch"
              />
              <button
                id="btn-searchL"
                class="btn btn-dark"
                type="button"
                @click="validateSearch"
              >
                검색
              </button>
            </div>
            <!-- <div class="input_box typing form-group">
              <input
                placeholder="제목, 내용"
                name="searchValue"
                class="input_text form-control"
                value=""
              /><button type="submit" class="search_button">검색</button>
            </div> -->
          </form>
        </div>
      </div>
      <table class="table table-hover">
        <tbody style="border-top: 1px solid rgba(0, 0, 0, 0.1)">
          <BoardListItem
            v-for="(article, index) in getterArticles"
            :key="article.articleNo"
            :index="index"
            :article="article"
          />
          <h2 v-show="isListEmpty">검색 결과가 존재하지 않습니다.</h2>
        </tbody>
      </table>
      <!-- <PageNavigater/> -->
      <VPageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      ></VPageNavigation>
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
.board-container {
  position: relative;
  /* margin: 7px auto 40px; */
  width: 800px;
  /* min-width: 400px; */

  max-width: 960px;
  min-width: 500px;
  margin: 0 auto;
  padding: 0 0 60px;
  box-sizing: content-box;
}
.notice_header {
  /* position: relative; */
  margin: 0 auto;
  width: 800px;
  border-bottom: 2px solid #7f7f7f;
}
.notice_header .nh_title {
  /* float: left; */
  margin: 46px 0 4px;
  width: 385px;
  height: 48px;
  background-position: 0 0;
}
.header-title {
  position: absolute;
  /* overflow: hidden; */
  clip: rect(0 0 0 0);
  /* margin: -1px;
  width: 1px;
  height: 1px; */
}
.text-l {
  font-size: 25px;
  line-height: 30px;
}
.font-bold {
  font-weight: 700;
}
.notice_search {
  position: relative;
  padding-top: 70px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
.input_box {
  padding: 2px 0px 2px 14px;
  border-radius: 5px;
  border: 1px solid #d7d7d7;

  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}
.input_box .input_text {
  color: #222;
  border: 0;
  line-height: 22px;
  height: 22px;
  width: 156px;
  background: transparent;
}
#btn-searchL {
  border-radius: 0 5px 5px 0;
}
.write_button {
  /* border: 1px solid #222; */
  /* border-radius: 5%; */
  width: 90px;
  height: 35px;
  font-size: 14px;
}
/* * {
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
} */
</style>
