import { useParams } from "react-router-dom";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useState } from "react";
import ContinentHeroSection from "./continent.herosection";

const ContinentPage = ({ categories }) => {
  const { subCategory } = useParams();
  const [isActiveTab, setIsActioveTab] = useState("Siyassa");
  // let allCategories = [
  //   {
  //     name: "Siyassa",
  //   },
  //   {
  //     name: "Wasanin",
  //   },
  //   {
  //     name: "Kasawanci",
  //   },
  // ];

  // let gabasCategoties = [
  //   {
  //     name: "Siyassa",
  //   },
  //   {
  //     name: "Addini",
  //   },
  //   {
  //     name: "Wasanin",
  //   },
  //   {
  //     name: "Yanayi a yau",
  //   },
  // ];
  // console.log("categories ::", categories);

  const handleTabChange = (e) => {
    setIsActioveTab(e.target.innerText);
  };

  let title = {
    turai: "Turai",
    amurka: "Amurka | Kudancin Amurka | Caribbean",
    asiya: "Asiya",
    gabas_ta_tsakiya: "Gabas-ta-tsakiya",
  };
  return (
    <div>
      <SectionNavigation
        title={title[subCategory]}
        showCategory
        categories={categories}
        as="tab"
        isActive={isActiveTab}
        onChangeTab={handleTabChange}
      />
      <ContinentHeroSection currentTab={isActiveTab} />
    </div>
  );
};

export default ContinentPage;
