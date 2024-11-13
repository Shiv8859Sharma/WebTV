import { lazy } from "react";
import paths from "./paths";
// public pages
import Home from "@/pages/Home";

const LoginPage = lazy(() => import("@/pages/login"));
const CategoryNews = lazy(
  () => import("@/pages/public/categoryNews/categoryNews.index")
);
const SubCategoryNews = lazy(
  () => import("@/pages/public/categoryNews/subCategoryNews.index")
);

// admin page
const AdminHomePage = lazy(
  () => import("@/pages/adminPages/adminHome/home.index")
);
const BlogEditor = lazy(() => import("@/pages/blog/blogEditor"));
const ShowBlog = lazy(() => import("@/pages/blog/showBlog"));

export const PublicRoutes = {
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    // {
    //   path: paths?.PRIVACY,
    //   element: <LoginPage />
    // },
    // {
    //   path: paths?.TERMS,
    //   element: <LoginPage />
    // },
    {
      path: paths?.CATEGORY_NEWS(),
      children: [
        {
          index: true,
          element: <CategoryNews />,
        },
        {
          path: paths?.SUBCATEGORY_NEWS(),
          element: <SubCategoryNews />,
        },
      ],
    },
  ],
};

export const AdminRoutes = {
  children: [
    { path: "/", element: <AdminHomePage /> },
    { path: paths.CREATE_BLOG, element: <BlogEditor /> },
    { path: paths.VIEW_BLOG(), element: <ShowBlog /> },
    {
      path: paths.EDIT_BLOG(),
      element: <BlogEditor />,
    },
  ],
};
