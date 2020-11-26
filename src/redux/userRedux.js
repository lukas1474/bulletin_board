/* selectors */
export const getAll = ({users}) => users.data;
export const getActive = ({users}) => users.activeUser;

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
