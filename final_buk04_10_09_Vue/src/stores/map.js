import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { getStoreList, getDealCostAvgByDong, getEstateList } from "@/api/map";

export const useMapStore = defineStore("map", () => {
  // State
  const isStoreList = ref(false);
  const storeList = ref([]);
  const isDealCostSelected = ref(false);
  const dealCostAvgByDong = ref({});
  const estateList = ref([
    {
      id: 1,
      dealClass: "매매",
      dealAmount: 9000,
      floor: 1,
      area: 25.7,
      description: "매물입니다.",
      join_year: "2023",
      join_month: "06",
      join_day: "12",
      sido: "서울특별시",
      gugun: "강서구",
      dong: "등촌동",
      jibun: "120-2",
      dongCode: "1234567890",
      lat: "37.56714408016501",
      lon: "126.97878516702059",
    },
    {
      id: 2,
      dealClass: "매매",
      dealAmount: 9000,
      floor: 1,
      area: 25.7,
      description: "매물입니다.2",
      join_year: "2023",
      join_month: "06",
      join_day: "12",
      sido: "서울특별시",
      gugun: "강서구",
      dong: "등촌동",
      jibun: "120-2",
      dongCode: "1234567890",
      lat: "37.56715519176757",
      lon: "126.97796169885171",
    },
    {
      id: 3,
      dealClass: "매매",
      dealAmount: 9000,
      floor: 1,
      area: 25.7,
      description: "매물입니다.3",
      join_year: "2023",
      join_month: "06",
      join_day: "12",
      sido: "서울특별시",
      gugun: "강서구",
      dong: "등촌동",
      jibun: "120-2",
      dongCode: "1234567890",
      lat: "37.56713048144187",
      lon: "126.9783239174286",
    },
  ]);

  // Getters
  // Actions
  const selectStoreList = async (params) => {
    console.log(`selectStoreList : `, params);

    try {
      const response = await getStoreList(params);
      if (response.status === 200) {
        storeList.value = response.data;
        console.log(response);
        return "success";
      } else if (response.status === 204) {
        storeList.value = response.data;
        console.log(response);
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };
  const selectDealCostAvgByDong = async (params) => {
    console.log(`selectDealCostAvgByDong : `, params);

    try {
      const response = await getDealCostAvgByDong(params);
      if (response.status === 200) {
        dealCostAvgByDong.value = response.data;
        console.log(response);
        return "success";
      } else if (response.status === 204) {
        dealCostAvgByDong.value = response.data;
        console.log(response);
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };
  const selectEstateList = async (params) => {
    console.log(`selectEstateList : `, params);

    try {
      const response = await getEstateList(params);
      if (response.status === 200) {
        estateList.value = response.data;
        console.log(response);
        return "success";
      } else if (response.status === 204) {
        estateList.value = response.data;
        console.log(response);
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };

  // Return
  return {
    isStoreList,
    storeList,
    isDealCostSelected,
    dealCostAvgByDong,
    estateList,
    selectStoreList,
    selectDealCostAvgByDong,
    selectEstateList,
  };
});
