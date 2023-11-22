import { ref, computed } from "vue";
import { defineStore } from "pinia";

import {
  getStoreList,
  getDealCostAvgByDong,
  getEstateList,
  getEstate,
  postEstate,
  getEstateRandomly,
} from "@/api/map";

export const useMapStore = defineStore("map", () => {
  // State
  const isStoreListClicked = ref(false);
  const isStoreListActivated = ref(false);
  const storeListFilter = ref("");
  const storeList = ref([]);
  const isDealCostSelected = ref(false);
  const dealCostAvgByDong = ref({});
  const estateList = ref([]);
  const estate = ref({});
  // 카카오맵 추가 기능 상태 변수
  const mapType = ref("roadmap");

  // Getters (Computed: State를 가공한 결과를 리턴)
  const getterEstateList = computed(() => {
    //  boards.value.filter((board) => {
    // 필요한 처리 작성
    //  });

    return estateList.value;
  });

  const getterEstate = computed(() => {
    return estate.value;
  });

  // Getters
  // Actions
  const selectStoreList = async (params) => {
    console.log(`selectStoreList : `, params);

    try {
      const response = await getStoreList(params);
      // const response = {
      //   status: 200,
      //   data: `주변 상가 정보!!! : ${params.indsLclsCd}`,
      // };
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
  const selectEstate = async (id) => {
    console.log(`selectEstate : `, id);

    try {
      const response = await getEstate(id);
      if (response.status === 200) {
        estate.value = response.data;
        console.log(response);
        return "success";
      } else if (response.status === 204) {
        estate.value = response.data;
        console.log(response);
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };
  const insertEstate = async (estate) => {
    console.log("insertEstate", estate);
    try {
      const response = await postEstate(estate);
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

  const insertEstateRandomly = async () => {
    console.log("insertEstateRandomly");
    try {
      const response = await getEstateRandomly();
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

  // Return
  return {
    isStoreListClicked,
    isStoreListActivated,
    storeListFilter,
    storeList,
    isDealCostSelected,
    dealCostAvgByDong,
    estateList,
    estate,
    mapType,
    getterEstateList,
    getterEstate,
    selectStoreList,
    selectDealCostAvgByDong,
    selectEstateList,
    selectEstate,
    insertEstate,
    insertEstateRandomly,
  };
});
