import { ResponseConfig } from "@/types";

/**
 * 获取七牛云上传图片用的token
 * @returns 
 */
export function uploadToken(): Promise<ResponseConfig<{ token: string, key: string }>> {
  return http.get('/imgToken')
}
