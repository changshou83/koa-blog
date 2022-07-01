import type { Ref } from 'vue';

export type FunctionArgs<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Return;

export type MaybeArray<Item> = Item[] | Item;
export type MaybeRef<Data> = Ref<Data> | Data;

export interface ListConfig<Item = any> {
  rows: Item[];
  count: number;
}
