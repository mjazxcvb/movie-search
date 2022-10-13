import { TDispatchAction } from "../interfaces/Action.type";
import { IMedia } from "../interfaces/Media.interface";
import { ADD_NOMINATION, APP_SET_STATE, REMOVE_NOMINATION, SET_ALERT_MESSAGE } from "./actions";
import { initialState } from "./initialState";

export const appReducer = (state = initialState, action: TDispatchAction) => {
  switch (action.type) {
    case ADD_NOMINATION: {
      return {
        ...state,
        nominations: state?.nominations
          ? state.nominations.concat(action.payload)
          : [action.payload],
      };
    }
    case REMOVE_NOMINATION: {
      return {
        ...state,
        nominations: state?.nominations
          ? state.nominations.filter(
              (nominee: IMedia) =>
                nominee?.Title !== action.payload?.Title &&
                nominee?.Year !== action.payload?.Year
            )
          : [],
      };
    }
    case SET_ALERT_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
      }
    }
    case APP_SET_STATE: {
      return action.payload;
    }
    default:
      return state;
  }
};
