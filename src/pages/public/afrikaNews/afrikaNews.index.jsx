import { memo } from "react";
import SectionNavigationIndex from "@/components/sectionNavigation/sectionNavigation.index";
import AfrikaLatestNews from "./afrikaLatestNews";
import AfrikaHeroSection from "./AfrikaHeroSection";
import paths from "@/routes/paths";

const AfirkaNews = () => {
  let categories = [
    {
      name: 'Kudancin afirka',
      link: paths.SUBCATEGORY_NEWS('afrika', 'kudancin-afirka')
    },
    {
      name: 'Arewacin afirka',
      link: paths.SUBCATEGORY_NEWS('afrika', 'arewacin-afirka')
    },
    {
      name: 'Afirka ta yamma',
      link: paths.SUBCATEGORY_NEWS('afrika', 'afirka-ta-yamma')
    },
    {
      name: 'Gabashin afirka',
      link: paths.SUBCATEGORY_NEWS('afrika', 'gabashin-afirka')
    },
  ]
  return (
    <div>
      <SectionNavigationIndex
        title={'Afrika'}
        showCategory
        categories={categories}
      />
      <AfrikaHeroSection />
      <AfrikaLatestNews />

    </div>
  )
}

export default memo(AfirkaNews);