import { ProvideDomain, DomainOptions } from '@/types';

// 可扩展的linkTable
export const links: Record<ProvideDomain, DomainOptions> = {
  github: {
    url: 'https://github.com/',
    paramsHandle: (params, value) =>
      params?.map(v => value[v]).join('/'),
  },
};

/**
 * 进行外链跳转
 * @param domain 目标域名
 * @param params 指定的一些url相关参数
 * @returns 可根据传入url相关参数进行跳转的函数
 */
export const urlToExternalLink =
  (domain: ProvideDomain, params?: string[]) =>
  (value?: Record<string, string>) => {
    if(!params) {
      window.location.href = links[domain].url
    } else if(value){
      window.location.href = `${links[domain].url}${links[domain].paramsHandle!(params, value)}`
    }
  };
