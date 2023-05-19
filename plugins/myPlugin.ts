export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello: (msg: String) => console.log(`Hello ${msg}`),
    },
  };
});
