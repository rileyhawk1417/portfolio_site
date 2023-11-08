"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CardInfo } from "./card_info";
import Lottie from "lottie-react";
import construction from "@/app/lottie_files/construction.json";

const items = [
  {
    key: "new",
    label: "New file",
    toolTip: "Create a new file",
  },
  {
    key: "copy",
    label: "Copy link",
    toolTip: "Copy a new file",
  },
  {
    key: "edit",
    label: "Edit file",
    toolTip: "Edit a new file",
  },
  {
    key: "delete",
    label: "Delete file",
    toolTip: "Delete a new file",
  },
];

interface ProjectsProp {
  sectionTitle: string;
  projectList: any[];
}
//TODO: Add project list and title for props
const ProjectList = ({ sectionTitle, projectList }: ProjectsProp) => {
  return (
    <>
      <div>{sectionTitle}</div>
      <Accordion
        isCompact
      >
        {projectList.map((item, keys) => (
          <AccordionItem
            aria-label={item.label}
            key={item.key}
            title={
              <div className="w-80 h-48">
                <Lottie animationData={construction} loop={true} />
              </div>
            }
          >
            <div className="flex items-center justify-center">
              <CardInfo str={item.toolTip} key={keys} />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ProjectList;
