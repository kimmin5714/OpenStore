<script setup>
import { useMapStore } from "@/stores/map";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const storeMap = useMapStore();
const { isStoreListClicked, mapType } = storeToRefs(storeMap);

const doStoreList = () => {
  isStoreListClicked.value = true;
};
const setMapType = (typeStr, target) => {
  mapType.value = typeStr;
  console.log(mapType.value);
  changeColor(target);
};
const changeColor = (target) => {
  const element = document.getElementById(target).id;
  const btns = document.getElementsByClassName("right-path");
  for (let i = 0; i < btns.length; i++) {
    const btnNum = btns[i].id;
    if (i == 3) {
      if (element == btnNum) {
        btns[i].setAttribute("fill", "rgb(26, 140, 255)");
        btns[4].setAttribute("fill", "rgb(26, 140, 255)");
      } else {
        btns[i].setAttribute("fill", "rgb(55, 57, 59)");
        btns[4].setAttribute("fill", "rgb(55, 57, 59)");
      }
      break;
    }
    if (element == btnNum) {
      btns[i].setAttribute("fill", "rgb(26, 140, 255)");
      console.log(btns[i].getAttribute("fill"));
    } else {
      btns[i].setAttribute("fill", "rgb(55, 57, 59)");
    }
  }
};

onMounted(() => {
  setMapType("roadmap", "path1");
});
</script>

<template>
  <div id="right-menu-nav">
    <div class="right-nav">
      <button
        id="btn1"
        data-gtm-action="search_map_option_normal"
        class="right-btn"
        @click="setMapType('roadmap', 'path1')"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="right-path"
            id="path1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.12219 3.76647C3.14643 4.13238 2.5 5.06518 2.5 6.10729V15.0948C2.5 16.2585 3.66229 17.0639 4.75187 16.6553L5.15918 16.5026C6.66841 15.9366 8.33159 15.9366 9.84082 16.5026L10.1592 16.622C11.6684 17.1879 13.3316 17.1879 14.8408 16.622L15.8778 16.2331C16.8536 15.8672 17.5 14.9344 17.5 13.8923V4.90479C17.5 3.74111 16.3377 2.93565 15.2481 3.34424L14.8408 3.49698C13.3316 4.06294 11.6684 4.06294 10.1592 3.49698L9.84082 3.3776C8.33159 2.81163 6.66841 2.81163 5.15918 3.3776L4.12219 3.76647Z"
            fill="rgb(55, 57, 59)"
          ></path>
          <path
            d="M8.33333 5.83301C8.79357 5.83301 9.16667 6.2061 9.16667 6.66634V12.4997C9.16667 12.9599 8.79357 13.333 8.33333 13.333C7.8731 13.333 7.5 12.9599 7.5 12.4997L7.5 6.66634C7.5 6.2061 7.8731 5.83301 8.33333 5.83301Z"
            fill="white"
          ></path>
          <path
            d="M12.5 7.49967C12.5 7.03944 12.1269 6.66634 11.6667 6.66634C11.2064 6.66634 10.8333 7.03944 10.8333 7.49967V13.333C10.8333 13.7932 11.2064 14.1663 11.6667 14.1663C12.1269 14.1663 12.5 13.7932 12.5 13.333V7.49967Z"
            fill="white"
          ></path>
        </svg>
        일반
      </button>
      <button
        id="btn2"
        data-gtm-action="search_map_option_satellite"
        class="right-btn"
        @click="setMapType('traffic', 'path2')"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="right-path"
            id="path2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.16667 15.7743V14.1667L7.5 12.5L9.16667 10.8333L5.83333 7.5H4.72803C4.36808 8.25771 4.16667 9.10533 4.16667 10C4.16667 12.9387 6.33976 15.3699 9.16667 15.7743ZM15.8333 10C15.8333 12.5423 14.207 14.7047 11.9381 15.5037L13.3333 11.6667L9.16667 7.5L10 6.66666H12.5L13.6871 5.47951C14.997 6.54921 15.8333 8.17694 15.8333 10ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
            fill="rgb(55, 57, 59)"
          ></path>
        </svg>
        교통
      </button>
      <button
        id="btn3"
        data-gtm-action="search_map_option_cadastral"
        class="right-btn"
        @click="setMapType('use_district', 'path3')"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="right-path"
            id="path3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.1666 4.99967H5.83331C5.37308 4.99967 4.99998 5.37277 4.99998 5.83301V7.49967L15 7.49967V5.83301C15 5.37277 14.6269 4.99967 14.1666 4.99967ZM16.6666 5.83301C16.6666 4.4523 15.5474 3.33301 14.1666 3.33301H5.83331C4.4526 3.33301 3.33331 4.4523 3.33331 5.83301V14.1663C3.33331 15.5471 4.4526 16.6663 5.83331 16.6663H14.1666C15.5474 16.6663 16.6666 15.5471 16.6666 14.1663V5.83301ZM15 9.16634L9.16665 9.16634L9.16665 14.9997H14.1666C14.6269 14.9997 15 14.6266 15 14.1663V9.16634ZM7.49998 9.16634L4.99998 9.16634V14.1663C4.99998 14.6266 5.37308 14.9997 5.83331 14.9997H7.49998L7.49998 9.16634Z"
            fill="rgb(55, 57, 59)"
          ></path>
        </svg>
        지적도
      </button>
      <button
        id="btn4"
        name="mapFilter"
        class="right-btn"
        @click="setMapType('hybrid', 'path4')"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="right-path"
            id="path4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5472 12.5691C15.486 10.6453 15.4842 7.53824 13.5419 5.61659C11.5878 3.68336 8.4122 3.68336 6.4581 5.61659C4.51572 7.53824 4.51394 10.6453 6.45277 12.5691L9.41967 15.4479C9.74295 15.7616 10.257 15.7616 10.5803 15.4479L13.5472 12.5691ZM5.28593 13.7592C2.68244 11.1835 2.68244 7.00747 5.28594 4.43177C7.88943 1.85608 12.1105 1.85608 14.714 4.43177C17.3175 7.00747 17.3175 11.1835 14.714 13.7592L11.7409 16.6441C10.7711 17.5851 9.2289 17.5851 8.25904 16.6441L5.28593 13.7592Z"
            fill="rgb(55, 57, 59)"
          ></path>
          <path
            class="right-path"
            id="path5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.66665 9.16667C6.66665 8.70643 7.03974 8.33333 7.49998 8.33333H12.5C12.9602 8.33333 13.3333 8.70643 13.3333 9.16667C13.3333 9.6269 12.9602 10 12.5 10H7.49998C7.03974 10 6.66665 9.6269 6.66665 9.16667Z"
            fill="rgb(55, 57, 59)"
          ></path>
        </svg>
        위성
      </button>
    </div>
    <!-- <div class="nav-item">
      <button class="item-button" @click="setMapType('skyview')">버튼4</button>
    </div> -->
  </div>
</template>

<style scoped>
#right-menu-nav {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  margin: 450px 5px;
  position: absolute;
  top: 80px;
  bottom: 40px;
  right: 20px;
  z-index: 1000;
  align-items: center;
  background-color: transparent;
}
.right-nav {
  border-radius: 6px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 4px 24px;
}
svg {
  vertical-align: middle;
  fill: rgb(55, 57, 59);
}
.right-nav .right-btn {
  border-bottom: 1px solid rgb(223, 229, 235);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(223, 229, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.right-btn {
  border: none;
  width: 50px;
  height: 80px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: inherit;
  background-color: rgb(255, 255, 255);
  font-size: 10px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(55, 57, 59);
  padding: 0px;
  margin: 0px;
}
</style>
