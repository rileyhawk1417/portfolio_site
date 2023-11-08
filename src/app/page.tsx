import Image from "next/image";
import { Button } from "@nextui-org/button";
import AboutSection from "./sections/about_section";
import NameSection from "./sections/name_section";
import ProjectList from "@/components/project_list";
import { Footer } from "@/components/footer";
/*
 * The idea for the projects is:
 * projects = [
 * {
 * name: 'Project Name',
 * desc: 'Project Description',
 * github_url: 'Github Link'
 * lottie_file: animation
 * project_icon: 'icon_link'
 * }
 * ]
 */
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
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-around">
        <NameSection />
        <AboutSection />

        {/* <div className="w-full" >
          <ProjectList sectionTitle="Projects" projectList={items} />
        </div> */}
      </div>
    </main>
  );
}
