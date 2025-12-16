import { defineStore } from "pinia";
import { ref } from "vue";


export const useAppStore = defineStore('app', () =>{
  const me = ref<Record<string, any>>({})


  return  {
    me
  }
}, {
  persist: true
})