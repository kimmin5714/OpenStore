<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { storeToRefs } from "pinia";

// Router 객체 얻기
const route = useRoute();
const router = useRouter();
const storeBoard = useBoardStore();

// from Stores
const { getterArticle } = storeToRefs(storeBoard);
const { selectArticle, updateArticle } = storeBoard;

// Data
let article = reactive({
  articleNo: 0,
  subject: "",
  content: "",
  hit: 0,
  registerTime: "",
});

// Method
const modifyArticle = async () => {
  const resp = await updateArticle();
  if (resp === "success") {
    alert("수정이 완료되었습니다.");
    router.push({
      name: "BoardList",
    });
  } else {
    alert("수정 실패하였습니다.");
  }
};

const articleNo = route.params.articleNo;
const resp = await selectArticle(articleNo);
if (resp === "success") {
  article = getterArticle;
  // article.articleNo = data.articleNo;
  // article.subject = data.subject;
  // article.content = data.content;
  // article.hit = data.hit;
  // article.registerTime = data.registerTime;
} else {
  alert("불러오기 실패했습니다.");
}
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
        <form id="form-register" method="POST" action="">
          <input type="hidden" name="pgno" value="1" />
          <input type="hidden" name="key" value="" />
          <input type="hidden" name="word" value="" />
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="subject"
              name="subject"
              placeholder="제목..."
              v-model="article.subject"
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="content"
              name="content"
              rows="7"
              v-model="article.content"
            ></textarea>
          </div>
          <div class="post_view_btn">
            <a id="btn-list">
              <button
                type="button"
                class="list_button btn"
                title="목록으로"
                @click="modifyArticle"
              >
                <span>등록</span>
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#form-register {
  padding-top: 60px;
  width: 600px;
  margin: auto;
}
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
