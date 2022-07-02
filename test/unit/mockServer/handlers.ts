import { rest } from "msw";
import { ResponseConfig, UserInfo } from "@/types"

const handlers = [
  rest.post("http://localhost:3001/user/login", async (req, res, ctx) => {
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
  })
];

export default handlers;
