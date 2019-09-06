import { EntreeSortie } from "../api/fetch/models";
import { Reducer } from "redux";

export const entreeSortieState = {
  entreeSorties: [] as EntreeSortie[]
};

export type EntreeSortieListState = typeof entreeSortieState;

export type EntreeSortieListAction = {
  type: "EntreeSortieListLoaded";
  entreeSorties: EntreeSortie[];
};

export const entreeSortieListReducer: Reducer<
  EntreeSortieListState,
  EntreeSortieListAction
> = (state = entreeSortieState, action) => {
  switch (action.type) {
    case "EntreeSortieListLoaded":
      return { ...state, entreeSorties: action.entreeSorties || [] };
    default:
      // assertNever(action);
      return state;
  }
};
