import { memo } from "react";
import DuniyaImageSection from "./duniyaImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import DuniyaHeroGrid from "./duniyaGridSection";

const DuniyaNews = () => {
  return (
    <div>
      <SectionNavigation
        title={'Duniya'}
      />
      <DuniyaImageSection />
      <DuniyaHeroGrid />
    </div>
  )
}

export default memo(DuniyaNews);