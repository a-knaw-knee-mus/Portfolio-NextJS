"use client";

import { Provider, atom, createStore, useAtom } from "jotai";

const store = createStore();

const cursorTextAtom = atom("");
const cursorVariantAtom = atom("default");

export const JotaiProvider = ({ children }) => {
    <Provider store={store}>{children}</Provider>;
};

export const useCursorTextAtom = () => {
    return useAtom(cursorTextAtom);
};

export const useCursorVariantAtom = () => {
    return useAtom(cursorVariantAtom);
};
