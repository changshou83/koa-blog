import { useAppConfig } from "@/composables/core/useAppConfig"
import { withSetup } from '../../test-utils';

describe('Basic Test', () => {
  it('it should work', () => {
    const [result, instance] = withSetup(() => {
      const globalProperties = useAppConfig()
      globalProperties.$foo = 'bar'
    })
    expect(instance.config.globalProperties.$foo).toEqual('bar')
  })
})
