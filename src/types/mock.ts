export interface Avatar {
  src: string;
  size?: string;
  shape?: string;
}

export interface UserInfo {
  id: number;
  username?: string;
  token?: string;
}

export type ArticleType = 'book' | 'blog'
export interface ArticleInfo {
  id?: number;
  title: string;
  intro: string;
  content?: string;
  updatedAt?: string;
  createdAt?: string;
  headImg?: string;
  articleType: ArticleType;
}

// CardList 组件的Item所需数据
export type CardItem = Pick<ArticleInfo, 'id' | 'title' | 'createdAt' | 'intro' | 'headImg'>

// 上传及发布文章时的表单数据
export type EditorForm = Pick<ArticleInfo, 'title' | 'intro' | 'articleType' | 'headImg'> 

export interface LoginForm {
  username: string;
  password: string;
}

// 归档页面所需的数据
export interface fileRecordConfig {
  id: number;
  month: string;
  data: (Omit<CardItem, 'intro'> & { id: number })[]
}

// 各种Item
export interface GroupItem {
  text: string;
  icon?: any;
  type?: string;
  color?: string;
  handle?: () => void;
}

// ViewHeader 组件的按钮组
export type ButtonGroupItem = Pick<GroupItem, 'icon' | 'text' | 'handle'>

export interface DomainOptions {
  url: string;
  paramsHandle?: (params: string[], value: Record<string, string>) => string;
}

export interface PaginationConfig {
  limit: number;
  page: number;
  type?: string;
}
