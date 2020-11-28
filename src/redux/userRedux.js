/* selectors */
export const getAllUsers = ({users}) => users.data;
export const getActive = ({users}) => users.activeUser;

export const getUserById = ({users}, userId) => {
  const filtered = users.data.filter(user => user.id == userId);
  console.log(userId);
  return filtered.length ? filtered[0] : {error: true};
};

/* action name creator */
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_USER = createActionName('CHANGE_USER');

/* action creators */
export const changeUser = payload => ({ payload, type: CHANGE_USER });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_USER: {
      return {
        ...statePart,
        activeUser: action.payload,
      };
    }
    default:
      return statePart;
  }
};
