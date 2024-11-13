import { memo } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import Yanayi_a_you_hero_section from "./yanayi_a_you_hero_section";

const Yanayi_a_yau_news = () => {
  return (
    <div className="">
      <SectionNavigation title={"Yanayi a yau"} />
      <Yanayi_a_you_hero_section />
    </div>
  );
};

export default memo(Yanayi_a_yau_news);
