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
  <select
    v-model="key"
    class="form-select form-select-sm w-50"
    @change="onSelect"
  >
    <option
      v-for="option in selectOption"
      :key="option.value"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<style scoped></style>
