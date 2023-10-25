"use client";

import { showNotification } from "@mantine/notifications";
import { Icon } from "@iconify/react";

//  List of iconify icons used for my skills on the homepage
export default function IconifyList({ listNamePlural, listNameSingular, listItems }) {
  return (
    <div className="flex flex-wrap transition-all">
      <h2 className="font-extrabold mt-3 mr-3 text-sm sm:text-base md:text-lg pt-[4px] sm:pt-1 md:pt-[3px]">
        {listNamePlural}:
      </h2>
      {listItems
        .sort((a, b) => {
          if (a.indexNumber > b.indexNumber) return 1;
          if (a.indexNumber < b.indexNumber) return -1;
          return 0;
        })
        .map((listItem, index) => {
          return (
            <div
              className="mr-3 mt-3 flex items-center cursor-pointer sm:hover:scale-125 transition-all"
              key={index}
              onClick={() => {
                showNotification({
                  color: "yellow",
                  title: `${listNameSingular}: ${listItem.iconName}`,
                  autoClose: 1500,
                });
              }}
            >
              <Icon icon={listItem.iconifyName} width={25} />
            </div>
          );
        })}
    </div>
  );
}
