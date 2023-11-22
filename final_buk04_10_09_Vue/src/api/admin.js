import { localAxios } from "@/utils/http-commons";

const local = localAxios(); //axuis instance

const url = "/user";

function loginMember(member) {
  return local.post(`${url}/login`, JSON.stringify(member));
}

function memberList() {
  return local.get(`${url}/adminUserList`);
}

// function getUserInfo(userId) {
//   return local.get(`${url}/adminUserList/view, ${userId}`);
// }

function joinMember(member) {
  return local.post(`${url}/join`, JSON.stringify(member));
}

function modify(member) {
  return local.put(`${url}/modify`, JSON.stringify(member));
}

function deleteUser(userId) {
  return local.delete(`${url}/delete, ${userId}`);
}

async function findById(userid, success, fail) {
  local.defaults.headers["Authorization"] =
    sessionStorage.getItem("accessToken");
  return await local.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  local.defaults.headers["refreshToken"] =
    sessionStorage.getItem("refreshToken"); //axios header에 refresh-token 셋팅
  return await local.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  return await local.get(`/user/logout/${userid}`).then(success).catch(fail);
}

export {
  loginMember,
  memberList,
  joinMember,
  modify,
  deleteUser,
  findById,
  tokenRegeneration,
  logout,
};
