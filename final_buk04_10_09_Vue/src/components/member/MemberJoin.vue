<script setup>
import HeadingNav from "@/components/common/HeadingNav.vue";
import Footer from "../common/Footer.vue";
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin";

const router = useRouter();

const memberStore = useAdminStore();

const { insertMember } = memberStore;

// Data
const userinfo = reactive({
  username: "",
  useridRegister: "",
  emailid: "",
  emaildomain: "",
  userpwdRegister: "",
});

// Method
const registerUser = async () => {
  const resp = await insertMember(userinfo);
  if (resp === "success") {
    alert("회원가입이 완료되었습니다.");
    router.push({ name: "IndexView" });
  } else {
    alert("회원가입 실패했습니다.");
  }
};
</script>

<template>
  <HeadingNav />
  <div style="padding: 24px 0px 24px; align-items: center">
    <h3 class="user-join-header">회원 가입</h3>
  </div>
  <!-- <div style="margin-bottom: 100px">
    <div
      class="mask d-flex align-items-center h-100 gradient-custom-3 register-ch">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <form
                @submit.prevent="onSubmit"
                id="form-join"
                method="post"
                class="join-form"
                action="">
                <input type="hidden" name="action" value="modify" />
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    v-model="userinfo.username"
                    id="username"
                    name="username"
                    class="form-control form-control-lg"
                    placeholder="이름" />
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    v-model="userinfo.useridRegister"
                    id="useridR"
                    name="userid"
                    class="form-control form-control-lg"
                    placeholder="아이디 입력" />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    v-model="userinfo.emailid"
                    class="form-control"
                    id="emailid"
                    name="emailid" />
                  <span class="input-group-text">@</span>
                  <select
                    v-model="userinfo.emaildomain"
                    class="form-select"
                    id="emaildomain"
                    name="emaildomain"
                    aria-label="이메일 도메인 선택">
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
                    v-model="userinfo.userpwdRegister"
                    id="userpwdR"
                    name="userpwd"
                    class="form-control form-control-lg"
                    placeholder="비밀번호" />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="pwdcheck"
                    class="form-control form-control-lg"
                    placeholder="비밀번호 확인" />
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    id="btn-modify"
                    class="btn btn-outline-primary"
                    @click="registerUser">
                    회원 가입
                  </button>
                  <button type="button" class="btn btn-outline-success ms-3">
                    초기화
                  </button>
                  <button type="button" class="btn btn-outline-danger ms-3">
                    취소
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <form
          id="join_form"
          method="post"
          action="/user2/join/end"
          class="form">
          <input
            type="hidden"
            id="token_sjoin"
            name="token_sjoin"
            value="26Sdblo4Lq25nf34" />
          <input type="hidden" id="nid_kb2" name="nid_kb2" value="" />
          <input
            type="hidden"
            id="joinMode"
            name="joinMode"
            value="joinIdentity" />
          <input type="hidden" id="encPswd" name="encPswd" value="" />
          <input type="hidden" id="encKey" name="encKey" value="" />
          <input type="hidden" id="telecom" name="telecom" value="" />
          <input type="hidden" id="birthday" name="birthday" value="" />

          <div class="form_content">
            <div class="form_section">
              <div class="join_toggle" id="divToggle">
                <input type="checkbox" id="join_toggle" checked="" />
                <label for="join_toggle">실명 인증된 아이디로 가입</label>
              </div>

              <div class="form_list">
                <div class="form_item user" id="divId">
                  <input
                    type="text"
                    id="id"
                    name="id"
                    placeholder="아이디"
                    class="input"
                    value=""
                    maxlength="20"
                    autocapitalize="off" />
                  <div class="id_naver">@naver.com</div>
                </div>
                <div class="form_item lock password" id="divPasswd">
                  <input
                    type="password"
                    id="pswd1"
                    name="pswd1"
                    placeholder="비밀번호"
                    class="input"
                    value=""
                    maxlength="20"
                    autocomplete="new-password" />
                  <div class="password_info">
                    <em class="how_secure" id="secureLevel"></em>
                    <button type="button" class="btn_show hide">
                      <span class="blind">비밀번호 보기</span>
                    </button>
                  </div>
                </div>
                <div class="form_item email" id="divEmail">
                  <span class="placeholder_prefix">[선택]</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="[선택] 비밀번호 분실 시 확인용 이메일"
                    class="input"
                    value=""
                    maxlength="100" />
                </div>
              </div>
              <div
                class="error_text item_style"
                id="idMsg"
                style="display: none"></div>
              <div
                class="error_text item_style"
                id="pswd1Msg"
                style="display: none"></div>
              <div
                class="error_text item_style"
                id="emailMsg"
                style="display: none"></div>

              <div class="form_list">
                <div class="form_item user" id="divName">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름"
                    class="input"
                    value=""
                    maxlength="40" />
                </div>
                <div class="form_item calendar" id="divBirthday">
                  <input
                    type="text"
                    id="birthdayInput"
                    placeholder="생년월일 8자리"
                    class="input"
                    value=""
                    maxlength="10" />
                </div>
                <div class="form_item phone" id="divPhoneNo">
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="휴대전화번호"
                    class="input"
                    value=""
                    maxlength="16" />
                </div>
              </div>
              <div class="form_list" id="divTerm">
                <div class="form_item check_box" id="itemAgree">
                  <div class="title_area">
                    <div class="check_circle">
                      <input type="checkbox" id="agree_all" class="blind" />
                      <label for="agree_all">
                        <em class="option point">[필수]</em>
                        <span class="text">인증 약관 전체동의</span>
                      </label>
                    </div>
                    <button
                      type="button"
                      class="btn_expand"
                      aria-expanded="false">
                      <span class="blind">약관 목록</span>
                    </button>
                  </div>
                  <ul class="check_list">
                    <li class="item">
                      <div class="check_normal">
                        <input type="checkbox" id="agree_01" class="blind" />
                        <label for="agree_01">
                          <span class="text">개인정보 이용</span>
                        </label>
                        <a
                          href="https://nid.naver.com/user2/common/terms/terms2?t=viewPersonalInfoTerms&amp;v=1"
                          target="_blank"
                          class="link_arrow">
                          <span class="blind">약관 전문보기</span>
                        </a>
                      </div>
                      1
                    </li>
                    <li class="item">
                      <div class="check_normal">
                        <input type="checkbox" id="agree_02" class="blind" />
                        <label for="agree_02">
                          <span class="text">고유식별정보 처리</span>
                        </label>
                        <a
                          href="https://nid.naver.com/user2/common/terms/terms2?t=viewUniqInfoTerms&amp;v=1"
                          target="_blank"
                          class="link_arrow">
                          <span class="blind">약관 전문보기</span>
                        </a>
                      </div>
                      2
                    </li>
                    <li class="item">
                      <div class="check_normal">
                        <input type="checkbox" id="agree_03" class="blind" />
                        <label for="agree_03">
                          <span class="text">통신사 이용약관</span>
                        </label>
                        <a
                          href="https://nid.naver.com/user2/common/terms/terms2?t=viewCellPhoneCarriersTerms&amp;v=1"
                          target="_blank"
                          class="link_arrow">
                          <span class="blind">약관 전문보기</span>
                        </a>
                      </div>
                      3
                    </li>
                    <li class="item">
                      <div class="check_normal">
                        <input type="checkbox" id="agree_04" class="blind" />
                        <label for="agree_04">
                          <span class="text">인증사 이용약관</span>
                        </label>
                        <a
                          href="https://nid.naver.com/user2/common/terms/terms2?t=viewServiceTerms&amp;v=1"
                          target="_blank"
                          class="link_arrow">
                          <span class="blind">약관 전문보기</span>
                        </a>
                      </div>
                      4
                    </li>
                    <li class="item">
                      <div class="check_normal">
                        <input type="checkbox" id="agree_05" class="blind" />
                        <label for="agree_05">
                          <span class="text">네이버 개인정보수집</span>
                        </label>
                        <a
                          href="https://nid.naver.com/user2/common/terms/terms2?t=viewNaverTerms&amp;v=2"
                          target="_blank"
                          class="link_arrow">
                          <span class="blind">약관 전문보기</span>
                        </a>
                      </div>
                      5
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="btn_submit_wrap" id="divBtnJoin" style="display: none">
            <button type="button" class="btn_submit" id="btnJoin">
              가입하기
            </button>
          </div>
        </form>
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
