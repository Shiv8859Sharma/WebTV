import BlogTable from "@/components/tables/blogTable/blogTable.index";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "@/globalStates/actions/blogActions";
import { popupOpen } from "@/globalStates/actions/PopupAction";
import InputField from "@/components/formFields/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import helpers from "@/utills/helpers";

const AdminHomePage = () => {
  const { allBlogs, successMessage, errorMessage } = useSelector(
    (state) => state.blog
  );

  const isLoading = useSelector((state) => state?.loader?.isLoading);
  const dispatch = useDispatch();

  // State for pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  const [search, setSearch] = useState("");

  // Fetch blogs when the page or limit changes
  useLayoutEffect(() => {
    dispatch(
      fetchAllBlog({
        pagination: {
          page: pagination.page,
          limit: pagination.limit,
        },
        filters: {
          search: search,
        },
      })
    );
  }, [pagination.page, pagination.limit, dispatch, search]);

  useEffect(() => {
    if (successMessage || errorMessage) {
      const messageType = successMessage ? "success" : "error";
      let message = successMessage || errorMessage;
      setTimeout(() => {
        dispatch(
          popupOpen({
            type: "ALERT_POPUP",
            open: true,
            details: { type: messageType, message },
            className: "w-[95%] md:w-[40%] xl:w-[30%] 3xl:w-[20%]",
          })
        );
      }, 1000);
    }
  }, [successMessage, errorMessage, dispatch]);

  const handleDeleteBlog = (id) => {
    dispatch(
      popupOpen({
        type: "CONFIRM_DELETE_BLOG_POPUP",
        open: true,
        details: { id },
        className: "w-[95%] md:w-[40%] xl:w-[30%] 3xl:w-[20%]",
      })
    );
  };

  const handlePageChange = (pageCount) => {
    // Set the new page count and trigger re-fetching of blogs
    setPagination((prev) => ({
      ...prev,
      page: pageCount,
    }));
  };

  const handleSearchArticle = (e) => {
    let { value } = e.target;
    helpers.debounce(() => {
      setSearch(value);
    }, 1000)();
  };

  return (
    <section className="container mx-auto">
      <div className="flex items-center gap-2 justify-between mb-4">
        <div className="">
          <SectionNavigation
            title={"All blogs"}
            titlePosition="!text-left !mb-0"
            titleClassname="!text-2xl"
          />
        </div>
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            onChange={handleSearchArticle}
          >
            <InputField
              placeholder="Search"
              name="search"
              leftIcon={<MagnifyingGlassIcon />}
              containerClass="!w-50"
            />
          </form>
        </div>
      </div>

      <BlogTable
        blogs={allBlogs}
        isLoading={isLoading}
        onDelete={handleDeleteBlog}
        onPageChange={handlePageChange}
        currentPage={pagination.page} // Passing the current page to BlogTable
        pageSize={pagination.limit} // Passing the page limit to BlogTable
      />
    </section>
  );
};

export default AdminHomePage;
