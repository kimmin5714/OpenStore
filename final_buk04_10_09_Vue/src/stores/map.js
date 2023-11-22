import { ref, computed } from "vue";
import { defineStore } from "pinia";

import {
  getStoreList,
  getDealCostAvgByDong,
  getSalesByDong,
  getEstateList,
  getEstateListByAddress,
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
  const salesByDong = ref([]);
  const estateList = ref([]);
  const estate = ref({});
  // 카카오맵 추가 기능 상태 변수
  const mapType = ref("roadmap");
  // 매물 동 검색이 되면 맵 이동을 시키기 위한 상태 변수
  const isSearchedByAddress = ref(false);

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
        storeList.value = [];
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
        dealCostAvgByDong.value = {};
        console.log(response);
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };
  const selectSalesByDong = async (params) => {
    console.log(`selectSalesByDong : `, params);

    try {
      const response = await getSalesByDong(params);
      if (response.status === 200) {
        salesByDong.value = response.data;
        console.log(response);
        return "success";
      } else if (response.status === 204) {
        salesByDong.value = [];
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
        estateList.value = [];
        console.log(response);
        return "empty";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return "fail";
    }
  };
  const selectEstateListByAddress = async (address) => {
    console.log(`selectEstateListByAddress : `, address);

    try {
      const response = await getEstateListByAddress(address);
      if (response.status === 200) {
        isSearchedByAddress.value = true;
        estateList.value = response.data;
        console.log(response);
        return "success";
      } else if (response.status === 204) {
        estateList.value = [];
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
        estate.value = {};
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

  const sendRequest = (selid, regcode) => {
    const url = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes";
    let params = "regcode_pattern=" + regcode + "&is_ignore_zero=true";

    fetch(`${url}?${params}`)
      .then((response) => response.json())
      .then((data) => addOption(selid, data));
  };

  const addOption = (selid, data) => {
    let opt = ``;
    initOption(selid);
    switch (selid) {
      case "sido":
        opt += `<option value="">주소(시도)</option>`;
        data.regcodes.forEach(function (regcode) {
          opt += `
            <option value="${regcode.code} ${regcode.name}">${regcode.name}</option>
            `;
        });
        break;
      case "gugun":
        opt += `<option value="">주소(구군)</option>`;
        for (let i = 0; i < data.regcodes.length; i++) {
          if (i != data.regcodes.length - 1) {
            if (
              data.regcodes[i].name.split(" ")[1] ==
                data.regcodes[i + 1].name.split(" ")[1] &&
              data.regcodes[i].name.split(" ").length !=
                data.regcodes[i + 1].name.split(" ").length
            ) {
              data.regcodes.splice(i, 1);
              i--;
            }
          }
        }
        let name = "";
        data.regcodes.forEach(function (regcode) {
          if (regcode.name.split(" ").length == 2)
            name = regcode.name.split(" ")[1];
          else
            name =
              regcode.name.split(" ")[1] + " " + regcode.name.split(" ")[2];
          opt += `
            <option value="${regcode.code} ${name}">${name}</option>
            `;
        });
        break;
      case "dong":
        opt += `<option value="">주소(동)</option>`;
        let idx = 2;
        data.regcodes.forEach(function (regcode) {
          if (regcode.name.split(" ").length != 3) idx = 3;
          let dongName = regcode.name.split(" ")[idx]; // 아파트 리스트 띄울 때 조건문으로 쓸 동이름 value에 추가
          opt += `
            <option value="${regcode.code} ${dongName}">${dongName}</option>
            `;
        });
    }
    document.querySelector(`#${selid}`).innerHTML = opt;
  };
  const initOption = (selid) => {
    let options = document.querySelector(`#${selid}`);
    options.length = 0;

    let content = ``;
    switch (selid) {
      case "gugun":
        content += `<option value="" selected>주소(구군)</option>`;
        break;
      case "dong":
        content += `<option value="" selected>주소(동)</option>`;
        break;
    }
    document.querySelector(`#${selid}`).innerHTML = content;
  };

  // Return
  return {
    isStoreListClicked,
    isStoreListActivated,
    storeListFilter,
    storeList,
    isDealCostSelected,
    dealCostAvgByDong,
    salesByDong,
    estateList,
    estate,
    mapType,
    isSearchedByAddress,
    getterEstateList,
    getterEstate,
    selectStoreList,
    selectDealCostAvgByDong,
    selectEstateList,
    selectEstateListByAddress,
    selectEstate,
    insertEstate,
    insertEstateRandomly,
    sendRequest,
    initOption,
    selectSalesByDong,
  };
});
