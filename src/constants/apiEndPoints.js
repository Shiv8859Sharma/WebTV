const apiEndPoint = {
  LOGIN: "/auth/signin",
  LOGOUT: "/auth/signout",
  CREATE_A_NEW_BLOG: "/article/create",
  FETCH_CATEGORY_LIST: "/general/category/",
  FETCH_ALL_BLOG: "/article/all",
  FETCH_SINGLE_BLOG: (id) => `/article/${id}`,
};

export default apiEndPoint;
