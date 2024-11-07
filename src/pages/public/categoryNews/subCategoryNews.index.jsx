import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import KasarHausaStatePage from "../kasarHausaStatePage/kasarHausaStatePage.index";
import RegionBasedPage from "../afrikaNews/regionBasedPage/regionBasedPage";
import ContinentPage from "../continentBasedPage/continent.index";
import WasaPage from "../wasanniNews/wasanniBasedPage/wasa.index";


const SubCategoryNews = () => {
  const param = useParams();

  const categoryName = useMemo(() => {
    return param?.categoryName
  }, [param?.categoryName])

  const subCategoryName = useMemo(() => {
    return param?.subCategory
  }, [param?.subCategory])

  const currentPage = useMemo(() => {
    let name = `${categoryName}-${subCategoryName}
    ` 
    if(name.includes('kasar-hausa')){
      return <KasarHausaStatePage /> 
    } else if(name.includes('afrika')) {
      return <RegionBasedPage />
    } else if(name.includes('duniya')){
      return <ContinentPage />
    }else if(name.includes('wasanni')){
        return <WasaPage />
    } else {
      return <p>`Category {categoryName} Sub category {subCategoryName}` page is not availble</p>
    }
  }, [categoryName, subCategoryName])
  
  return (
    <main className="bg-white py-6">
      {currentPage}
    </main>
  )
}

export default memo(SubCategoryNews);