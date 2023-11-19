import { localAxios } from "@/utils/http-commons";

const local = localAxios();

export const commercialProperties = () => {
  local.get(`/api/market`);
};
