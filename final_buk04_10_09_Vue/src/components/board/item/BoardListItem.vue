<script setup>
import { useRouter } from "vue-router";

const props = defineProps({ article: Object });
const router = useRouter();

const movePage = () => {
  router.push({
    name: "BoardDetail",
    params: {
      articleNo: props.article.articleNo,
    },
  });
};
</script>

<template>
  <tr @click="movePage" class="text-center" style="cursor: pointer">
    <td class="text-start">
      <a class="article-title link-dark" style="text-decoration: none">{{
        article.subject
      }}</a>
    </td>
    <td class="text-end">{{ article.registerTime.substr(0, 10) }}</td>
  </tr>
</template>

<style scoped>
* {
}
tr {
  padding: 0px 10px 0 10px;
  font-size: 15px;
}
</style>
