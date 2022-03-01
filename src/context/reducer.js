const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR': {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }
  }
};

export default reducer;
