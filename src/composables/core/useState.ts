import { ref, Ref, UnwrapRef } from 'vue';
import { MaybeRef, EditorForm } from '@/types';

type State = string | number | boolean | EditorForm;

/**
 * 可以进行赋值的响应式值
 * @param initialValue 初始值
 * @returns 一个数组，第一个为响应式值，第二个为赋值函数
 */
export const useState = <S extends MaybeRef<State>>(initialValue: S) => {
  const state = ref(initialValue);
  const setState = (newState: UnwrapRef<S>) => (state.value = newState);

  return [state, setState] as [
    Ref<UnwrapRef<S>>,
    (newState: UnwrapRef<S>) => void
  ];
};
