import { PiniaPluginContext } from 'pinia';

export const persistState = (context: PiniaPluginContext) => {
  const { store } = context;

  store.$subscribe(() => {
    setPiniaState(store.$id, toRaw(store.$state));
  });

  const data = getPiniaState(store.$id);
  return {
    ...data
  };
};
