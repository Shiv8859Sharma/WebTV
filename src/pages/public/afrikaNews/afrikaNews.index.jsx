import { memo, useState } from "react";
import SectionNavigationIndex from "@/components/sectionNavigation/sectionNavigation.index";
import AfrikaLatestNews from "./afrikaLatestNews";
import AfrikaHeroSection from "./AfrikaHeroSection";
import paths from "@/routes/paths";

const AfirkaNews = () => {
  const [isActiveTab, setIsActioveTab] = useState('Kudancin afirka')
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

  const handleTabChange = (e) => {
    setIsActioveTab(e.target.innerText)
  }
  return (
    <div>
      <SectionNavigationIndex
        title={'Afrika'}
        showCategory
        categories={categories}
        // as='tab'
        // isActive={isActiveTab}
        // onChangeTab={handleTabChange}
      />
      <AfrikaHeroSection />
      <AfrikaLatestNews />

    </div>
  )
}

export default memo(AfirkaNews);