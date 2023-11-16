import { localAxios } from "@/utils/http-commons";

const local = localAxios();

export const searchDong = (address) => {
  console.log("searchDong 실행 : ", address);
  let { sido, gugun, dong } = address;

  return local.get(
    `/house/search-dong?sido=${sido}&gugun=${gugun}&dong=${dong}`
  );
};

export const searchApt = (aptCode) => {
  console.log("searchApt 실행 : ", aptCode);

  return local.get(`/house/search-apt?aptCode=${aptCode}`);
};
