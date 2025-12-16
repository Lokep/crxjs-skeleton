<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { useAppStore } from "@/store";
import { storeToRefs } from "pinia";

const appStore = useAppStore();

const { me } = storeToRefs(appStore);
</script>

<template>
  <div class="bg-pink-500">
    {{ me }}
  </div>
  <Button>这是shadcn的button</Button>
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.crx:hover {
  filter: drop-shadow(0 0 2em #f2bae4aa);
}
</style>
