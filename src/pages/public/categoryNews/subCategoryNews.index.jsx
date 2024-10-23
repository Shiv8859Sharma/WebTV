import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import KasarHausaStatePage from "../kasarHausaStatePage/kasarHausaStatePage.index";


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
    }else {
      return <p>`Category {categoryName} Sub category {subCategoryName}` page is not availble</p>
    }
    // switch (name) {
    //   case name.includes('kasar-hausa'):
    //     return <p>kasar-hausa</p>
    //   default:
    //     return <p>`Category {categoryName} Sub category {subCategoryName}` page is not availble</p>
    // }
  }, [categoryName, subCategoryName])

  
  let count =  0
  const handleClick = () => {
    count += 1 
    console.log(count);
  }
  
  return (
    <main className="bg-white py-6">
      {currentPage}
    </main>
  )
}

export default memo(SubCategoryNews);