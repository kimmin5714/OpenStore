<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import MemberListItem from "@/components/member/item/MemberListItem.vue";
import { useAdminStore } from "@/stores/admin";
import { storeToRefs } from "pinia";
// import HeadingNav from "@/components/common/HeadingNav.vue";

// tools
const router = useRouter();
const storeAdmin = useAdminStore();
const { selectMemberList } = storeAdmin;
const { getterUsers } = storeToRefs(storeAdmin);

// Data
const userinfo = {
  userId: "admin",
  userPw: "1234",
};
// const selectOption = ref([
//   { text: "검색조건", value: "" },
//   { text: "글번호", value: "article_no" },
//   { text: "제목", value: "subject" },
//   { text: "작성자아이디", value: "user_id" },
// ]);
const members = ref([]);
const currentPage = ref(1);
const totalPage = ref(0);
const { VITE_ARTICLE_LIST_SIZE } = import.meta.env;
const param = ref({
  pgno: currentPage.value,
  spp: VITE_ARTICLE_LIST_SIZE,
  key: "",
  word: "",
});

// Method
// onMounted(() => {
// getMemberList();
// });

// const changeKey = (val) => {
//   console.log("BoarList에서 선택한 조건 : " + val);
//   param.value.key = val;
// };

const getMemberList = async () => {
  console.log("서버에서 글목록 얻어오자!!!");

  // Pinia 사용
  const resp = await selectMemberList();
  if (resp === "success") {
    console.log(getterUsers);
  }

  // API 호출
  /*memberList(
    ({ data }) => {
      console.log(data);
      members.value = data;
      //console.log("members:", members.value);
      // currentPage.value = data.currentPage;
      // totalPage.value = data.totalPageCount;
    },
    (error) => {
      console.log(error);
    }
  );*/
};
getMemberList();

// const onPageChange = (val) => {
//   console.log(val + "번 페이지로 이동 준비 끝!!!");
//   currentPage.value = val;
//   param.value.pgno = val;
//   getMemberList();
// };

const moveWrite = () => {
  router.push({ name: "article-write" });
};
</script>

<template>
  <main class="container border p-5 d-flex flex-column">
    <div class="">
      <table class="table table-striped col-6" id="manage-table">
        <thead class="fs-5 fw-bold">
          <tr>
            <th class="col-1">아이디</th>
            <th class="col-1">이름</th>
            <th class="col-2">이메일</th>
            <th class="col-1">이메일도메인</th>

            <th class="col-1"></th>
          </tr>
        </thead>
        <tbody id="manage-table-body">
          <MemberListItem v-for="member in getterUsers" :member="member">
          </MemberListItem>
        </tbody>
      </table>
    </div>
    <!-- <PageNavigation
      :current-page="currentPage"
      :total-page="totalPage"
      @pageChange="onPageChange"></PageNavigation> -->
    <!-- <a
      href="${root}/user?action=mvjoin"
      class="text-decoration-none btn btn-primary col-1">
      
      회원 등록
    </a> -->
  </main>
</template>

<style scoped></style>
