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
  // 그래프용 데이터
  const isChartReady = ref(false);
  const chartByTime = ref({});
  const chartByGender = ref({});
  const chartByDay = ref({});
  const chartByGenderAge = ref({});

  // Getters (Computed: State를 가공한 결과를 리턴)
  const dataByTime = computed(() => {
    if (salesByDong.value) {
      let time_00 = 0;
      let time_06 = 0;
      let time_11 = 0;
      let time_14 = 0;
      let time_17 = 0;
      let time_21 = 0;

      for (let i = 0; i < salesByDong.value.length; i++) {
        let sale = salesByDong.value[i];
        time_00 += sale.time_00_06_sales;
        time_06 += sale.time_06_11_sales;
        time_11 += sale.time_11_14_sales;
        time_14 += sale.time_14_17_sales;
        time_17 += sale.time_17_21_sales;
        time_21 += sale.time_21_24_sales;
      }
      return [time_06, time_11, time_14, time_17, time_21, time_00];
    }
    return 0;
  });

  const dataByGender = computed(() => {
    if (salesByDong.value) {
      let male = 0;
      let female = 0;

      for (let i = 0; i < salesByDong.value.length; i++) {
        let sale = salesByDong.value[i];
        male += sale.male_sales;
        female += sale.female_sales;
      }
      return [male, female];
    }
    return 0;
  });
  const dataByDay = computed(() => {
    if (salesByDong.value) {
      let monday_sales = 0;
      let tuesday_sales = 0;
      let wednesday_sales = 0;
      let thursday_sales = 0;
      let friday_sales = 0;
      let saturday_sales = 0;
      let sunday_sales = 0;

      for (let i = 0; i < salesByDong.value.length; i++) {
        let sale = salesByDong.value[i];
        monday_sales += sale.monday_sales;
        tuesday_sales += sale.tuesday_sales;
        wednesday_sales += sale.wednesday_sales;
        thursday_sales += sale.thursday_sales;
        friday_sales += sale.friday_sales;
        saturday_sales += sale.saturday_sales;
        sunday_sales += sale.sunday_sales;
      }
      return [
        monday_sales,
        tuesday_sales,
        wednesday_sales,
        thursday_sales,
        friday_sales,
        saturday_sales,
        sunday_sales,
      ];
    }
    return 0;
  });
  const dataByGenderAgeMale = computed(() => {
    if (salesByDong.value) {
      let age_10_sales = 0;
      let age_20_sales = 0;
      let age_30_sales = 0;
      let age_40_sales = 0;
      let age_50_sales = 0;
      let age_60_above_sales = 0;

      for (let i = 0; i < salesByDong.value.length; i++) {
        let sale = salesByDong.value[i];
        if (sale.male_sales_count !== 0) {
          age_10_sales += Math.round(sale.age_10_sales / sale.male_sales_count);
          age_20_sales += Math.round(sale.age_20_sales / sale.male_sales_count);
          age_30_sales += Math.round(sale.age_30_sales / sale.male_sales_count);
          age_40_sales += Math.round(sale.age_40_sales / sale.male_sales_count);
          age_50_sales += Math.round(sale.age_50_sales / sale.male_sales_count);
          age_60_above_sales += Math.round(
            sale.age_60_above_sales / sale.male_sales_count
          );
        }
      }
      console.log([
        age_10_sales,
        age_20_sales,
        age_30_sales,
        age_40_sales,
        age_50_sales,
        age_60_above_sales,
      ]);
      return [
        age_10_sales,
        age_20_sales,
        age_30_sales,
        age_40_sales,
        age_50_sales,
        age_60_above_sales,
      ];
    }
    return 0;
  });
  const dataByGenderAgeFemale = computed(() => {
    if (salesByDong.value) {
      let age_10_sales = 0;
      let age_20_sales = 0;
      let age_30_sales = 0;
      let age_40_sales = 0;
      let age_50_sales = 0;
      let age_60_above_sales = 0;

      for (let i = 0; i < salesByDong.value.length; i++) {
        let sale = salesByDong.value[i];
        if (sale.female_sales_count !== 0) {
          age_10_sales += Math.round(
            sale.age_10_sales / sale.female_sales_count
          );
          age_20_sales += Math.round(
            sale.age_20_sales / sale.female_sales_count
          );
          age_30_sales += Math.round(
            sale.age_30_sales / sale.female_sales_count
          );
          age_40_sales += Math.round(
            sale.age_40_sales / sale.female_sales_count
          );
          age_50_sales += Math.round(
            sale.age_50_sales / sale.female_sales_count
          );
          age_60_above_sales += Math.round(
            sale.age_60_above_sales / sale.female_sales_count
          );
        }
      }
      console.log([
        age_10_sales,
        age_20_sales,
        age_30_sales,
        age_40_sales,
        age_50_sales,
        age_60_above_sales,
      ]);
      return [
        age_10_sales,
        age_20_sales,
        age_30_sales,
        age_40_sales,
        age_50_sales,
        age_60_above_sales,
      ];
    }
    return 0;
  });

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
  const initChart = () => {
    console.log("initChaaart");
    chartByTime.value = {
      data: ref({
        labels: [
          "06~11시",
          "11~14시",
          "14~17시",
          "17~21시",
          "21~24시",
          "00~06시",
        ],
        datasets: [
          {
            label: "시간대 매출",
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "#C7E7F9",
            data: dataByTime.value,
            barThickness: 80,
          },
        ],
      }),
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            // suggestedMin: 0,
            // suggestedMax: 200,
            ticks: {
              display: false,
            },
            border: {
              display: false,
            },
            grid: {
              display: true,
            },
          },
        },
      },
    };
    chartByDay.value = {
      data: ref({
        labels: ["월", "화", "수", "목", "금", "토", "일"],
        datasets: [
          {
            label: "요일별 매출",
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
            data: dataByDay.value,
            barThickness: 30,
          },
        ],
      }),
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            // suggestedMin: 0,
            // suggestedMax: 200,
            ticks: {
              display: false,
            },
            border: {
              display: true,
            },
            grid: {
              display: true,
            },
          },
        },
      },
    };
    chartByGender.value = {
      data: ref({
        labels: ["남성", "여성"],
        datasets: [
          {
            label: "성별 매출",
            backgroundColor: [
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 99, 132, 0.7)",
            ],
            borderColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
            pointColor: "#000000",
            data: dataByGender.value,
            barThickness: 80,
          },
        ],
      }),
      options: {
        responsive: true,
        scales: {
          // x: {
          //   ticks: {
          //     display: false,
          //   },
          //   border: {
          //     display: false,
          //   },
          //   grid: {
          //     display: false,
          //   },
          // },
          // y: {
          //   // suggestedMin: 0,
          //   // suggestedMax: 200,
          //   ticks: {
          //     display: false,
          //   },
          //   border: {
          //     display: false,
          //   },
          //   grid: {
          //     display: false,
          //   },
          // },
        },
      },
    };
    chartByGenderAge.value = {
      data: ref({
        labels: ["10대", "20대", "30대", "40대", "50대", "60대 이상"],
        datasets: [
          {
            label: "남",
            data: dataByGenderAgeMale.value,
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
          {
            label: "여",
            data: dataByGenderAgeFemale.value,
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      }),
      options: {
        responsive: true,
        scale: {
          ticks: {
            display: false,
          },
        },
        scales: {
          r: {
            ticks: {
              display: false,
            },
            border: {
              display: true,
            },
            grid: {
              display: true,
            },
          },
        },
      },
    };
  };
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
        await initChart();
        isChartReady.value = true;
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
    isChartReady,
    getterEstateList,
    getterEstate,
    chartByGenderAge,
    chartByGender,
    chartByTime,
    chartByDay,
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
