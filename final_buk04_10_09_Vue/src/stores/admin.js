import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

import {
  loginMember,
  memberList,
  joinMember,
  modify,
  deleteUser,
  findById,
  tokenRegeneration,
  logout,
} from "@/api/admin";
import { httpStatusCode } from "@/utils/http-status";

export const useAdminStore = defineStore("admin", () => {
  // State (데이터)
  const users = ref([]);
  const user = ref({});
  const isLogin = ref(false);
  const isLoginError = ref(false);
  const userInfo = ref(null);
  const isValidToken = ref(false);

  // Getters (Computed: State를 가공한 결과를 리턴)
  const getterUsers = computed(() => {
    //  boards.value.filter((board) => {
    // 필요한 처리 작성
    //  });

    return users.value;
  });

  const getterUser = computed(() => {
    return user.value;
  });

  // Actions (Method: 일반 메서드 혹은 비동기 처리를 위한 부분)
  const userLogin = async (member) => {
    console.log("member:", member);
    try {
      const response = await loginMember(member);
      // console.log("login ok!!!!", response.status);
      // console.log("login ok!!!!", httpStatusCode.CREATE);
      if (response.status === httpStatusCode.CREATE) {
        let { data } = response;
        // console.log("data", data);
        let accessToken = data["access-token"];
        let refreshToken = data["refresh-token"];
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        // isLogin.value = true;
        // isLoginError.value = false;
        // isValidToken.value = true;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        console.log("sessiontStorage에 담았다", isLogin.value);
        await getUserInfo(accessToken);
      } else {
        console.log("로그인 실패했다");
        isLogin.value = false;
        isLoginError.value = true;
        isValidToken.value = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async (token) => {
    console.log("token : ", token);
    let decodeToken = jwtDecode(token);
    console.log("2. decodeToken", decodeToken);

    try {
      const response = await findById(decodeToken.userId);
      if (response.status === httpStatusCode.OK) {
        userInfo.value = response.data.userInfo;
        console.log("3. getUserInfo data >> ", response.data);
        isLogin.value = true;
        isLoginError.value = false;
        isValidToken.value = true;
        return "success";
      } else {
        console.log("유저 정보 없음!!!!");
      }
    } catch (error) {
      console.error(
        "getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ",
        error
      );
      isValidToken.value = false;

      await tokenRegenerate();
    }
  };

  const tokenRegenerate = async () => {
    console.log(
      "토큰 재발급 >> 기존 토큰 정보 : {}",
      sessionStorage.getItem("accessToken")
    );
    try {
      const response = await tokenRegeneration(JSON.stringify(userInfo.value));
      if (response.status === httpStatusCode.CREATE) {
        let accessToken = response.data["access-token"];
        console.log("재발급 완료 >> 새로운 토큰 : {}", accessToken);
        sessionStorage.setItem("accessToken", accessToken);
        isValidToken.value = true;
      }
    } catch (error) {
      // HttpStatus.UNAUTHORIZE(401) : RefreshToken 기간 만료 >> 다시 로그인!!!!
      if (error.response.status === httpStatusCode.UNAUTHORIZED) {
        console.log("갱신 실패");
        // 다시 로그인 전 DB에 저장된 RefreshToken 제거.

        try {
          const response = await logout(userInfo.value.userid);
          if (response.status === httpStatusCode.OK) {
            console.log("리프레시 토큰 제거 성공");
          } else {
            console.log("리프레시 토큰 제거 실패");
          }
          alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
          isLogin.value = false;
          userInfo.value = null;
          isValidToken.value = false;
          router.push({ name: "user-login" });
        } catch (error) {
          console.error(error);
          isLogin.value = false;
          userInfo.value = null;
        }
      }
    }
  };

  const userLogout = async (userid) => {
    try {
      const response = await logout(userid);
      if (response.status === httpStatusCode.OK) {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
        // sessionStorage.clear();
        isLogin.value = false;
        isLoginError.value = false;
        userInfo.value = null;
        isValidToken.value = false;
        console.log("로그아웃 성공");
      } else {
        console.error("유저 정보 없음!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const insertMember = async (member) => {
    console.log("insertMember", member);
    try {
      const response = await joinMember(member);
      if (response.status === 201) {
        return "success";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };

  const selectMemberList = async () => {
    console.log("selectMemberList");

    try {
      const response = await memberList();
      if (response.status === 200) {
        users.value = response.data;
        return "success";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };

  const selectUserInfo = async (userId) => {
    console.log("selectUserInfo");

    try {
      const { status, data } = await getUserInfo(userId);

      if (status === 200) {
        article.value = data;
        return "success";
      } else {
        throw new Error(status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };

  const updateUser = async () => {
    console.log("updateUser", user.value);
    try {
      const { status } = await modify(user.value);
      if (status === 201) {
        return "success";
      } else {
        throw new Error(status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };

  const removeUser = async () => {
    console.log("removeUser", user.value.userId);
    try {
      const { status } = await deleteUser(user.value.userId);
      if (status === 200) {
        return "success";
      } else {
        throw new Error(status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };

  // 외부에서 사용할 것들은 return 해야 한다.
  return {
    user,
    users,
    isLogin,
    isLoginError,
    userInfo: userInfo,
    isValidToken,
    getterUser,
    getterUsers,
    userLogin,
    getUserInfo,
    tokenRegenerate,
    userLogout,
    insertMember,
    selectMemberList,
    selectUserInfo,
    updateUser,
    removeUser,
  };
});
