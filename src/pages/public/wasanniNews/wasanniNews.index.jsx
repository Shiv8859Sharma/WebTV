import { memo } from "react";
import WasaniImageSection from "./WasanniImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import WasanniHeroGrid from "./wasanniHeroGrid";

const WasanniNews = () => {
  let categories = [
    {
      name: "Cricket",
      link: "",
    },
    {
      name: "Football",
      link: "",
    },
    {
      name: "Basketball",
      link: "",
    },
    {
      name: "Tennis",
      link: "",
    },
    {
      name: "Volleyball",
      link: "",
    },
    {
      name: "Hockey",
      link: "",
    },
  ];
  return (
    <div className="">
      <SectionNavigation
        title={"Wasanni"}
        showCategory
        categories={categories}
      />
      <WasaniImageSection />
      <WasanniHeroGrid />
    </div>
  );
};

export default memo(WasanniNews);