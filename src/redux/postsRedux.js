import shortid from 'shortid';

/* selectors */
export const getAll = ({ posts }) => posts.data;
export const getActivePost = ({posts}) => posts.activePost;

export const getAllFiltered = ({ posts, users }) => {
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
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const selectPost = payload => ({ payload: payload, type: SELECT_POST });
export const addPost = payload => ({payload: { ...payload, id: shortid.generate() }, type: ADD_POST });
export const editPost = payload => ({payload: payload, type: EDIT_POST });

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
    case ADD_POST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: [...statePart.data, action.payload],
      };
    }
    case EDIT_POST: {
      return {
        ...statePart,
        activePost: action.payload,
        data: statePart.data.map(data => {
          if (data.id === action.payload.id) {
            return {
              ...action.payload,
            };
          } else {
            return {
              ...data,
            };
          }
        }),
      };
    }
    default:
      return statePart;
  }
};
