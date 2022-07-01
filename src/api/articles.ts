import { ArticleInfo, ResponseConfig, PaginationConfig, ListConfig, fileRecordConfig } from "@/types";
import http from '@/utils/http';

/**
 * 创建文章
 * @returns 
 */
export function articleCreate(params: ArticleInfo): Promise<ResponseConfig<ArticleInfo>> {
  return http.post('/articles', params)
}

/**
 * 获取指定页数的文章
 * @returns 
 */
export function articleIndex(params: PaginationConfig): Promise<ResponseConfig<ListConfig<ArticleInfo>>> {
  const { limit, page, type } = params
  return http.get(`/articles?page=${page}&limit=${limit}` + (type ? `&type=${type}` : ''))
}

/**
 * 根据id查看文章
 * @returns 
 */
export function articleShow(id: number): Promise<ResponseConfig<ArticleInfo>> {
  return http.get(`/articles/${id}`)
}

/**
 * 根据id更新文章
 * @returns 
 */
export function articleUpdate(id: number, params: ArticleInfo): Promise<ResponseConfig<ArticleInfo>> {
  return http.put(`/articles/${id}`, params)
}

/**
 * 根据id删除文章
 * @returns 
 */
export function articleDelete(id: number): Promise<ResponseConfig<ArticleInfo>> {
  return http.delete(`/articles/${id}`)
}

/**
 * 查看归档
 * @returns 
 */
export function articleArchive(): Promise<ResponseConfig<fileRecordConfig[]>> {
  return http.get('/articles/all/archives')
}
