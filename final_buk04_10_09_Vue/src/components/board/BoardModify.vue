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
const {getterArticle} = storeToRefs(storeBoard);
const {selectArticle, updateArticle} = storeBoard;

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
  if(resp==="success"){
    alert("수정이 완료되었습니다.");
    router.push({
      name: "BoardList", 
    });
  }else{
    alert("수정 실패하였습니다.");
  }
};

const articleNo = route.params.articleNo;
const resp = await selectArticle(articleNo);
if(resp === "success"){
  article = getterArticle;
  // article.articleNo = data.articleNo;
  // article.subject = data.subject;
  // article.content = data.content;
  // article.hit = data.hit;
  // article.registerTime = data.registerTime;
}else{
  alert("불러오기 실패했습니다.");
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10 col-sm-12">
      <h2 class="my-3 py-3 shadow-sm bg-light text-center">
        <mark class="sky">글수정</mark>
      </h2>
    </div>
    <div class="col-lg-8 col-md-10 col-sm-12">
      <form id="form-modify" method="POST" action="">
        <!-- <input type="hidden" name="pgno" value="${pgno}" />
        <input type="hidden" name="key" value="${key}" />
        <input type="hidden" name="word" value="${word}" />
        <input type="hidden" name="articleNo" value="${article.articleNo}" /> -->
        <div class="mb-3">
          <label for="subject" class="form-label">제목 : </label>
          <input
            type="text"
            class="form-control"
            id="subject"
            name="subject"
            v-model="article.subject"
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">내용 : </label>
          <textarea
            class="form-control"
            id="content"
            name="content"
            rows="7"
            v-model="article.content"
          ></textarea>
        </div>
        <div class="col-auto text-center">
          <button
            type="button"
            id="btn-modify"
            class="btn btn-outline-primary mb-3"
            @click="modifyArticle"
          >
            글수정
          </button>
          <RouterLink
            id="btn-list"
            class="btn btn-outline-danger mb-3"
            :to="{ name: 'BoardList' }"
          >
            목록으로이동...
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
