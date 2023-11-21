// import { ref, computed } from "vue";
// import { defineStore } from "pinia";

// import { postEstate, getEstateList, getEstate, putEstate, delEstate } from "@/api/estate";

// export const useEstateStore = defineStore("estate", () => {
//   // State (데이터)
//   const estateList = ref([]);
//   const estate = ref({});

//   // Getters (Computed: State를 가공한 결과를 리턴)
//   const getterEstateList = computed(() => {
//     //  boards.value.filter((board) => {
//     // 필요한 처리 작성
//     //  });

//     return estateList.value;
//   });

//   const getterEstateList = computed(() => {
//     return estate.value;
//   });

//   // Actions (Method: 일반 메서드 혹은 비동기 처리를 위한 부분)
//   const insertEstate = async (estate) => {
//     console.log("insertEstate", estate);
//     try {
//       const response = await postArticle(estate);
//       if (response.status === 200) {
//         return "success";
//       } else {
//         throw new Error(response.status);
//       }
//     } catch (error) {
//       console.log(error);
//       return "fail";
//     }
//   };

//   const selectArticles = async (params) => {
//     console.log(`selectArticles : `, params);

//     try {
//       const response = await getListArticles(params);
//       if (response.status === 200) {
//         articles.value = response.data.articles;
//         console.log(response);
//         currentPage.value = response.data.currentPage;
//         totalPage.value = response.data.totalPageCount;
//         return "success";
//       } else if (response.status === 204) {
//         articles.value = response.data;
//         console.log(response);
//         currentPage.value = 1;
//         totalPage.value = 1;
//         return "empty";
//       } else {
//         throw new Error(response.status);
//       }
//     } catch (error) {
//       return "fail";
//     }
//   };

//   const selectArticle = async (articleNo) => {
//     console.log("selectArticle");

//     try {
//       const { status, data } = await getArticle(articleNo);

//       if (status === 200) {
//         article.value = data;
//         return "success";
//       } else {
//         throw new Error(status);
//       }
//     } catch (error) {
//       console.log(error);
//       return "fail";
//     }
//   };

//   const updateArticle = async () => {
//     console.log("updateArticle", article.value);
//     try {
//       const { status } = await putArticle(article.value);
//       if (status === 200) {
//         return "success";
//       } else {
//         throw new Error(status);
//       }
//     } catch (error) {
//       console.log(error);
//       return "fail";
//     }
//   };

//   const removeArticle = async () => {
//     console.log("removeArticle", article.value.articleNo);
//     try {
//       const { status } = await delArticle(article.value.articleNo);
//       if (status === 200) {
//         return "success";
//       } else {
//         throw new Error(status);
//       }
//     } catch (error) {
//       console.log(error);
//       return "fail";
//     }
//   };

//   // 외부에서 사용할 것들은 return 해야 한다.
//   return {
//     articles,
//     article,
//     currentPage,
//     totalPage,
//     key,
//     word,
//     getterArticles,
//     getterArticle,
//     insertArticle,
//     selectArticles,
//     selectArticle,
//     updateArticle,
//     removeArticle,
//   };
// });
