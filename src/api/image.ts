import { ResponseConfig } from "@/types";
import { Token } from '@/model/image';
import axios from 'axios';

/**
 * 获取七牛云上传图片用的token
 * @returns 
 */
export function uploadToken(): Promise<ResponseConfig<{ token: string, key: string }>> {
  return http.get('/imgToken')
}

/**
 * 图片上传至七牛云
 * @param file - 图片数据
 */
export async function uploadImage(file: Blob) {
  let data = await Token();

  if(data) {
    let { token, key } = data
  
    return new Promise<string>(async (resolve, reject) => {
      key = 'koa-blog/articles/' + key;
      
      const formData = new FormData();
      formData.append('token', token);
      formData.append('key', key);
      formData.append('file', file);

      const { data, status } = await axios.post('http://upload-z1.qiniu.com', formData);

      if(status === 200) {
        resolve('http://cdn.changshou83.site/' + data.key);
      } else {
        reject({reason: '上传图片出错'});
      }
    });
  } else {
    return Promise.reject({reason: '图片上传凭证获取错误'});
  }
}
