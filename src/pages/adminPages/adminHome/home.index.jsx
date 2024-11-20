import BlogTable from "@/components/tables/blogTable/blogTable.index";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "@/globalStates/actions/blogActions";
import { popupOpen } from "@/globalStates/actions/PopupAction";

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

  // Fetch blogs when the page or limit changes
  useLayoutEffect(() => {
    dispatch(
      fetchAllBlog({
        pagination: {
          page: pagination.page,
          limit: pagination.limit,
        },
        filters: {},
      })
    );
  }, [pagination.page, pagination.limit, dispatch]);

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

  return (
    <section className="container mx-auto">
      <SectionNavigation
        title={"All blogs"}
        titlePosition="!text-left !mb-0"
        titleClassname="!text-2xl"
      />
      <BlogTable
        blogs={allBlogs}
        isLoading={isLoading}
        onDelete={handleDeleteBlog}
        onPageChange={handlePageChange}
        currentPage={pagination.page}  // Passing the current page to BlogTable
        pageSize={pagination.limit}     // Passing the page limit to BlogTable
      />
    </section>
  );
};

export default AdminHomePage;
