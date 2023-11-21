import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";
import AdminView from "@/views/AdminView.vue";
import { useAdminStore } from "@/stores/admin";
import { storeToRefs } from "pinia";

const onlyAuthUser = async (to, from) => {
  //   // const { userInfo } = storeToRefs(memberStore);
  const { isLogin } = storeToRefs(useAdminStore());
  if (!isLogin.value) {
    alert("로그인이 필요한 페이지입니다.");
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "IndexView",
      component: IndexView,
    },
    {
      path: "/board",
      name: "BoardView",
      component: () => import("@/views/BoardView.vue"),
      redirect: { name: "BoardList" },
      children: [
        {
          path: "list",
          name: "BoardList",
          component: () => import("@/components/board/BoardList.vue"),
        },
        {
          path: "detail/:articleNo",
          name: "BoardDetail",
          component: () => import("@/components/board/BoardDetail.vue"),
        },
        {
          path: "modify/:articleNo",
          name: "BoardModify",
          component: () => import("@/components/board/BoardModify.vue"),
          beforeEnter: onlyAuthUser,
        },
        {
          path: "create",
          name: "BoardCreate",
          component: () => import("@/components/board/BoardCreate.vue"),
          beforeEnter: onlyAuthUser,
        },
      ],
    },
    {
      path: "/adminUserList",
      name: "AdminUserList",
      component: AdminView,
      redirect: "/adminUserList/list",
      children: [
        {
          path: "list",
          name: "member-list",
          component: () => import("@/components/member/AdminUserList.vue"),
        },
        {
          path: "view",
          name: "member-view",
          // component: () => import("@/components/member/MemberDetail.vue"),
        },
        {
          path: "join",
          name: "member-join",
          component: () => import("@/components/member/MemberJoin.vue"),
        },
        {
          path: "modify",
          name: "member-modify",
          component: () => import("@/components/member/MemberModify.vue"),
        },
      ],
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/UserView.vue"),
      children: [
        {
          path: "login",
          name: "user-login",
          component: () => import("@/components/member/MemberLogin.vue"),
        },
        {
          path: "join",
          name: "user-join",
          component: () => import("@/components/member/MemberJoin.vue"),
        },
        // {
        //   path: "mypage",
        //   name: "user-mypage",
        //   component: () => import("@/components/member/UserMyPage.vue"),
        // },
      ],
    },
    {
      path: "/apart",
      name: "apart-view",
      // 컴포넌트 아파트
      component: () => import("@/views/ApartView.vue"),
      // redirect: "/apart"
      children: [
        {
          path: "home",
          name: "apart-navbar-home",
          component: () =>
            import(
              "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/ApartNavbarHome.vue"
            ),
        },
        {
          path: "search",
          name: "apart-navbar-search",
          component: () =>
            import(
              "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/ApartNavbarSearch.vue"
            ),
        },
        {
          path: "bookmarks",
          name: "apart-navbar-bookmarks",
          component: () =>
            import(
              "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/ApartNavbarBookmarks.vue"
            ),
          // beforeEnter: onlyAuthUser,
        },
        {
          path: "notifications",
          name: "apart-navbar-notifications",
          component: () =>
            import(
              "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/ApartNavbarNotifications.vue"
            ),
          // beforeEnter: onlyAuthUser,
        },
        {
          path: "detail/:id",
          name: "ApartDetail",
          component: () =>
            import(
              "@/components/apart/MapMenu/LeftMenu/LeftMenuItem/ApartDetail.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
