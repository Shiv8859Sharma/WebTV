const apiEndPoint = {
  LOGIN: "/api/v1/auth/signin",
  LOGOUT: "/api/v1/auth/signout",
  CREATE_A_NEW_BLOG: "/api/v1/article/create",
  FETCH_CATEGORY_LIST: "/api/v1/general/category/",
  FETCH_ALL_BLOG: "/api/v1/article/all",
  FETCH_SINGLE_BLOG: (id) => `/api/v1/article/${id}`,
  HOME_PAGE_ARTICLES: "/api/v1/article/home-articles",
  KASAR_HAUSA_PAGE_ARTICLES: "/api/v1/article/kasar-hausa",
  AFRIKA_PAGE_ARTICLES: "/api/v1/article/afrika",
  AFRIKA_REGION_MAIN_SECTION_ARTICLES: "/api/v1/article/latest/afrika",
  AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES:
    "/api/v1/article/all-article/afrika",
  DUNIYA_PAGE_ARTICLES: "/api/v1/article/duniya",
  KASUWANCI_PAGE_ARTICLES: "/api/v1/article/kasuwanci",
  WASANNI_PAGE_ARTICLES: "/api/v1/article/latest/wasanni",
  WASANNI_PAGE_NEWS_FEEDS_ARTICLES: "/api/v1/article/all/wasanni",
  YANAYI_PAGE_ARTICLES: "/api/v1/article/yanayi",
  UPLOAD_ARTICLE_FILES: "/api/v1/auth/upload-image",
};

export default apiEndPoint;
