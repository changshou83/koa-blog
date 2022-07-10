import { rest } from "msw";
import { ArticleInfo, ListConfig, ResponseConfig, UserInfo } from "@/types"

class MockArticleDB {
  private _data: Record<string, ArticleInfo> = {};

  constructor(data: ArticleInfo[] | ArticleInfo, id?: string) {
    if(Array.isArray(data)) {
      data.forEach((v, i) => {
        this._data[i] = v
      })
    } else {
      this._data[id] = data
    }
  }

  public getAllData(): ArticleInfo[] {
    return Object.values(this._data);
  }
  public getDataById(id: string) {
    return this._data[id];
  }
  public setDataById(id: string, data: ArticleInfo) {
    this._data[id] = data;
  }
  public removeDataById(id: string) {
    delete this._data[id]
  }
}

const MockData = new MockArticleDB({
  "id": 1,
  "title": "前端工程师的难题",
  "intro": "前端工程师的难题不止技术难题，更重要的是工程难题",
  "articleType": "book",
  "content": "content",
  "createdAt": "2022-06-20-13:51",
  "updatedAt": "2022-06-21-13:51",
}, 'default')

const handlers = [
  // 登录 - login
  rest.post("http://localhost:3000/api/user/login", async (req, res, ctx) => {
    const response: ResponseConfig<UserInfo> = {
      status: 200,
      msg: 'success',
      data: {
        id: 1,
        username: 'test_user',
        token: 'Bearer test_token'
      }
    }

    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),
  // 查看文章 - show
  rest.get("http://localhost:3000/api/articles/1", async (req, res, ctx) => {
    const response: ResponseConfig<ArticleInfo> = {
      status: 200,
      msg: 'success',
      data: MockData.getDataById('default')
    }

    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),
  // 获取文章列表 - index
  rest.get("http://localhost:3000/api/articles", async (req, res, ctx) => {
    console.log(MockData.getAllData())
    const response: ResponseConfig<ListConfig<ArticleInfo>> = {
      status: 200,
      msg: 'success',
      data: {
        "count": 1,
        "rows": MockData.getAllData()
      }
    }

    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),
  // 删除文章 - delete
  rest.delete("http://localhost:3000/api/articles/:articleId", async (req, res, ctx) => {
    MockData.removeDataById('default')
    return res(
      ctx.status(204),
      ctx.json({
        status: 204,
        msg: 'success',
        data: null
      })
    );
  }),
];

export default handlers;
