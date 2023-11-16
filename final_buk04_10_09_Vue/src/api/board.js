import { localAxios } from "@/utils/http-commons";

const local = localAxios();

export const postArticle = (article) => {
  return local.post(`/article/write`, JSON.stringify(article));
};

export const getArticle = (articleNo) => {
  return local.get(`/article/view/${articleNo}`);
};

export const getListArticles = (params) => {
  // export const getListArticles = () => {
  return local.get(`/article/list`, { params: params });
};

export const putArticle = (article) => {
  return local.put(`/article/modify`, JSON.stringify(article));
};

export const delArticle = (articleNo) => {
  return local.delete(`/article/delete/${articleNo}`);
};
