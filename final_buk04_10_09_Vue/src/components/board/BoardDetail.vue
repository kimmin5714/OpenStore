<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { storeToRefs } from "pinia";

// Router를 프로그래밍 방식으로 사용하기 위해
// Router 객체를 얻기
const route = useRoute();
const router = useRouter();
const storeBoard = useBoardStore();

// 반응성이 있게 Pinia에서 가져올 때
const { getterArticle } = storeToRefs(storeBoard);

// Actions
const { selectArticle, removeArticle } = storeBoard;

// Data
const article = ref({});
const userinfo = {
  userId: "admin",
  userName: "관리자",
};

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
if (resp === "fail"){
  alert("불러오기 실패했습니다.")
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10 col-sm-12">
      <h2 class="my-3 py-3 shadow-sm bg-light text-center">
        <mark class="sky">게시글 보기</mark>
      </h2>
    </div>
    <div class="col-lg-8 col-md-10 col-sm-12">
      <div class="row my-2">
        <h2 class="text-secondary px-5">
          {{ getterArticle.articleNo }}. {{ getterArticle.subject }}
        </h2>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="clearfix align-content-center">
            <img
              class="avatar me-2 float-md-start bg-light p-2"
              src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
            />
            <p>
              <span class="fw-bold"> {{ getterArticle.userId }} </span> <br />
              <span class="text-secondary fw-light">
                {{ getterArticle.registerTime }} 조회 : {{ getterArticle.hit }}
              </span>
            </p>
          </div>
        </div>
        <div class="col-md-4 align-self-center text-end">댓글 : 0</div>
        <div class="divider mb-3"></div>
        <div class="text-secondary">{{ getterArticle.content }}</div>
        <div class="divider mt-3 mb-3"></div>
        <div class="d-flex justify-content-end">
          <RouterLink
            id="btn-list"
            class="btn btn-outline-primary mb-3"
            :to="{ name: 'BoardList' }"
          >
            글목록
          </RouterLink>
          <span v-if="userinfo.userId == 'admin'">
            <RouterLink
              id="btn-mv-modify"
              class="btn btn-outline-success mb-3 ms-1"
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
              class="btn btn-outline-danger mb-3 ms-1"
              @click="deleteArticle"
            >
              글삭제
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
