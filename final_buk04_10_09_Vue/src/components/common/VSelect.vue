<script setup>
import { ref } from "vue";
import { useBoardStore } from "@/stores/board";
import { storeToRefs } from "pinia";
defineProps({ selectOption: Array });
const emit = defineEmits(["onKeySelect"]);

// const key = ref("");
// Pinia
const storeBoard = useBoardStore();
const { key } = storeToRefs(storeBoard);

const onSelect = () => {
  // console.log(key.value + "선택!!!");
  emit("onKeySelect", key.value);
};
</script>

<template>
  <select v-model="key" class="select_box" @change="onSelect">
    <option
      v-for="option in selectOption"
      :key="option.value"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<style scoped>
.select_box {
  color: rgba(0, 0, 0, 0.7);
  width: 120px;
  padding: 2px 10px 2px 4px;
  margin-right: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
