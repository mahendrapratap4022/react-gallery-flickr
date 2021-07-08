function page(state = [], action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        current_page: action.page + 1,
      };
    case 'CHANGE_SEARCH':
      return {
        ...state,
        search: action.search,
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: action.sort,
      };
    case 'TOGGLE_LOADER':
      return {
        ...state,
        loading: !state.loading,
      };
    case 'ADD_PAGES_NUM':
      return {
        ...state,
        pages: action.pagesNumber,
      };
    case 'THROW_ERROR':
      return {
        ...state,
        error: true,
        text: action.text,
      };
    default:
      return state;
  }
  return state;
}

export default page;
