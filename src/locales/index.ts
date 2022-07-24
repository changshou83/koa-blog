import { createI18n } from 'vue-i18n';
import enUS from './enUS.json'
import zhCN from './zhCN.json'

function getLang() {
  const lang = JSON.parse(localStorage.getItem('pinia-lang') || '{}');
  if(lang.curr) return lang.curr;
  else return navigator.language
}

const i18n = createI18n({
  locale: getLang(),// 当前使用
  globalInjection: true,// 全局注入
  fallbackLocale: 'en-US',// 兜底
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN
  }
})

export default i18n;
