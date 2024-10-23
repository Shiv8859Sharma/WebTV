import { memo } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import KasarHausaImageSection from "./kasarHausaImageSection";
import HausaNewsSection from "./hausaNewsSection/hausaNewsSection";

const KasarHausaNews = () => {
  let categories = [
    {
      name: 'Kano',
      link: '/news/kasar-hausa/kano'
    },
    {
      name: 'Zamfara',
      link: ''
    },
    {
      name: 'Kaduna',
      link: ''
    },
    {
      name: 'Jigawa',
      link: ''
    },
    {
      name: 'Sokoto',
      link: ''
    },
    {
      name: 'Katsina',
      link: ''
    },
    {
      name: 'More',
      dropdown: true,
      dropDownList: [
        {
          name: 'Bauchi',
          link: ''
        },
        {
          name: 'Daura',
          link: ''
        },
        {
          name: 'Kasar  ',
          link: ''
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