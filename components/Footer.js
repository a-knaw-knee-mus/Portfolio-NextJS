import { useState, useEffect } from "react";
import router from "next/router";
import { Icon } from "@iconify/react";
import ReactTooltip from "react-tooltip";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="max-w-xl m-auto flex justify-around">
        <a
          target="_blank"
          href="https://github.com/a-knaw-knee-mus"
          rel="noopener noreferrer"
          data-tip="Github"
        >
          <Icon icon="akar-icons:github-fill" width="40" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-mehdi-ali-8bb5491b6/"
          rel="noopener noreferrer"
          data-tip="Linkedin"
        >
          <Icon icon="akar-icons:linkedin-box-fill" width="40" />
        </a>
        <a href="mailto:m30ali@ryerson.ca" data-tip="Email">
          <Icon icon="ic:baseline-email" width="40" />
        </a>
      {isMounted && <ReactTooltip effect="solid" offset={{ top: -70 }} />}
      </div>
    </>
  );
}
