import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <footer className="m-auto max-w-[240px] flex justify-around py-5 font-overpass text-xs sm:text-sm text-center">
        <a
          target="_blank"
          href="https://github.com/a-knaw-knee-mus"
          rel="noopener noreferrer"
          className="group"
        >
          <Icon className="mx-auto"  icon="akar-icons:github-fill" width="40" />
          <p className="sm:opacity-0 sm:group-hover:opacity-100 transition-all">Github</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-mehdi-ali-8bb5491b6/"
          rel="noopener noreferrer"
          className="group"
        >
          <Icon className="mx-auto" icon="akar-icons:linkedin-box-fill" width="40" />
          <p  className="sm:opacity-0 sm:group-hover:opacity-100 transition-all">Linkedin</p>
        </a>
        <a href="mailto:m30ali@ryerson.ca" className="group">
          <Icon className="mx-auto"  icon="ic:baseline-email" width="40" />
          <p  className="sm:opacity-0 sm:group-hover:opacity-100 transition-all">Email</p>
        </a>
      </footer>
    </>
  );
}
