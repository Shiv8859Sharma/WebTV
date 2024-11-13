import { CLEAR_BLOG, FETCH_ALL_BLOG, FETCH_SINGLE_BLOG, SET_BLOG } from "../actions/actionsType";

const initialState = {
  title: "",
  description: "",
  author: '',
  published: "yes",
  content: {}
};

const init = {
  allBlogs: [],
  blogDetails: {
    title: "",
    description: "",
    author: "Anonymous",
    location_category_name: '',
    category: '',
    media: '',
    location_sub_category_name: '',
    published: "yes",
    content: {}
  },
  error: ''
}

const blogReducer = (state = init, action) => {
  switch (action.type) {
    case `${FETCH_ALL_BLOG}_SUCCESS`:
      return { ...state, allBlogs: action.payload, error: '' };
    case SET_BLOG:
      return { ...state, blogDetails: { ...state?.blogDetails, ...action.payload }, error: '' };
    case `${FETCH_ALL_BLOG}_ERROR`:
    case `${FETCH_SINGLE_BLOG}_ERROR`:
      return { ...init, error: action.payload };
    case CLEAR_BLOG:
      return { ...init };
    default:
      return state;
  }
};

export default blogReducer;