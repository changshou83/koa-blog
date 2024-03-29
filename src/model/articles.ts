import { ArticleInfo, ArticleIndexParams, ResponseConfig } from '@/types';

export async function Create(params: ArticleInfo, delay?: number) {
  try {
    const [{ data }] = await lazyRequest(articleCreate(params), delay);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err as ResponseConfig<null>);
  }
}
export async function Index(params: ArticleIndexParams, delay?: number) {
  try {
    const [{ data }] = await lazyRequest(articleIndex(params), delay);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function Show(id: number, delay?: number) {
  try {
    const [{ data }] = await lazyRequest(articleShow(id), delay);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}
export async function Update(id: number, params: ArticleInfo, delay?: number) {
  try {
    const [{ data }] = await lazyRequest(articleUpdate(id, params), delay);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err as ResponseConfig<null>);
  }
}
export async function Delete(id: number) {
  try {
    await articleDelete(id);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}
export async function Archive() {
  try {
    const { data } = await articleArchive();
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}
