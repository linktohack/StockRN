import { EntreeSortie } from "../api/fetch/models";
import { Reducer } from "redux";
import { assertNever } from "../utils";

export const entreeSortieState = {
  entreeSorties: [] as EntreeSortie[]
};

export type EntreeSortieListState = typeof entreeSortieState;

export type EntreeSortieListAction = {
  type: "EntreeSortieListLoaded";
  entreeSorties: EntreeSortie[];
};

export const entreeSortieListReducer: Reducer<
  EntreeSortieListState | undefined,
  EntreeSortieListAction
> = (state: EntreeSortieListState, action: EntreeSortieListAction) => {
  console.log("here", action);
  state = state || entreeSortieState;
  switch (action.type) {
    case "EntreeSortieListLoaded":
      return { ...state, entreeSorties: action.entreeSorties || [] };
    default:
      // assertNever(action);
      return state;
  }
};
