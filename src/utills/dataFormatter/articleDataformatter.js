// Helper function to format hero section
export const formatHeroSection = (articles) => {
  return {
    mainArticle: articles[0]
      ? {
          image: articles[0]?.media?.url,
          id: articles[0].id,
          title: articles[0].title,
          description: articles[0].description,
        }
      : null,
    sideArticles: articles.slice(1, 3).map((item) => ({
      image: item?.media?.url,
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "OPINION",
    })),
    listArticles: articles.slice(3, 7).map((item) => ({
      title: item.title,
      id: item.id,
      date: new Date(item.createdAt),
      category: item.parentMaincategory?.name || "OPINION",
    })),
  };
};

// Formatter for Home Page articles
export const formatHomeArticleData = (data) => {
  const {
    main: mainArticles = [],
    categories: categoryArticles = {},
    duniya = [],
    afrika = [],
    latest_posts = [],
  } = data || {};

  return {
    ...data,
    afrika: afrika.map((article) => ({
      ...article,
      imgSrc: article?.media?.url,
      category: article.category?.name || "OPINION",
    })),
    latest_posts: latest_posts.map((article) => ({
      ...article,
      imgSrc: article?.media?.url,
      category: article.parentSubcategory?.name || "OPINION",
    })),
    duniya: duniya.map((article) => ({
      ...article,
      imgSrc: article?.media?.url,
      category: article.parentSubcategory?.name || "OPINION",
    })),
    heroSection: formatHeroSection(mainArticles),
    categories: [
      {
        title: "Yanzu",
        articles: [
          ...(categoryArticles.wasanni?.slice(2) || []),
          ...(categoryArticles.yanayi_a_yau?.slice(2) || []),
        ],
      },
      { title: "Wasanni", articles: categoryArticles.wasanni || [] },
      { title: "Kasuwanci", articles: categoryArticles.kasuwanci || [] },
      { title: "Bidi'a", articles: categoryArticles.bidi_a || [] },
    ],
  };
};

// Formatter for Africa Page articles
export const formatAfricaArticleData = (data) => {
  const {
    main_afrika_articles: mainArticles = [],
    latest_articles: latestArticles = [],
    allMostPopularArticle: mostPopularArticles = [],
  } = data || {};

  return {
    latestArticles,
    heroSection: formatHeroSection(mainArticles),
    mostPopularArticles,
  };
};

// Formatter for Wasanni Page articles
export const formatWasanniArticleData = (data) => {
  const { latest_article: mainArticles = [], allArticle: feeds = {} } =
    data || {};

  return {
    heroSection: formatHeroSection(mainArticles),
    feeds: {
      ...feeds,
      rows: feeds?.rows.map((article) => ({
        ...article,
        category: article.parentMaincategory?.name || "OPINION",
      })),
    },
  };
};
