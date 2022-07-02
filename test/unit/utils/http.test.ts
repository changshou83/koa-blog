import { rest } from "msw";
import server from "../mockServer/server";
import { ResponseConfig } from "@/types"
import http, { lazyRequest } from "@/utils/http"

const setup = (reqType: 'success' | 'fail' | '404') => {
  let response: ResponseConfig = {
    status: 200,
    msg: reqType
  }
  if(reqType === 'success') {
    response.data = { msg: 'request success' }
  } else if(reqType === '404') {
    response.status = 404
    response.data = 'not found'
  } else {
    response.status = 500
    response.reason = 'server error'
  }

  server.use(
    rest.get('/api/test', async (req, res, ctx) => {
      
      return res(
        ctx.status(200),
        ctx.json(response)
      )
    })
  )
}

describe('http', () => {
  it('request success', async () => {
    setup('success')

    const res = await http.get('/test')

    expect(res.status).toEqual(200)
    expect(res.data).toEqual({ msg: 'request success' })
  })

  it('request 404', async () => {
    setup('404')

    const res = await http.get('/test')

    expect(res.status).toEqual(404)
    expect(res.data).toEqual('not found')
  })

  it('request fail', async () => {
    setup('fail')

    const res: ResponseConfig = await http.get('/test')

    expect(res.status).toEqual(500)
    expect(res.reason).toEqual('server error')
  })
})

describe('lazyRequest', () => {
  beforeEach(() => {
    vitest.useFakeTimers()
  })

  it('it should work', async () => {
    setup('success')

    const fn = vitest.fn(([res]) => res)
    const promise = lazyRequest(http.get('/test'), 1000).then(res => fn(res))
    
    expect(fn).not.toBeCalled()
    vitest.advanceTimersByTime(1000)
    
    const res = await promise
    expect(fn).toBeCalled()
    expect(res.status).toEqual(200)
    expect(res.data).toEqual({ msg: 'request success' })
  })
})
