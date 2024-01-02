import { persistentAtom } from "@nanostores/persistent";
import { action } from "nanostores";

// instead of using atom, you can use persistentAtom
export const $count = persistentAtom<{ value: number }>(
  "count",
  { value: 0 },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const increaseCount = action($count, "increase", (store) => {
  store.set({ value: store.get().value + 1 });
  return store.get();
});

export const decreaseCount = action($count, "decrease", (store) => {
  store.set({ value: store.get().value - 1 });
  return store.get();
});
