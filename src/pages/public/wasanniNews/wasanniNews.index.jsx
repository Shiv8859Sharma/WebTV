import { memo } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import paths from "@/routes/paths";
import WasanniHeroSection from "./wasanniHeroSection";
import WasanniNewsFeeds from "./wasanniFeeds";

const WasanniNews = () => {
  let categories = [
    {
      name: "Kalon Kapa",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'kalon-kapa')
    },
    {
      name: "Dambe",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'dambe')
    },
    {
      name: "Wasa Kondo",
      link: paths.SUBCATEGORY_NEWS('wasanni', 'wasa-kondo')
    },
  ];
  return (
    <div className="">
      <SectionNavigation
        title={"Wasanni"}
        showCategory
        categories={categories}
      />
      <WasanniHeroSection />
      <WasanniNewsFeeds />
    </div>
  );
};

export default memo(WasanniNews);