"use client";

import { Icon } from "@iconify/react";
import { showNotification } from "@mantine/notifications";

export default function Socials() {
    return (
        <section className="flex justify-around max-w-[150px] m-auto py-3 z-50 sticky top-0">
            <a
                target="_blank"
                href="https://github.com/a-knaw-knee-mus"
                rel="noopener noreferrer"
                className="group font-overpass text-xs sm:text-sm text-center inline-block sm:hover:scale-[1.15] transition-all"
            >
                <Icon
                    className="mx-auto pointer-events-none"
                    icon="akar-icons:github-fill"
                    width="20"
                />
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-mehdi-ali/"
                rel="noopener noreferrer"
                className="group font-overpass text-xs sm:text-sm text-center inline-block sm:hover:scale-[1.15] transition-all"
            >
                <Icon
                    className="mx-auto pointer-events-none"
                    icon="akar-icons:linkedin-box-fill"
                    width="20"
                />
            </a>
            <a
                target="_blank"
                href="mailto:m30ali@torontmu.ca"
                rel="noopener noreferrer"
                className="group font-overpass text-xs sm:text-sm text-center inline-block sm:hover:scale-[1.15] transition-all"
            >
                <Icon
                    className="mx-auto pointer-events-none"
                    icon="ic:baseline-email"
                    width="20"
                />
            </a>
            <div
                className="group font-overpass text-xs sm:text-sm text-center cursor-pointer sm:hover:scale-[1.15] transition-all"
                onClick={() => {
                    navigator.clipboard.writeText("a.knaw.knee.mus");
                    showNotification({
                        color: "indigo",
                        title: "Copied to clipboard!",
                        message: "a.knaw.knee.mus",
                    });
                }}
            >
                <Icon
                    className="mx-auto pointer-events-none"
                    icon="akar-icons:discord-fill"
                    width="20"
                />
            </div>
        </section>
    );
}
