import { Icon } from "@iconify/react";

// Creating Iconify Icons that show text on hover
export default function HoverIcon({ name, iconName, href }) {
  return (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      className="group font-overpass text-xs sm:text-sm text-center inline-block"
    >
      <Icon className="mx-auto" icon={iconName} width="40" />
      <p className="sm:opacity-0 sm:group-hover:opacity-100 transition-all">
        {name}
      </p>
    </a>
  );
}
