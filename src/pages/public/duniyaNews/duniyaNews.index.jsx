import { memo } from "react";
import DuniyaImageSection from "./duniyaImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import paths from "@/routes/paths";
import DuniyaNewsFeeds from "./duniyaNewsFeeds";

const DuniyaNews = () => {
  let categories = [
    {
      name: "Turai",
      link: paths.SUBCATEGORY_NEWS('duniya', 'turai')
    },
    {
      name: "Amurka",
      link: paths.SUBCATEGORY_NEWS('duniya', 'amurka')
    },
    {
      name: "Asiya",
      link: paths.SUBCATEGORY_NEWS('duniya', 'asiya')
    },
    {
      name: "Gabas ta Tsakiya",
      link: paths.SUBCATEGORY_NEWS('duniya', 'gabas-ta-tsakiya')
    }
  ];

  return (
    <div>
      <SectionNavigation
        title={'Duniya'}
        showCategory
        categories={categories}
      />
      <DuniyaImageSection />
      <DuniyaNewsFeeds />
    </div>
  )
}

export default memo(DuniyaNews);