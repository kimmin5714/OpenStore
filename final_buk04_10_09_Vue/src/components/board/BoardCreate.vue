<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";

const router = useRouter();
const { insertArticle } = useBoardStore();

// Data
const userinfo = {
  userId: "albam",
  userName: "박찬영",
};

const article = reactive({
  articleNo: 0,
  subject: "",
  content: "",
  userId: userinfo.userId,
  hit: 0,
  registerTime: "",
});

// Method
const registBook = async () => {
  if (!article.subject) {
    alert("제목을 입력해주세요.");
    return;
  }
  if (!article.content) {
    alert("내용을 입력해주세요.");
    return;
  }
  // await를 붙이면 insertBook의 return 값으로 전달받음
  const resp = await insertArticle(article);
  if (resp === "success") {
    // alert("등록이 완료되었습니다.");
    router.push({ name: "BoardList" });
  } else if (resp === "fail") {
    alert("등록 실패했습니다.");
  }

  // for (let step = 101; step <= 1000; step++) {
  //   const arti = {
  //     subject: `자동생성! : ${step}`,
  //     content: `${step}번 자동생성된 글입니다!`,
  //     userId: userinfo.userId,
  //     hit: 0,
  //     registerTime: "",
  //   };
  //   const resp = await insertArticle(arti);
  // }
  // alert("자동생성 완료.");
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10 col-sm-12">
      <h2 class="my-3 py-3 shadow-sm bg-light text-center">
        <mark class="sky">글쓰기</mark>
      </h2>
    </div>
    <div class="col-lg-8 col-md-10 col-sm-12">
      <form id="form-register" method="POST" action="">
        <input type="hidden" name="pgno" value="1" />
        <input type="hidden" name="key" value="" />
        <input type="hidden" name="word" value="" />
        <div class="mb-3">
          <label for="subject" class="form-label">제목 : </label>
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
            id="btn-register"
            class="btn btn-outline-primary mb-3"
            @click="registBook"
          >
            글작성
          </button>
          <button type="reset" class="btn btn-outline-danger mb-3">
            초기화
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
