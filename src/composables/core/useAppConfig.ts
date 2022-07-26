import { ComponentInternalInstance, getCurrentInstance } from 'vue';

/**
 * 获取App的全局属性
 * @returns
 */
export function useAppConfig() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  return appContext.config.globalProperties;
}
