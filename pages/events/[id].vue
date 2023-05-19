<script setup>
const id = useRoute().params.id;

definePageMeta({
  layout: "events",
});
</script>

<template>
  <div class="container flex flex-col items-center">
    <h1>Page ID: {{ id }}</h1>
  </div>
</template>
