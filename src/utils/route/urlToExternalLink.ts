import { DomainOptions } from '@/types';

// 可扩展的linkTable
const links: Record<string, DomainOptions> = {
  github: {
    url: 'https://github.com/',
    paramsHandle: (params, value) => params?.map((v) => value[v]).join('/')
  }
};

export const addDomain = (domain: string, options: DomainOptions) => {
  const urlPattern =
    /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  if (!urlPattern.test(options.url)) return new Error('请输入符合规格的url');

  links[domain] = options;
};

/**
 * 进行外链跳转
 * @param domain 目标域名
 * @param params 指定的一些url相关参数
 * @returns 可根据传入url相关参数进行跳转的函数
 */
export const urlToExternalLink =
  (domain: string, params?: string[]) => (value?: Record<string, string>) => {
    if (!params) {
      window.location.href = links[domain].url;
    } else if (value) {
      window.location.href = `${links[domain].url}${links[domain].paramsHandle!(
        params,
        value
      )}`;
    }
  };
