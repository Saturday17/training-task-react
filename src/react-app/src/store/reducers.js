import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_FAILURE,
  ACTION_FIND_MESSAGE,
  ACTION_DELETE_MESSAGE
} from "../constants/constants";


const initialState ={
  gmailApi: 'https://www.googleapis.com/gmail/v1/users',
  userId: 'me',
  user: {
    fullName: '',
    imgUrl: ''
  },
  messages: [],
  loaded: false,
  loading: false,
  error: null,
  isShownSpinner: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        loading: true,
        loaded: false,
        isShownSpinner: true
      };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        messages: action.payload.messages,
        loaded: true,
        loading: false,
        isShownSpinner: false
      };
    case LOAD_DATA_FAILURE:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.payload,
        isShownSpinner: false
      };
    case ACTION_FIND_MESSAGE:
      return {
        ...state,
        messages: action.payload.messages
      };
    case ACTION_DELETE_MESSAGE:
      return {
        ...state,
        messages: action.payload.messages
      }
  }
  return state;
};