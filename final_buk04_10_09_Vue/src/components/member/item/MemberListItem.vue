<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const prop = defineProps({ member: Object });

const member = prop.member;

function moveModify() {
  router.push({ name: "member-modify", params: { param: member.userId } });
}
</script>

<template>
  <tr class="text-center">
    <!-- <th scope="row">{{ member.userId }}</th> -->
    <td class="text-start">
      <!-- <router-link
        :to="{ name: 'member-view', params: { userId: member.userId } }"
        class="article-title link-dark">
        {{ member.userId }}
      </router-link> -->
      {{ member.userId }}
    </td>
    <td>{{ member.userName }}</td>
    <td>{{ member.emailId }}</td>
    <td>{{ member.emailDomain }}</td>
    <td>
      <button @click="moveModify">수정</button>
      <button @click="$router.push('/adminUserList/delete')">삭제</button>
    </td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
