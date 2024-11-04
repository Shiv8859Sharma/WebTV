import { memo } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import KasarHausaImageSection from "./kasarHausaImageSection";
import HausaNewsSection from "./hausaNewsSection/hausaNewsSection";
import paths from "@/routes/paths";

const KasarHausaNews = () => {
  let categories = [
    {
      name: 'Kano',
      link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'kano')
    },
    {
      name: 'Zamfara',
      link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'zamfara')
    },
    {
      name: 'Kaduna',
      link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'kaduna')
    },
    {
      name: 'Jigawa',
      link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'jigawa')
    },
    {
      name: 'Sokoto',
      link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'sokoto')
    },
    {
      name: 'Katsina',
      link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'katsina')
    },
    {
      name: 'More',
      dropdown: true,
      dropDownList: [
        {
          name: 'Bauchi',
          link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'bauchi')
        },
        {
          name: 'Daura',
          link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'daura')
        },
        {
          name: 'Kasar',
          link: paths.SUBCATEGORY_NEWS('kasar-hausa', 'kasar')
        },
      ]
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation
        title={'Kasar housa'}
        showCategory
        categories={categories}
      />
      <KasarHausaImageSection />
      <HausaNewsSection />
    </div>
  )
}

export default memo(KasarHausaNews);