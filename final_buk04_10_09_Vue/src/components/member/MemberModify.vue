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
const userinfoNew = ref({
  username: "",
  userid: "",
  emailid: "",
  emaildomain: "",
  userpwd: "",
});
const checkPwd = ref("");

// Method
const modifyUser = async () => {
  if (checkPwd.value !== userinfoNew.value.userpwd) {
    alert("비밀번호를 확인해주세요.");
    return;
  }
  console.log("aaaaaaaaaaaaaaaaaaaaa", userinfoNew.value);
  const resp = await updateUser(userinfoNew.value);
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
  userinfoNew.value.username = userInfo.value.userName;
  userinfoNew.value.userid = userInfo.value.userId;
  userinfoNew.value.emailid = userInfo.value.emailId;
  userinfoNew.value.emaildomain = userInfo.value.emailDomain;
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
  <div class="inner">
    <div class="content">
      <form id="join_form" method="post" action="/user2/join/end" class="form">
        <input
          type="hidden"
          id="token_sjoin"
          name="token_sjoin"
          value="26Sdblo4Lq25nf34"
        />
        <input type="hidden" id="nid_kb2" name="nid_kb2" value="" />
        <input
          type="hidden"
          id="joinMode"
          name="joinMode"
          value="joinIdentity"
        />
        <input type="hidden" id="encPswd" name="encPswd" value="" />
        <input type="hidden" id="encKey" name="encKey" value="" />
        <input type="hidden" id="telecom" name="telecom" value="" />
        <input type="hidden" id="birthday" name="birthday" value="" />

        <div class="form_content">
          <div class="form_section">
            <div class="form_list">
              <div class="form_item user" id="divName">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름"
                  class="input"
                  v-model="userinfoNew.username"
                  maxlength="40"
                />
              </div>
              <!-- <div class="form_item calendar" id="divBirthday">
                <input
                  type="text"
                  id="birthdayInput"
                  placeholder="생년월일 8자리"
                  class="input"
                  value=""
                  maxlength="10" />
              </div> -->
            </div>
            <div class="form_list">
              <div class="form_item user" id="divId">
                <input
                  disabled
                  type="text"
                  v-model="userinfoNew.userid"
                  id="id"
                  name="id"
                  placeholder="아이디"
                  class="input"
                  maxlength="20"
                  autocapitalize="off"
                  style="cursor: default; color: #bbb"
                />
              </div>
              <div class="form_item lock password" id="divPasswd">
                <input
                  type="password"
                  id="pswd1"
                  name="pswd1"
                  placeholder="비밀번호"
                  class="input"
                  v-model="userinfoNew.userpwd"
                  maxlength="20"
                  autocomplete="new-password"
                />
              </div>
              <div class="form_item lock password" id="divPasswd">
                <input
                  type="password"
                  id="pswd2"
                  name="pswd2"
                  placeholder="비밀번호 확인"
                  class="input"
                  maxlength="20"
                  autocomplete="new-password"
                  v-model="checkPwd"
                />
              </div>
              <div class="form_item email" id="divEmail">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일 아이디"
                  class="input"
                  v-model="userinfoNew.emailid"
                  maxlength="100"
                /><span class="input-group-text">@</span>
                <select
                  v-model="userinfoNew.emaildomain"
                  class="form-select select"
                  id="emaildomain"
                  name="emaildomain"
                  aria-label="이메일 도메인 선택"
                >
                  <option selected value="">example.com</option>
                  <option value="ssafy.com">ssafy.com</option>
                  <option value="google.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                  <option value="kakao.com">kakao.com</option>
                </select>
              </div>
            </div>
            <div
              class="error_text item_style"
              id="idMsg"
              style="display: none"
            ></div>
            <div
              class="error_text item_style"
              id="pswd1Msg"
              style="display: none"
            ></div>
            <div
              class="error_text item_style"
              id="emailMsg"
              style="display: none"
            ></div>
          </div>
        </div>
        <div class="btn_submit_wrap" id="divBtnJoin">
          <button
            type="button"
            class="btn_submit"
            id="btnJoin"
            @click="modifyUser"
          >
            수정하기
          </button>
        </div>
      </form>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
.btn_submit {
  width: 100%;
  padding: 14px 0;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgb(58, 155, 250);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #fff;
}
.btn_submit_wrap {
  flex: none;
  padding: 20px;
}
.check_normal {
  display: inline-block;
  vertical-align: top;
}
.check_list .item {
  display: inline-block;
  min-width: 50%;
  vertical-align: top;
  padding-top: 7px;
}
.form_item.check_box .check_list {
  display: none;
  padding: 9px 14px 16px;
  border-top: 1px solid #dfdfdf;
}
.form_item.check_box .btn_expand {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
}
.form_item.check_box .btn_expand::before {
  background-position: -96px -244px;
  background-repeat: no-repeat;
  width: 16px;
  height: 17px;
  display: inline-block;
  vertical-align: top;
  content: "";
}
.check_circle .option + .text {
  font-weight: 600;
}
.check_circle .text {
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.8px;
  color: #222;
  vertical-align: middle;
}
.check_circle .option.point {
  color: rgb(58, 155, 250);
}
.check_circle .option {
  display: inline-block;
  margin-right: 4px;
  font-size: 13px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.6px;
  color: #929294;
  vertical-align: middle;
}
address,
em {
  font-style: normal;
}
.check_circle label::before {
  background-position: -342px -200px;
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.check_circle label {
  display: inline-block;
  position: relative;
  padding-left: 28px;
  vertical-align: middle;
}
label {
  cursor: pointer;
}
.blind {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
.check_circle input:checked + label::before {
  border-radius: 0;
  background-position: -342px -224px;
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
}
.form_item.check_box .title_area {
  position: relative;
  padding: 14px 45px 14px 14px;
}
.form_item::before {
  position: absolute;
  top: 10px;
  left: 9px;
  content: "";
}
.form_item.check_box {
  display: block;
  padding: 0;
}

.form_item:last-of-type {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.form_item:first-of-type {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.error_text + .form_list {
  margin-top: 10px;
}
.form_list {
  position: relative;
  margin-bottom: 10px;
  border-radius: 6px;
}
.form_item.email::before {
  background-position: -96px -296px;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
}
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
.form {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
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
}
.form_item:first-of-type {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.form_item {
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 50px;
  padding: 0 10px 0 45px;
}
.input {
  flex: 1 1 auto;
  box-sizing: border-box;
  width: 70%;
  font-size: 16px;
  line-height: 22px;
  color: #222;
}
.select {
  padding: 0 20px;
  width: 310px;
  text-align: center;

  flex: 1 1 auto;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 22px;
  color: #777;
}
.form_list::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  border: 1px solid #c6c6c6;
  pointer-events: none;
  content: "";
}
.how_secure {
  display: none;
  padding: 4px 6px 3px 6px;
  border-radius: 10px;
  background: rgba(255, 168, 0, 0.12);
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: -0.4px;
  color: #ffa41c;
  vertical-align: middle;
}
.btn_show {
  margin-left: 4px;
  vertical-align: middle;
}

button {
  cursor: pointer;
}
address,
em {
  font-style: normal;
}
.form_item .id_naver {
  flex: none;
  padding: 0 4px 0 6px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #767678;
}
.form_item.email::before {
  background-position: -96px -296px;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
}
.form_item + .form_item {
  margin-top: -1px;
}
.form_item:last-of-type {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.form_item::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  border: 1px solid #dfdfdf;
  pointer-events: none;
  content: "";
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
.form_item.user::before {
  background-position: -342px -64px;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
}
.form_item + .form_item {
  margin-top: -1px;
}
.form_list {
  position: relative;
  margin-bottom: 10px;
  border-radius: 6px;
}
.form_item.lock::before {
  background-position: -310px 0;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
}
.form_content {
  flex: 1 1 auto;
}
.form_section {
  margin-right: 20px;
  margin-left: 20px;
}
.inner {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 500px;
  margin: 0 auto;
}
.content {
  flex: 1 1 auto;
  padding-top: 30px;
}
.admit_tab .tab .text::before,
.admit_tab .tab[aria-selected="true"] .text::before,
.bottom_popup .benefit_item.gift::before,
.bottom_popup .benefit_item.remit::before,
.bottom_popup .benefit_item.touch::before,
.bottom_popup .btn_area .text.logo_n::before,
.bottom_popup .btn_expand .text::before,
.bottom_popup .title.icon_phone::before,
.btn_show.hide::before,
.btn_show::before,
.btn_telecom::after,
.check_circle input:checked + label::before,
.check_circle label::before,
.check_circle.error label::before,
.check_normal .link_arrow::before,
.check_normal input:checked + label::before,
.check_normal label::before,
.check_terms .link_arrow::before,
.check_terms input:checked + label::before,
.check_terms label::before,
.form_item.calendar.error::before,
.form_item.calendar.on::before,
.form_item.calendar::before,
.form_item.check_box .btn_expand::before,
.form_item.check_box.error .check_circle label::before,
.form_item.email.error::before,
.form_item.email.on::before,
.form_item.email::before,
.form_item.globe.error::before,
.form_item.globe::before,
.form_item.group.error::before,
.form_item.group.on::before,
.form_item.group::before,
.form_item.group_type.error::before,
.form_item.group_type.on::before,
.form_item.group_type::before,
.form_item.lock.error::before,
.form_item.lock.on::before,
.form_item.lock::before,
.form_item.phone.error::before,
.form_item.phone.on::before,
.form_item.phone::before,
.form_item.registration_number.error::before,
.form_item.registration_number.on::before,
.form_item.registration_number::before,
.form_item.telecom.error::before,
.form_item.telecom.on::before,
.form_item.telecom::before,
.form_item.user.error::before,
.form_item.user.on::before,
.form_item.user::before,
.help_modal_wrap .btn_close::before,
.help_modal_wrap .btn_expand::after,
.join_link_area .link::after,
.join_toggle input:checked + label::after,
.join_toggle label::after,
.lang_select_wrap::after,
.lang_select_wrap::before,
.link_certify::after,
.logo_naver .link::before,
.select_box::after,
.welcome_wrap .main_title::before,
.welcome_wrap .service_link.blog::before,
.welcome_wrap .service_link.cafe::before,
.welcome_wrap .service_link.home::before,
.welcome_wrap .service_link.id::before,
.welcome_wrap .service_link.mail::before,
.welcome_wrap .service_link.shopping::before,
.welcome_wrap .service_link::after {
  background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png);
  background-size: 372px 326px;
  background-repeat: no-repeat;
}
</style>
