<script setup>
import HeadingNav from "@/components/common/HeadingNav.vue";
import Footer from "../common/Footer.vue";
import { ref, reactive, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin";

const router = useRouter();

const { userInfo } = storeToRefs(useAdminStore());
const memberStore = useAdminStore();

const { updateUser, getUserInfo } = memberStore;

// Data
const userinfoNew = reactive({
  username: "",
  useridRegister: "",
  emailid: "",
  emaildomain: "",
  userpwdRegister: "",
});

// Method
const modifyUser = async () => {
  const resp = await updateUser(userinfoNew);
  if (resp === "success") {
    alert("회원 수정이 완료되었습니다.");
    router.push({ name: "IndexView" });
  } else {
    alert("회원 수정 실패했습니다.");
  }
};

const getUser = async () => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    await getUserInfo(token);
  }

  console.log(userInfo);
  console.log(userInfo.value.userName);
  userinfoNew.username = userInfo.value.userName;
  userinfoNew.useridRegister = userInfo.value.userId;
  userinfoNew.emailid = userInfo.value.emailId;
  userinfoNew.emaildomain = userInfo.value.emailDomain;
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <HeadingNav />
  <div style="padding: 24px 0px 24px; align-items: center">
    <h3 class="user-join-header">회원 정보 수정</h3>
  </div>
  <div style="margin-bottom: 100px">
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
                class="join-form"
                action=""
              >
                <input type="hidden" name="action" value="modify" />
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    v-model="userinfoNew.username"
                    id="username"
                    name="username"
                    class="form-control form-control-lg"
                    placeholder="이름"
                  />
                </div>
                <div class="form-outline mb-4">
                  <input
                    disabled
                    type="text"
                    v-model="userinfoNew.useridRegister"
                    id="useridR"
                    name="userid"
                    class="form-control form-control-lg"
                    placeholder="아이디 입력 (수정 불가)"
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    v-model="userinfoNew.emailid"
                    class="form-control"
                    id="emailid"
                    name="emailid"
                  />
                  <span class="input-group-text">@</span>
                  <select
                    class="form-select"
                    v-model="userinfoNew.emaildomain"
                    id="emaildomain"
                    name="emaildomain"
                    aria-label="이메일 도메인 선택"
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
                    v-model="userinfoNew.userpwdRegister"
                    id="userpwdR"
                    name="userpwd"
                    class="form-control form-control-lg"
                    placeholder="비밀번호"
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="pwdcheck"
                    class="form-control form-control-lg"
                    placeholder="비밀번호 확인"
                  />
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    id="btn-modify"
                    class="btn btn-outline-primary"
                    @click="modifyUser"
                  >
                    회원 정보 수정
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger ms-3"
                    @click="moveIndex"
                  >
                    취소
                  </button>
                  <button type="button" class="btn btn-outline-success ms-3">
                    탈퇴하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
.user-join-header {
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
}
.join-form {
  margin: 20px 20px;
  padding: 20px 100px;
}
</style>
