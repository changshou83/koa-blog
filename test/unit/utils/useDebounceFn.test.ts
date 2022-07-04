import { useDebounceFn } from "@/utils/useDebounceFn"

describe('useDebounceFn', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should debounce', () => {
    const fn = vi.fn()
    const debouncedFn = useDebounceFn(fn, 1000)
    
    setTimeout(debouncedFn, 200)
    vi.runAllTimers()
    setTimeout(debouncedFn, 1000)
    vi.advanceTimersByTime(500)

    expect(fn).toHaveBeenCalledOnce()
  })

  it('should debounce twice', () => {
    const fn = vi.fn()
    const debouncedFn = useDebounceFn(fn, 1000)

    setTimeout(debouncedFn, 500)
    vi.advanceTimersByTime(500)
    setTimeout(debouncedFn, 1000)
    vi.advanceTimersByTime(2500)

    expect(fn).toHaveBeenCalledTimes(2)
  })
})
