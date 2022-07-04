import { createApp } from "vue";
import { FunctionArgs } from "@/types"

export function withSetup(composable: FunctionArgs) {
  let result: any;
  const app = createApp({
    setup() {
      result = composable()
      return () => {}
    }
  })

  app.mount(document.createElement('div'))

  return [result, app]
}
