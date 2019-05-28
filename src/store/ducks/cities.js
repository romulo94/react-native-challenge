/**
 * Actions Types
 */

export const Types = {
  ADD_CITY: "ADD_CITY"
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [
    {
      city: "Paracuru",
      country: "Brasil"
    },
    {
      city: "Fortaleza",
      country: "Brasil"
    }
  ]
};

export default function cities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_CITY:
      return {
        data: [...state.data, action.payload.data]
      };

    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  addCity: data => ({
    type: Types.ADD_CITY,
    payload: { data }
  })
};
