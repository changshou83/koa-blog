export const useLangStore = defineStore('lang', {
  state: () => ({
    curr: 'zh-CN',
    langList: ['zh-CN', 'en-US']
  }),
  actions: {
    change(newLang: string) {
      if(newLang !== this.curr) {
        this.curr = newLang;
        // 主动刷新页面，重新读取语言设置
        location.reload();
      }
    }
  }
})
