<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { useAdminStore } from "@/stores/admin";
import { storeToRefs } from "pinia";

// Router를 프로그래밍 방식으로 사용하기 위해
// Router 객체를 얻기
const route = useRoute();
const router = useRouter();
// Pinia
const storeBoard = useBoardStore();
const { userInfo, isLogin } = storeToRefs(useAdminStore());

// 반응성이 있게 Pinia에서 가져올 때
const { getterArticle } = storeToRefs(storeBoard);

// Actions
const { selectArticle, removeArticle } = storeBoard;

// Data
const article = ref({});

// Method
const deleteArticle = async () => {
  if (confirm("정말로 삭제하시겠습니까?")) {
    const resp = await removeArticle();
    if (resp === "success") {
      alert("삭제가 완료되었습니다.");
      router.push({ name: "BoardList" });
    } else if (resp === "fail") {
      alert("삭제 실패했습니다.");
    }
  }
};

// created
// const params = new URL(document.location).searchParams;
// const isbn = params.get("isbn");
const articleNo = route.params.articleNo;

const resp = await selectArticle(articleNo);
if (resp === "fail") {
  alert("불러오기 실패했습니다.");
}
console.log(userInfo);
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
      <div class="notice_container post">
        <div class="toparea_wrap">
          <div class="title_wrap">
            <h4 class="title" style="font-size: 16px">
              {{ getterArticle.subject }}
            </h4>
          </div>
          <div class="private_wrap">
            <div class="clipboard">
              <span class="sr-only">등록일</span
              ><span>{{ getterArticle.registerTime.substr(0, 10) }} </span>
            </div>
          </div>
        </div>
        <div class="post_content">{{ getterArticle.content }}</div>
        <div class="divider mt-3 mb-3"></div>
        <div class="d-flex justify-content-end">
          <span v-if="isLogin && userInfo.userId == 'admin'">
            <RouterLink
              id="btn-mv-modify"
              class="btn-light btn mb-3 ms-1"
              :to="{
                name: 'BoardModify',
                params: {
                  articleNo: getterArticle.articleNo,
                },
              }"
            >
              글수정
            </RouterLink>
            <button
              type="button"
              id="btn-delete"
              class="btn-light btn mb-3 ms-1"
              @click="deleteArticle"
            >
              글삭제
            </button>
          </span>
        </div>
        <div class="post_view_btn">
          <RouterLink id="btn-list" :to="{ name: 'BoardList' }">
            <button type="button" class="list_button btn" title="목록으로">
              <span>목록</span>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post_view_btn {
  text-align: center;
  max-width: 960px;
  min-width: 500px;
  margin: 0 auto;
  padding: 30px 0 60px;
  box-sizing: content-box;
}
.post_view_btn .list_button {
  display: inline-block;
  vertical-align: top;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 8px 29px 10px;
  min-width: 108px;
  min-height: 44px;
  cursor: pointer;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
}
.post_view_btn .list_button:hover {
  background-color: #f8f8f8;
  /* transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; */
}
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
  padding: 20px 0 60px 0;
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
  border-radius: 28px;
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
.post_content {
  padding-top: 30px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid var(--color-border);
  border-bottom: 1px solid #e8e8e8;
}
.notice_container.post {
  padding-bottom: 0;
  /* border-bottom: 1px solid var(--color-border); */
  /* border-bottom: 1px solid #e8e8e8; */
}
.notice_container.post .toparea_wrap {
  padding: 20px 10px;
  border-bottom: 1px solid var(--color-border3);
  border-bottom: 1px solid rgba(34, 34, 34, 0.1);
  position: relative;
}
.notice_container.post .toparea_wrap .private_wrap {
  margin-top: 4px;
}
.notice_container.post .toparea_wrap .private_wrap .clipboard {
  color: var(--color-subText);
  color: #888;
  font-size: 14px;
  line-height: 24px;
}
.notice_container.post .se-viewer {
  background-color: var(--color-bg);
  background-color: #fff;
  color: var(--color-subText5);
  color: #666;
  padding: 30px 10px 60px;
}
.se-viewer {
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
.se-viewer a,
.se-viewer audio,
.se-viewer blockquote,
.se-viewer caption,
.se-viewer code,
.se-viewer dd,
.se-viewer del,
.se-viewer div,
.se-viewer dl,
.se-viewer dt,
.se-viewer em,
.se-viewer embed,
.se-viewer h1,
.se-viewer h2,
.se-viewer h3,
.se-viewer h4,
.se-viewer h5,
.se-viewer h6,
.se-viewer iframe,
.se-viewer img,
.se-viewer ins,
.se-viewer li,
.se-viewer mark,
.se-viewer object,
.se-viewer ol,
.se-viewer p,
.se-viewer pre,
.se-viewer q,
.se-viewer s,
.se-viewer small,
.se-viewer span,
.se-viewer strike,
.se-viewer summary,
.se-viewer table,
.se-viewer tbody,
.se-viewer td,
.se-viewer tfoot,
.se-viewer th,
.se-viewer thead,
.se-viewer tr,
.se-viewer ul,
.se-viewer video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 12px;
  font: inherit;
  vertical-align: baseline;
}
</style>
