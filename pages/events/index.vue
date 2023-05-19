<script setup>
const { sayHello } = useUtils();
sayHello();

definePageMeta({
  layout: "events",
});
</script>

<template>
  <div class="container flex flex-col items-center">
    <h1>Event page</h1>
  </div>
</template>
