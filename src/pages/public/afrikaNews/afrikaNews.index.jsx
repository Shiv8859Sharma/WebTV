import { memo } from "react";
import SectionNavigationIndex from "@/components/sectionNavigation/sectionNavigation.index";
import AfrikaLatestNews from "./afrikaLatestNews";
import AfrikaHeroSection from "./AfrikaHeroSection";

const AfirkaNews = () => {
  let categories = [
    {
      name: 'KUDANCIN AFIRKA',
      link: ''
    },
    {
      name: 'AREWACIN AFIRKA',
      link: ''
    },
    {
      name: 'AFIRKA TA YAMMA',
      link: ''
    },
    {
      name: 'GABASHIN AFIRKA',
      link: ''
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