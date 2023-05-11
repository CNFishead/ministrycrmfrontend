import { MODIFY_FILTER, REMOVE_FILTER, SET_PAGE_LIMIT, SET_PAGE_NUMBER, SET_SEARCH, TOGGLE_SIDEBAR } from '../../constants/interfaceConstants';


interface SearchState {
  search: string;
  pageNumber: number;
  pageLimit: number;
  filter: string[];
}

export const searchReducer = (state = {
  search: '',
  pageNumber: 1,
  pageLimit: 10,
  filter: [],
} as SearchState, action: any) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    case SET_PAGE_LIMIT:
      return { ...state, pageLimit: action.payload };
    case MODIFY_FILTER:
      return { ...state, filter: [...state.filter, action.payload] };
    case REMOVE_FILTER:
      return { ...state, filter: [] };
    default:
      return state;
  }
};
