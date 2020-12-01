/* selectors */
export const getAll = ({ posts }) => posts.data;

export const getAllFiltered = ({ posts, users }) => {
  // const filteredPosts = posts.data.filter(posts => posts.author == users.activeUser.name);
  // || item.status == 'published'
  // console.log(posts.author);
  return posts.data.filter(
    item =>
      item.author === users.activeUser.name
      ||
      users.activeUser.name === 'Administrator'
      ||
      (users.activeUser.name === 'Niezalogowany' && item.status === 'published')
  );
};

export const getPostById = ({ posts }, postId) => {
  const filtered = posts.data.filter(post => post.id == postId);
  return filtered.length ? filtered[0] : { error: true };
};

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const SELECT_POST = createActionName('SELECT_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const selectPost = payload => ({payload: payload, type: SELECT_POST });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case SELECT_POST: {
      return {
        ...statePart,
        activePost: action.payload,
      };
    }
    default:
      return statePart;
  }
};
