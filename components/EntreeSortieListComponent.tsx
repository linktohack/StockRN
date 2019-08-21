import React, { FunctionComponent, useEffect } from "react";
import { EntreeSortieListState } from "./EntreeSortieListStateReducer";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native";
import { EntreeSortie } from "../api/fetch/models";
import {
  ConnectedProp,
  initialState,
  State,
  withLoadingAndErrorDispatcher
} from "../store";
import { entreeSortieApi } from "../api";
import { connect } from "react-redux";

const EntreeSortieListComponent: FunctionComponent<
  EntreeSortieListState & ConnectedProp
> = ({ entreeSorties, dispatch }) => {
  useEffect(() => {
    withLoadingAndErrorDispatcher(
      async () => {
        entreeSorties = await entreeSortieApi.entreeSortieFind({});
        dispatch({ type: "EntreeSortieListLoaded", entreeSorties });
      },
      [],
      "Loading EntreeSortieList"
    );
  }, []);
  const keyExtractor = (item: EntreeSortie, index: number) =>
    item.id!.toString();

  const renderItem = ({ item }: { item: EntreeSortie }) => (
    <ListItem title={item.projet} subtitle={`${item.dateEntreeSortie}`} />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={entreeSorties}
      renderItem={renderItem}
    />
  );
};

export const EntreeSortieList = connect((state: State) => {
  return (state || initialState).entreeSorties;
})(EntreeSortieListComponent);
