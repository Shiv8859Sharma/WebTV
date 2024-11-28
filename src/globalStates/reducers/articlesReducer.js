import {
  AFRIKA_PAGE_ARTICLES,
  DUNIYA_PAGE_ARTICLES,
  HOME_PAGE_ARTICLES,
  KASAR_HAUSA_PAGE_ARTICLES,
  KASUWANCI_PAGE_ARTICLES,
  WASANNI_PAGE_ARTICLES,
  YANAYI_PAGE_ARTICLES,
} from "../actions/actionsType";

const ArticlesReducer = (
  state = {
    home: {},
    kasarHausa: {},
    afrika: {},
    duniya: {},
    kasuwanci: {},
    wasanni: {},
    yanayi_a_yau: {},
  },
  action
) => {
  switch (action.type) {
    case `${HOME_PAGE_ARTICLES}_SUCCESS`:
      return { home: formatHomeArticleData(action.payload) };
    case `${KASAR_HAUSA_PAGE_ARTICLES}_SUCCESS`:
      return { kasarHausa: action.payload };
    case `${AFRIKA_PAGE_ARTICLES}_SUCCESS`:
      return { afrika: formatAfricaArticleData(action.payload) };
    case `${DUNIYA_PAGE_ARTICLES}_SUCCESS`:
      return { duniya: action.payload };
    case `${KASUWANCI_PAGE_ARTICLES}_SUCCESS`:
      return { kasuwanci: action.payload };
    case `${WASANNI_PAGE_ARTICLES}_SUCCESS`:
      return { wasanni: formatWasanniArticleData(action.payload) };
    case `${YANAYI_PAGE_ARTICLES}_SUCCESS`:
      return { yanayi_a_yau: action.payload };
    default:
      return state;
  }
};

export default ArticlesReducer;

const formatHomeArticleData = (data) => {
  // Destructure data with default values
  const {
    main: mainArticle = [],
    categories: categoriesArticle = {},
    duniya = [],
  } = data || {};

  // Format the hero section
  const heroSection = {
    mainArticle: mainArticle[0]
      ? {
          image: "",
          id: mainArticle[0].id,
          title: mainArticle[0].title,
          description: mainArticle[0].description,
        }
      : null,
    sideArticles: mainArticle.slice(1, 3).map((item) => ({
      image: "",
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "Unknown",
    })),
    listArticles: mainArticle.slice(2, 6).map((item) => ({
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "Unknown",
    })),
  };

  // Format categories
  const categories = [
    {
      title: "Yanzu",
      articles: [
        ...(categoriesArticle.wasanni?.slice(2) || []),
        ...(categoriesArticle.yanayi_a_yau?.slice(2) || []),
      ],
    },
    {
      title: "Wasanni",
      articles: categoriesArticle.wasanni || [],
    },
    {
      title: "Kasuwanci",
      articles: categoriesArticle.kasuwanci || [],
    },
    {
      title: "Bidi'a",
      articles: categoriesArticle.bidi_a || [],
    },
  ];

  // Return formatted data
  return {
    ...data,
    duniya: duniya.map((article) => ({
      ...article,
      category: article.parentMaincategory?.name || "Unknown",
    })),
    heroSection,
    categories,
  };
};

const formatAfricaArticleData = (data) => {
  // Destructure data with default values

  const {
    main_afrika_articles: mainArticle = [],
    latest_articles: latestArticle = [],
    allMostPopularArticle: mostPopularPost = [],
  } = data || {};

  // Format the hero section
  const heroSection = {
    mainArticle: mainArticle[0]
      ? {
          image: "",
          title: mainArticle[0].title,
          id: mainArticle[0].id,
          description: mainArticle[0].description,
        }
      : null,
    sideArticles: mainArticle.slice(1, 3).map((item) => ({
      image: "",
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "Unknown",
    })),
    listArticles: mainArticle.slice(2, 6).map((item) => ({
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "Unknown",
    })),
  };

  // Return formatted data
  return {
    latestArticle,
    heroSection,
    mostPopularPost,
  };
};

const formatWasanniArticleData = (data) => {
  const { latest_article: mainArticle = [], allArticle: feeds = {} } =
    data || {};

  // Format the hero section
  const heroSection = {
    mainArticle: mainArticle[0]
      ? {
          image: "",
          id: mainArticle[0].id,
          title: mainArticle[0].title,
          description: mainArticle[0].description,
        }
      : null,
    sideArticles: mainArticle.slice(1, 3).map((item) => ({
      image: "",
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "Unknown",
    })),
    listArticles: mainArticle.slice(2, 6).map((item) => ({
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "Unknown",
    })),
  };

  return {
    heroSection,
    feeds: {
      ...feeds,
      rows: feeds?.rows.map((article) => ({
        ...article,
        category: article.parentMaincategory?.name || "Unknown",
      })),
    },
  };
};
