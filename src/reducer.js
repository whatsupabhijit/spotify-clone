export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'bebee3b2e6e846dfb6552a2a2ec4f6b6',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TODAYS_TOP_HITS":
      return {
        ...state,
        discover_today: action.discover_today,
      };

    default:
      return state;
  }
};

export default reducer;
