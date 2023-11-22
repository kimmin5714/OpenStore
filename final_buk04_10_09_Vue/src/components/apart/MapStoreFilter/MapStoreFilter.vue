<script setup>
import { ref } from "vue";
import { useMapStore } from "@/stores/map";
import { storeToRefs } from "pinia";

const storeMap = useMapStore();
const { isStoreListClicked, storeListFilter } = storeToRefs(storeMap);

const setFilter = (filter) => {
  if (storeListFilter.value !== filter) {
    storeListFilter.value = filter;
    isStoreListClicked.value = true;

    console.log(storeListFilter.value);
  }
};
</script>

<template>
  <div class="filter-btn-container">
    <div
      class="filter-btn"
      style="transform: scaleY(1); transform-origin: 0% 0%"
    >
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-0"
              checked="true"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">일반</label>
        </div>
      </div>
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('I2')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-1"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">음식</label>
        </div>
      </div>
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('G2')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-2"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">소매</label>
        </div>
      </div>
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('S2')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-3"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">서비스</label>
        </div>
      </div>
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('R1')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-4"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">오락</label>
        </div>
      </div>
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('P1')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-5"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">교육</label>
        </div>
      </div>
      <div>
        <div role="checkbox" class="filter-checkbox">
          <div class="filter-content">
            <input
              id="checkbox-land"
              name="filter"
              @click="setFilter('I1')"
              data-gtm-action="search_deal_marker_off"
              type="radio"
              class="check checkbox-6"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              class="swk-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <label for="checkbox-land" class="filter-text">숙박</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-btn-container {
  position: absolute;
  top: 20px;
  left: 500px;
  z-index: 10;
}

.filter-btn {
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 4px 24px;
  background-color: rgb(255, 255, 255);
}

.filter-checkbox {
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px 16px;
}

.filter-content {
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 8px;
}

.filter-text {
  user-select: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}

.check:not(:disabled) {
  cursor: pointer;
}

.check {
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.checkbox-0:checked {
  background-color: black;
}
.checkbox-1:checked {
  background-color: rgb(50, 157, 79);
}
.checkbox-2:checked {
  background-color: rgb(27, 173, 194);
}
.checkbox-3:checked {
  background-color: rgb(212, 164, 63);
}
.checkbox-4:checked {
  background-color: rgb(109, 133, 145);
}
.checkbox-5:checked {
  background-color: rgb(204, 102, 255);
}
.checkbox-6:checked {
  background-color: rgb(14, 64, 228);
}
.checkbox-0 {
  border: 2px solid black;
}
.checkbox-1 {
  border: 2px solid rgb(50, 157, 79);
}
.checkbox-2 {
  border: 2px solid rgb(27, 173, 194);
}
.checkbox-3 {
  border: 2px solid rgb(212, 164, 63);
}
.checkbox-4 {
  border: 2px solid rgb(109, 133, 145);
}
.checkbox-5 {
  border: 2px solid rgb(204, 102, 255);
}
.checkbox-6 {
  border: 2px solid rgb(14, 64, 228);
}
svg {
  vertical-align: middle;
}
.swk-icon {
  position: absolute;
  top: 2px;
  left: 2px;
  pointer-events: none;
}
</style>
