import { Login } from '@/model/user';
import { LoginForm } from '@/types';

interface TokenInfo {
  token: string;
  refresh_token: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: '',
    refresh_token: '',
    id: 1
  }),
  getters: {
    authorization(state) {
      return state.token ? 'Bearer ' + state.token : '';
    },
    userInfo(state) {
      return state;
    }
  },
  actions: {
    updateToken(tokenInfo: TokenInfo) {
      this.$patch({
        token: tokenInfo.token,
        refresh_token: tokenInfo.refresh_token
      });
    },
    logout() {
      this.$reset();
      routePathToPage('/manage/login');
    },
    async login(formState: LoginForm) {
      const result = await Login(formState);

      if (typeof result === 'object') {
        this.$patch(result);
      }
    }
  }
});
