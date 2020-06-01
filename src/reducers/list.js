import { ADD_EVENT, DELETE_EVENT } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = { todo: action.todo };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case DELETE_EVENT:
      return state.filter((todo) => {
        return action.id !== todo.id;
      });

    default:
      return state;
  }
};
