import { 
  ENTRY_LIST_REQUEST,
  ENTRY_LIST_SUCCESS,
  ENTRY_LIST_FAIL,
  ENTRY_MADE_REQUEST,
  ENTRY_MADE_SUCCESS,
  ENTRY_MADE_FAIL,
  ENTRY_UPDATE_REQUEST,
  ENTRY_UPDATE_SUCCESS,
  ENTRY_UPDATE_FAIL,
  ENTRY_DELETE_REQUEST,
  ENTRY_DELETE_SUCCESS,
  ENTRY_DELETE_FAIL
} from '../constants/entryConstants';



export const entryListReducer = (state = { entries: [] }, action) => {
  switch (action.type) {
    case ENTRY_LIST_REQUEST:
      return { loading: true };

    case ENTRY_LIST_SUCCESS:
      return { loading: false, entries: action.payload };

    case ENTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
  
    default:
      return state;;
  }
};


export const entryMakeReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTRY_MADE_REQUEST:
      return { loading: true };

    case ENTRY_MADE_SUCCESS:
      return { loading: false, success: true };

    case ENTRY_MADE_FAIL:
      return { loading: false, error: action.payload };
  
    default:
      return state;;
  }
};


export const entryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTRY_UPDATE_REQUEST:
      return { loading: true };

    case ENTRY_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case ENTRY_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
  
    default:
      return state;;
  }
};


export const entryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTRY_DELETE_REQUEST:
      return { loading: true };

    case ENTRY_DELETE_SUCCESS:
      return { loading: false, success: true };

    case ENTRY_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
  
    default:
      return state;;
  }
};