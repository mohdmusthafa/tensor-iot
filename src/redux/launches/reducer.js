/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday November 26th 2022
 * Product : TensorIoT
 */

import { SET_LAUNCH_DATA, SET_LAUNCH_FETCH_STATUS } from "./types";

const initialState = {
  launches: [],
  launchesFetching: false
}

export default function launchesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LAUNCH_DATA:
      return { ...state, launches: action.payload }
    case SET_LAUNCH_FETCH_STATUS:
      return { ...state, launchesFetching: action.payload }
    default:
      return state;
  }
}