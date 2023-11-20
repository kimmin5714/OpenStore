import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const url = "/commerce";

export const getStoreList = (params) => {
  return local.get(`${url}/storeList`, { params });
};

export const getDealCostAvgByDong = (params) => {
  return local.get(`${url}/dealCost`, { params });
};
