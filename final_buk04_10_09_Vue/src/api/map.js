import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const url = "/commerce";

export const getStoreList = (params) => {
  // console.log("=================  getStoreList()  ===================");
  return local.get(`${url}/storeList`, { params });
};

export const getDealCostAvgByDong = (params) => {
  return local.get(`${url}/dealCost`, { params });
};

export const getEstateList = (params) => {
  return local.get(`${url}/estateList`, { params });
};
export const getEstate = (id) => {
  return local.get(`${url}/estate/${id}`);
};
