import { Icon } from "@iconify/react";
import HoverIcon from "./HoverIcon";
import { showNotification } from "@mantine/notifications";

export default function Footer() {
  return (
    <>
      <footer className="m-auto max-w-[240px] flex justify-around py-5">
        <HoverIcon
          name="Github"
          iconName="akar-icons:github-fill"
          href="https://github.com/a-knaw-knee-mus"
        />
        <HoverIcon
          name="Linkedin"
          iconName="akar-icons:linkedin-box-fill"
          href="https://www.linkedin.com/in/muhammad-mehdi-ali-8bb5491b6/"
        />
        <HoverIcon
          name="Email"
          iconName="ic:baseline-email"
          href="mailto:m30ali@ryerson.ca"
        />
        <a
          className="group font-overpass text-xs sm:text-sm text-center cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("a.knaw.knee.mus");
            showNotification({
              color: "indigo",
              title: "Copied to clipboard!",
              message: "a.knaw.knee.mus"
            });
          }}
        >
          <Icon className="mx-auto" icon="akar-icons:discord-fill" width="40" />
          <p className="sm:opacity-0 sm:group-hover:opacity-100 transition-all">
            Discord
          </p>
        </a>
      </footer>
    </>
  );
}
