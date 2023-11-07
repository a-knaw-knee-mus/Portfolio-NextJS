"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionAtom, useTimeOfLastClickAtom } from "../components/Jotai";

export function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const [activeSection, setActiveSection] = useActiveSectionAtom();
  const [timeOfLastClick, setTimeOfLastClick] = useTimeOfLastClickAtom()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}