import { lazy } from "react";
import paths from "./paths";
// public pages
import Home from "@/pages/Home";
const LoginPage = lazy(() => import('@/pages/login'));
const CategoryNews = lazy(() => import('@/pages/public/categoryNews/categoryNews.index'));
const SubCategoryNews =  lazy(() => import('@/pages/public/categoryNews/subCategoryNews.index'))

export const PublicRoutes = {
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: paths?.LOGIN,
      element: <LoginPage />
    },
    {
      path: paths?.PRIVACY,
      element: <LoginPage />
    },
    {
      path: paths?.TERMS,
      element: <LoginPage />
    },
    {
      path: paths?.CATEGORY_NEWS(),
      children: [
        {
          index: true,
          element: <CategoryNews />
        },
        {
          path: paths?.SUBCATEGORY_NEWS(),
          element: <SubCategoryNews />
        }
      ]
    },
    // {
    //   path: ,
    //   element: <LoginPage />
    // }
  ]
}

export const AdminRoutes = {
  children: [
    { path: "/", element: <p>Admin Dashboard</p> },
  ],
};