import { memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import KasarHausaStatePage from "../kasarHausaStatePage/kasarHausaStatePage.index";
import RegionBasedPage from "../afrikaNews/regionBasedPage/regionBasedPage";
import ContinentPage from "../continentBasedPage/continent.index";
import WasaPage from "../wasanniNews/wasanniBasedPage/wasa.index";
import CustomLoader from "@/layouts/skeletonLoaders";
import { fetchLocationCategory } from "@/globalStates/actions/cateGoryAction";
import { useDispatch } from "react-redux";

const SubCategoryNews = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryName = useMemo(() => {
    return param?.categoryName;
  }, [param?.categoryName]);

  const subCategoryName = useMemo(() => {
    return param?.subCategory;
  }, [param?.subCategory]);

  const fetchCategory = async (id) => {
    let category = await dispatch(fetchLocationCategory(id));
    if (category?.status === 200 && category?.data?.success) {
      return category?.data?.data;
    } else {
      return [];
    }
  };

  // Effect to fetch and update subCategory data
  useEffect(() => {
    if (subCategoryName) {
      setLoading(true);
      fetchCategory(subCategoryName).then((result) => {
        // if()result.l
        let data = result.map((item) => ({
          ...item,
        }));
        setSubCategory(data); // Store the raw data
        setTimeout(() => {
          setLoading(false);
        }, 100)
      });
    }
  }, [categoryName, subCategoryName]);


  const currentPage = useMemo(() => {
    let name = `${categoryName}-${subCategoryName}
    `;
    if (name.includes("kasar_hausa")) {
      return <KasarHausaStatePage categories={subCategory} />;
    } else if (name.includes("afrika")) {
      return <RegionBasedPage categories={subCategory} />;
    } else if (name.includes("duniya")) {
      return <ContinentPage categories={subCategory} />;
    } else if (name.includes("wasanni")) {
      return <WasaPage categories={subCategory} />;
    } else {
      return (
        <p>
          `Category {categoryName} Sub category {subCategoryName}` page is not
          availble
        </p>
      );
    }
  }, [categoryName, subCategory]);

  if (loading) {
    return <CustomLoader name='NewsSkeletonLoader' />
  }
  return <main className="bg-white py-6">{currentPage}</main>;
};

export default memo(SubCategoryNews);
