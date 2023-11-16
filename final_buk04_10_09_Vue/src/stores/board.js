import { ref, computed } from "vue";
import { defineStore } from "pinia";

import {
  postArticle,
  getListArticles,
  getArticle,
  putArticle,
  delArticle,
} from "@/api/board";

export const useBoardStore = defineStore("board", () => {
  // State (데이터)
  const articles = ref([]);
  const article = ref({});
  const currentPage = ref(1);
  const totalPage = ref(1);
  const key = ref("");
  const word = ref("");

  // Getters (Computed: State를 가공한 결과를 리턴)
  const getterArticles = computed(() => {
    //  boards.value.filter((board) => {
    // 필요한 처리 작성
    //  });

    return articles.value;
  });

  const getterArticle = computed(() => {
    return article.value;
  });

  // Actions (Method: 일반 메서드 혹은 비동기 처리를 위한 부분)
  const insertArticle = async (article) => {
    console.log("insertArticle", article);
    try {
      const response = await postArticle(article);
      if (response.status === 200) {
        return "success";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };

  const selectArticles = async (params) => {
    console.log(`selectArticles : `, params);

    try {
      const response = await getListArticles(params);
      if (response.status === 200) {
        articles.value = response.data.articles;
        console.log(response);
        currentPage.value = response.data.currentPage;
        totalPage.value = response.data.totalPageCount;
        return "success";
      } else if (response.status === 204) {
        articles.value = response.data;
        console.log(response);
        currentPage.value = 1;
        totalPage.value = 1;
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };

  const selectArticle = async (articleNo) => {
    console.log("selectArticle");

    try {
      const { status, data } = await getArticle(articleNo);

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

  const updateArticle = async () => {
    console.log("updateArticle", article.value);
    try {
      const { status } = await putArticle(article.value);
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

  const removeArticle = async () => {
    console.log("removeArticle", article.value.articleNo);
    try {
      const { status } = await delArticle(article.value.articleNo);
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
    articles,
    article,
    currentPage,
    totalPage,
    key,
    word,
    getterArticles,
    getterArticle,
    insertArticle,
    selectArticles,
    selectArticle,
    updateArticle,
    removeArticle,
  };
});
