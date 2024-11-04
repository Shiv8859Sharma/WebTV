import { memo } from "react";
import WasaniImageSection from "./WasanniImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import WasanniHeroGrid from "./wasanniHeroGrid";
import paths from "@/routes/paths";

const WasanniNews = () => {
  let categories = [
    {
      name: "Cricket",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'cricket')
    },
    {
      name: "Football",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'football')
    },
    {
      name: "Basketball",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'basketball')
    },
    {
      name: "Tennis",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'tennis')
    },
    {
      name: "Volleyball",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'volleyball')
    },
    {
      name: "Hockey",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'hockey')
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