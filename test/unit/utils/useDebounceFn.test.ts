import { useDebounceFn } from "@/utils/useDebounceFn"

describe('useDebounceFn', () => {
  beforeEach(() => {
    vitest.useFakeTimers()
  })

  it('should debounce', () => {
    const fn = vitest.fn()
    const debouncedFn = useDebounceFn(fn, 1000)
    
    setTimeout(debouncedFn, 200)
    vitest.runAllTimers()
    setTimeout(debouncedFn, 1000)
    vitest.advanceTimersByTime(500)

    expect(fn).toHaveBeenCalledOnce()
  })

  it('should debounce twice', () => {
    const fn = vitest.fn()
    const debouncedFn = useDebounceFn(fn, 1000)

    setTimeout(debouncedFn, 500)
    vitest.advanceTimersByTime(500)
    setTimeout(debouncedFn, 1000)
    vitest.advanceTimersByTime(2500)

    expect(fn).toHaveBeenCalledTimes(2)
  })
})
