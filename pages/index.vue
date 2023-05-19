<script setup>
import { useCounterStore } from "~/stores/myStore";

const store = useCounterStore();
console.log(store.count);

const { $sayHello } = useNuxtApp();
$sayHello("Azimcha");

definePageMeta({
  middleware: "login",
});
</script>

<template>
  <div class="container flex flex-col items-center">
    <h1>Home page</h1>
    <IconsBell />
    <img src="images/soccer.jpg" alt="soccer" class="w-[250px] mt-4" />
    <button
      @click="store.increment"
      class="bg-green-600 text-white py-2 px-3 rounded-md mt-3"
    >
      Add Count {{ store.count }}
    </button>
  </div>
</template>
