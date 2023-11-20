import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { getStoreList, getDealCostAvgByDong } from "@/api/map";

export const useMapStore = defineStore("map", () => {
  // State
  const isStoreList = ref(false);
  const storeList = ref([]);
  const isDealCostSelected = ref(false);
  const dealCostAvgByDong = ref({});

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

  // Return
  return {
    isStoreList,
    storeList,
    isDealCostSelected,
    dealCostAvgByDong,
    selectStoreList,
    selectDealCostAvgByDong,
  };
});
