<script setup>
import { ref, watch } from "vue";
import { modify } from "@/api/admin.js";
import { useAdminStore } from "@/stores/admin";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps({ type: String });

//Pinia
const { userInfo } = storeToRefs(useAdminStore());
const { getUserInfo } = useAdminStore();

const isUseId = ref(false);

const userInfoNew = ref({
  userName: "",
  userId: "",
  userEmail: "",
  userDomain: "",
  userPwd: "",
  userPwdCheck: "",
});

if (props.type === "submit") {
  let { userId } = route.params;
  console.log(userId + " 얻어와서 수정할거야");
  // API 호출
  isUseId.value = true;
}

const subjectErrMsg = ref("");
const contentErrMsg = ref("");
// watch(
//   () => member.value.subject,
//   (value) => {
//     let len = value.length;
//     if (len == 0 || len > 30) {
//       subjectErrMsg.value = "제목을 확인해 주세요!!!";
//     } else subjectErrMsg.value = "";
//   },
//   { immediate: true }
// );
// watch(
//   () => member.value.content,
//   (value) => {
//     let len = value.length;
//     if (len == 0 || len > 500) {
//       contentErrMsg.value = "내용을 확인해 주세요!!!";
//     } else contentErrMsg.value = "";
//   },
//   { immediate: true }
// );

function onSubmit() {
  // event.preventDefault();

  if (subjectErrMsg.value) {
    alert(subjectErrMsg.value);
  } else if (contentErrMsg.value) {
    alert(contentErrMsg.value);
  } else {
    props.type === "regist" ? writeUserInfo() : updateUserInfo();
  }
}

function writeUserInfo() {
  console.log("사용자 등록하자!!", userInfoNew.value);
  // API 호출
}

function updateUserInfo() {
  console.log(userInfoNew.value.userId + " 수정하자!!", userInfoNew.value);
  // API 호출
  modify(
    userInfoNew,
    ({ data }) => {
      console.log(data);
      userInfoNew.value = data.member;
    },
    (error) => {
      console.log(error);
    }
  );
}

function moveList() {
  router.push({ name: "member-list" });
}
const checkUser = () => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    getUserInfo(token);
  }
};
onMounted(() => {
  checkUser();
  userInfoNew.userName;
});
</script>

<template>
  <div
    class="mask d-flex align-items-center h-100 gradient-custom-3 register-ch"
  >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px">
            <form
              @submit.prevent="onSubmit"
              id="form-join"
              method="post"
              action=""
            >
              <input type="hidden" name="action" value="modify" />
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-control form-control-lg"
                  placeholder="이름"
                  v-model="userInfoNew.userName"
                />
              </div>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="useridR"
                  name="userid"
                  class="form-control form-control-lg"
                  placeholder="아이디 입력 (수정 불가)"
                  v-model="userInfoNew.userId"
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="emailid"
                  name="emailid"
                  v-model="userInfoNew.userEmail"
                />
                <span class="input-group-text">@</span>
                <select
                  class="form-select"
                  id="emaildomain"
                  name="emaildomain"
                  aria-label="이메일 도메인 선택"
                  v-model="userInfoNew.userDomain"
                >
                  <option selected>선택</option>
                  <option value="ssafy.com">싸피</option>
                  <option value="google.com">구글</option>
                  <option value="naver.com">네이버</option>
                  <option value="kakao.com">카카오</option>
                </select>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="userpwdR"
                  name="userpwd"
                  class="form-control form-control-lg"
                  v-model="userInfoNew.userPwd"
                  placeholder="비밀번호"
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="pwdcheck"
                  class="form-control form-control-lg"
                  v-model="userInfoNew.userPwdCheck"
                  placeholder="비밀번호 확인"
                />
              </div>

              <div class="d-flex justify-content-center">
                <!-- <button
	                  type="button"
	                  class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
	                  회원 등록
	                </button> -->
                <button
                  type="submit"
                  id="btn-modify"
                  class="btn btn-outline-primary mb-3 me-3"
                >
                  수정하기
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger mb-3 ms-1"
                  @click="moveList"
                >
                  목록으로이동...
                </button>
                <!-- <button
                  type="button"
                  id="btn-delete"
                  class="btn btn-outline-primary mb-3">
                  탈퇴하기
                </button> -->

                <button type="button" class="btn btn-outline-success mb-3">초기화</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
