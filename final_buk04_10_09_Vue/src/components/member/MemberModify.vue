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
  userid: "",
  emailid: "",
  emaildomain: "",
  userpwd: "",
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
  userinfoNew.userid = userInfo.value.userId;
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
  <!-- <div style="margin-bottom: 100px">
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
  </div> -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="login_wrap">
          <ul class="panel_wrap">
            <li class="panel_item" style="display: block">
              <div class="panel_inner" role="tabpanel" aria-controls="loinid">
                <div class="id_pw_wrap">
                  <div class="input_row" id="id_line">
                    <div class="icon_cell" id="id_cell">
                      <span class="icon_id">
                        <span class="blind">아이디</span>
                      </span>
                    </div>
                    <input
                      disabled
                      type="text"
                      id="id"
                      name="id"
                      placeholder="아이디"
                      title="아이디"
                      class="input_text"
                      maxlength="41"
                      v-model="userinfoNew.userid"
                      style="color: #aaa"
                    />
                    <span
                      role="button"
                      class="btn_delete"
                      id="id_clear"
                      style="display: none"
                    >
                      <span class="icon_delete">
                        <span class="blind">삭제</span>
                      </span>
                    </span>
                  </div>

                  <div class="input_row" id="pw_line">
                    <div class="icon_cell" id="pw_cell">
                      <span class="icon_pw">
                        <span class="blind">비밀번호</span>
                      </span>
                    </div>
                    <input
                      type="password"
                      id="pw"
                      name="pw"
                      placeholder="비밀번호"
                      title="비밀번호"
                      class="input_text"
                      maxlength="16"
                      v-model="userinfoNew.userpwd"
                      @keyup.enter="login"
                    />
                    <span
                      role="button"
                      class="btn_delete"
                      id="pw_clear"
                      style="display: none"
                    >
                      <span class="icon_delete">
                        <span class="blind">삭제</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div class="btn_login_wrap">
                  <button
                    type="submit"
                    class="btn_login"
                    id="log.login"
                    @click="modifyUser"
                  >
                    <span class="btn_text">정보 수정</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
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

.estate-list-header {
  font-weight: 700;
  font-size: 30px;
  line-height: px;
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
.panel_wrap {
  position: relative;
  z-index: 3;
  margin-top: -8px;
}
.panel_item {
  display: block;
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
}
.panel_inner {
  padding: 40px 30px;
}
.login_keep_wrap {
  position: relative;
  margin-top: 13px;
  padding-right: 90px;
}
.keep_check {
  position: relative;
  padding-left: 23px;
  cursor: pointer;
  color: #777;
}
.keep_check .keep_text {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #777;
}
label {
  cursor: pointer;
}
.btn_login_wrap {
  margin-top: 38px;
}
.btn_login {
  display: block;
  width: 100%;
  padding: 13px 0 13px;
  border-radius: 6px;
  background-color: rgb(58, 155, 250);
  background-color: rgb(58, 155, 250);
  box-sizing: border-box;
}
.btn_login .btn_text {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: white;
}
.id_pw_wrap .input_row:first-child {
  border-radius: 6px 6px 0 0;
  box-shadow: none;
}
.id_pw_wrap .input_row {
  display: table;
  table-layout: fixed;
  width: 100%;
  padding: 14px 17px 13px;
  box-sizing: border-box;
}
.input_row {
  position: relative;
  display: block;
  height: 100%;
  border: 1px solid #dadada;
  padding: 16px 18px 15px;
  border-radius: 6px;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 0 2px 6px 0 rgba(68, 68, 68, 0.08);
}
.id_pw_wrap .input_row .icon_cell {
  display: table-cell;
  width: 24px;
  vertical-align: middle;
}
.id_pw_wrap .input_row .input_text {
  display: table-cell;
  padding-right: 30px;
}
.input_text {
  position: relative;
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.5px;
  color: #222;
  box-sizing: border-box;
  z-index: 4;
}
input {
  border-radius: 0;
  border: none;
  background: 0 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  -webkit-text-size-adjust: none;
}
.keep_check .input_keep {
  position: absolute;
  top: 2px;
  left: 3px;
  width: 15px;
  height: 15px;
}
.id_pw_wrap .input_row .icon_cell .icon_pw {
  position: absolute;
  top: 50%;
  left: 17px;
  margin-top: -8px;
  background-position: -129px -203px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
}

.id_pw_wrap .input_row .icon_cell .icon_id {
  position: absolute;
  top: 50%;
  left: 17px;
  margin-top: -8px;
  background-position: -93px -203px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
}
button,
input,
select,
textarea {
  border-radius: 0;
  border: none;
  background: 0 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  -webkit-text-size-adjust: none;
}
.id_pw_wrap .input_row:last-child {
  border-radius: 0 0 6px 6px;
}
.id_pw_wrap .input_row {
  display: table;
  table-layout: fixed;
  width: 100%;
  padding: 14px 17px 13px;
  box-sizing: border-box;
}
.input_row + .input_row {
  margin-top: -1px;
}
.input_row {
  position: relative;
  display: block;
  height: 100%;
  border: 1px solid #dadada;
  padding: 16px 18px 15px;
  border-radius: 6px;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 0 2px 6px 0 rgba(68, 68, 68, 0.08);
}
.blind {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
.find_wrap,
.relogin_find_wrap {
  padding: 20px 0 35px;
  text-align: center;
}
ol,
ul {
  list-style: none;
}
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
  font-family: -apple-system, BlinkMacSystemFont, helvetica,
    "Apple SD Gothic Neo", sans-serif;
}
.find_wrap .en_find_text,
.find_wrap .find_text,
.relogin_find_wrap .en_find_text,
.relogin_find_wrap .find_text {
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  color: #888;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.login_wrap {
  box-sizing: border-box;
  width: 460px;
  margin: 0 auto;
}
li {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
  font-family: -apple-system, BlinkMacSystemFont, helvetica,
    "Apple SD Gothic Neo", sans-serif;
}
.find_wrap li + li::before,
.relogin_find_wrap li + li::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 12px;
  width: 1px;
  height: 12px;
  border-radius: 0.5px;
  background-color: #dadada;
}
.find_wrap li + li,
.relogin_find_wrap li + li {
  padding-left: 28px;
}
.find_wrap li,
.relogin_find_wrap li {
  position: relative;
  display: inline-block;
}
.keep_check .keep_text::before {
  content: "";
  position: absolute;
  left: 0;
  background-position: -244px -87px;
  background-repeat: no-repeat;
  width: 18px;
  height: 18px;
  background-color: #fff;
}
.keep_check input:checked + .keep_text::before {
  background-position: -244px -87px;
  background-repeat: no-repeat;
  width: 18px;
  height: 18px;
  background-color: rgb(58, 155, 250);
  border-radius: 100%;
}
.bullet_help,
.captcha_form .image::after,
.captcha_form .reload::after,
.captcha_form .voice::after,
.captcha_wrap .voice_box .icon_voice,
.chatbot .icon_chatbot,
.icon_delete,
.id_pw_wrap .input_row .icon_cell .icon_id,
.id_pw_wrap .input_row .icon_cell .icon_pw,
.id_pw_wrap .input_row.on .icon_cell .icon_id,
.id_pw_wrap .input_row.on .icon_cell .icon_pw,
.img_lock,
.img_wowpoint,
.ip_relogin_box .relogin_close::after,
.ip_relogin_box .relogin_tip::before,
.keep_check .keep_text::before,
.keep_check input:checked + .keep_text::before,
.lang::after,
.menu_id .menu_text::before,
.menu_id.on .menu_text::before,
.menu_id.on::after,
.menu_ones .menu_text::before,
.menu_ones.on .menu_text::before,
.menu_ones.on::after,
.menu_ones.on::before,
.menu_qr .menu_text::before,
.menu_qr.on .menu_text::before,
.menu_qr.on::before,
.nudge_banner .nudge_close .icon_nudge_close,
.ones_text .bullet_set,
.pop_img_lock,
.qrcode_help_stepbox .popup_close::after,
.qrcode_help_stepbox .step_title::before,
.reconfirm_sub .captcha_form .image::after,
.reconfirm_sub .captcha_form .reload::after,
.reconfirm_sub .captcha_form .voice::after,
.reconfirm_sub .captcha_wrap .voice_box .icon_voice,
.sns_wrap li:nth-child(1) .sns_text::before,
.sns_wrap li:nth-child(2) .sns_text::before,
.sns_wrap li:nth-child(3) .sns_text::before,
.step_ask .ask_text::before,
.sub_desc .bullet_greendot,
.sub_desc .bullet_lens,
.time_wrap .btn_renewal::before {
  background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
  background-size: 266px 225px;
  background-repeat: no-repeat;
}
</style>
