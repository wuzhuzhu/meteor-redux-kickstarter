// Initial state
const initialState = {
  value: 0,
  loading: false
};

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM = 'CounterState/RANDOM';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

export function random() {
  return {
    type: RANDOM
  };
}

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: value + 1,
      };

    case RESET:
      return initialState;

    case RANDOM:
      return {
        ...state,
        value: Math.floor(Math.random() * 100),
      };

    default:
      return state;
  }
}
