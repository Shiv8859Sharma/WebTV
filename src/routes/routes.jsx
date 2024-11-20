// routes.js
import {
  Home,
  LoginPage,
  CategoryNews,
  SubCategoryNews,
  AdminHomePage,
  BlogEditor,
  ShowBlog,
} from "./components"; // Import components

import paths from "./paths";

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
    { path: paths.CREATE_BLOG, exact: true, element: <BlogEditor /> },
    { path: paths.VIEW_BLOG(), element: <ShowBlog /> },
    {
      path: paths.EDIT_BLOG(),
      exact: true,
      element: <BlogEditor />,
    },
  ],
};
