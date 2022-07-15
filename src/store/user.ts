import { defineStore } from "pinia";
import { Login } from '@/model/user';
import { LoginForm } from '@/types';
import { setToken } from "@/utils/common/cache";

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: '',
    id: 1
  }),
  getters: {
    authorization(state) {
      return state.token ? 'Bearer ' + state.token : ''
    },
    userInfo(state) {
      return state
    }
  },
  actions: {
    logout() {
      this.$patch({
        username: '',
        token: '',
        id: 1
      })
    },
    async login(formState: LoginForm) {
      const result = await Login(formState)
      
      if(typeof result === 'object') {
        this.$patch(result);
        result.token && setToken(result.token);
      }
    }
  }
})
