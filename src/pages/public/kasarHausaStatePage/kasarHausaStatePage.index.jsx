import { useParams } from "react-router-dom";
import KasarHausaStateHeroSection from "./kasarHausaState.heroSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useState } from "react";

const KasarHausaStatePage = () => {
  const { subCategory } = useParams();
  const [isActiveTab, setIsActioveTab] = useState("Siyassa");
  let categories = [
    {
      name: "Siyassa",
      // link: paths.SUBCATEGORY_NEWS('duniya', 'turai')
    },
    {
      name: "Addini",
      // link: paths.SUBCATEGORY_NEWS('duniya', 'amurka')
    },
    {
      name: "Wasanin",
      // link: paths.SUBCATEGORY_NEWS('duniya', 'asiya')
    },
    {
      name: "Silma/Kannywood",
      // link: paths.SUBCATEGORY_NEWS('duniya', '"gabas-ta-tsakiya')
    },
  ];

  const handleTabChange = (e) => {
    setIsActioveTab(e.target.innerText);
  };

  return (
    <div>
      <SectionNavigation
        title={subCategory}
        showCategory
        categories={categories}
        as="tab"
        isActive={isActiveTab}
        onChangeTab={handleTabChange}
      />
      <KasarHausaStateHeroSection currentTab={isActiveTab} />
    </div>
  );
};

export default KasarHausaStatePage;
