export const REQUEST_ACTION_TYPE = {
  PROGRESS: "progress",
  SUCCESS: "success",
  ERROR: "error",
  RESET: "reset",
};

export const requestInitialState = {
  status: null,
  message: null,
  data: null,
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_ACTION_TYPE.PROGRESS:
      // в середині action.type знаходиться REQUEST_ACTION_TYPE.PROGRESS
      return { ...state, status: action.type, message: null, data: null };
    // в середині action.type знаходиться REQUEST_ACTION_TYPE.SUCCESS
    case REQUEST_ACTION_TYPE.SUCCESS:
      return { ...state, status: action.type, data: action.payload };
    // в середині action.type знаходиться REQUEST_ACTION_TYPE.ERROR
    case REQUEST_ACTION_TYPE.ERROR:
      return { ...state, status: action.type, message: action.payload };
    case REQUEST_ACTION_TYPE.RESET:
      return { ...requestInitialState };
    default:
      return state;
  }
};
