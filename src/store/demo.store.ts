import { action, atom } from "nanostores";

export const $count = atom(0);

export const increaseCount = action($count, "increase", (store) => {
  store.set(store.get() + 1);
  return store.get();
});

export const decreaseCount = action($count, "decrease", (store) => {
  store.set(store.get() - 1);
  return store.get();
});
