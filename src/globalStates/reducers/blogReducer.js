import {
  CLEAR_BLOG,
  CREATE_A_NEW_BLOG,
  FETCH_ALL_BLOG,
  FETCH_SINGLE_BLOG,
  SET_BLOG,
  UPDATE_SINGLE_BLOG,
} from "../actions/actionsType";

const initialState = {
  title: "",
  description: "",
  author: "",
  published: "yes",
  content: {},
};

const init = {
  allBlogs: [],
  blogDetails: {
    title: "",
    description: "",
    author: "Anonymous",
    location_category_name: "",
    category: "",
    media: "",
    location_sub_category_name: "",
    published: "yes",
    content: {},
  },
  error: "",
};

const blogReducer = (state = init, action) => {
  switch (action.type) {
    case `${FETCH_ALL_BLOG}_SUCCESS`:
      return { ...state, allBlogs: action.payload, error: "" };
    case `${CREATE_A_NEW_BLOG}_SUCCESS`:
      return { ...init };
    case SET_BLOG:
    case `${FETCH_SINGLE_BLOG}_SUCCESS`:
      return {
        ...state,
        blogDetails: { ...state?.blogDetails, ...action.payload },
        error: "",
      };
    case `${UPDATE_SINGLE_BLOG}_SUCCESS`:
      return { ...state, success: action.payload };
    case `${FETCH_ALL_BLOG}_ERROR`:
    case `${FETCH_SINGLE_BLOG}_ERROR`:
    case `${CREATE_A_NEW_BLOG}_ERROR`:
    case `GET_LOCATION_CATEGORY_ERROR`:
      return { ...init, error: action.payload };
    case CLEAR_BLOG:
      return { ...init };
    default:
      return state;
  }
};

export default blogReducer;
