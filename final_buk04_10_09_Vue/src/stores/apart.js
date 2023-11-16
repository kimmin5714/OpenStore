import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { searchDong, searchApt } from "@/api/apart";

export const useApartStore = defineStore("apart", () => {
  // State (데이터)
  const houseInfoList = ref([]);
  const houseDealList = ref([]);
  const selectPoint = ref({});

  // Getters (Computed: State를 가공한 결과를 리턴)
  const getterHouseInfoList = computed(() => {
    return houseInfoList.value;
  });

  const getterHouseDealList = computed(() => {
    return houseDealList.value;
  });

  const getterSelectPoint = computed(() => {
    return selectPoint.value;
  });

  // Actions (Method: 일반 메서드 혹은 비동기 처리를 위한 부분)
  const selectDong = async (address) => {
    console.log("selectDong");
    try {
      const response = await searchDong(address);
      if (response.status === 200) {
        houseInfoList.value = response.data;
        return "success";
      } else if (response.status === 204) {
        houseInfoList.value = response.data;
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };
  const selectApt = async (aptCode) => {
    console.log("selectApt");
    try {
      const response = await searchApt(aptCode);
      if (response.status === 200) {
        houseDealList.value = response.data;
        return "success";
      } else if (response.status === 204) {
        houseDealList.value = response.data;
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
      return "fail";
    }
  };

  // 외부에서 사용할 것들은 return 해야 한다.
  return {
    houseInfoList,
    houseDealList,
    selectPoint,
    getterHouseInfoList,
    getterHouseDealList,
    getterSelectPoint,
    selectDong,
    selectApt,
  };
});
