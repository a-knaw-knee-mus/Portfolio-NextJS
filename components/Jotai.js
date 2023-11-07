"use client";

import { Provider, atom, createStore, useAtom } from "jotai";

const store = createStore();

const cursorTextAtom = atom("");
const cursorVariantAtom = atom("default");
const darkModeAtom = atom(true)
const activeSectionAtom = atom("home")
const timeOfLastClick = atom(0)

export const JotaiProvider = ({ children }) => {
    <Provider store={store}>{children}</Provider>;
};

export const useCursorTextAtom = () => {
    return useAtom(cursorTextAtom);
};

export const useCursorVariantAtom = () => {
    return useAtom(cursorVariantAtom);
};

export const useDarkModeAtom = () => {
    return useAtom(darkModeAtom)
}

export const useActiveSectionAtom = () => {
    return useAtom(activeSectionAtom)
}

export const useTimeOfLastClickAtom = () => {
    return useAtom(timeOfLastClick)
}