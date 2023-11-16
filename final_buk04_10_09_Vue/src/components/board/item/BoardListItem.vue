<script setup>
defineProps({ article: Object });
</script>

<template>
  <tr class="text-center">
    <td>{{ article.articleNo }}</td>
    <td class="text-start">
      <RouterLink
        v-bind:to="{
          name: 'BoardDetail',
          params: {
            articleNo: article.articleNo,
          },
        }"
        class="article-title link-dark"
        style="text-decoration: none"
        >{{ article.subject }}</RouterLink
      >
    </td>
    <td>
      {{ article.userName }}
    </td>
    <td>{{ article.hit }}</td>
    <td>{{ article.registerTime }}</td>
  </tr>
</template>

<style scoped></style>
