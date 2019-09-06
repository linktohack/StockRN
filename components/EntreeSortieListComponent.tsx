import React, { FunctionComponent, useEffect } from 'react';
import { EntreeSortieListState } from './EntreeSortieListStateReducer';
import { ListItem, Text } from 'react-native-elements';
import { FlatList, View } from 'react-native';
import { EntreeSortie } from '../api/fetch/models';
import { ConnectedProp, initialState, State, withLoadingAndErrorDispatcher } from '../store';
import { entreeSortieApi } from '../api';
import { connect } from 'react-redux';

export const EntreeSortieListComponent: FunctionComponent<EntreeSortieListState & ConnectedProp> = ({ entreeSorties, dispatch }) => {
  console.log('change page');
  useEffect(() => {
    console.log('effect');

    withLoadingAndErrorDispatcher(
        async () => {
          const entreeSorties1 = (await entreeSortieApi.entreeSortieFind(
              {}
          )) as EntreeSortie[];
          console.log(entreeSorties1);
          dispatch({
            type: 'EntreeSortieListLoaded',
            entreeSorties: entreeSorties1
          });
        },
        [],
        'Loading EntreeSortieList'
    )();
  }, []);
  const keyExtractor = (item: EntreeSortie, index: number) =>
      item.id!.toString();

  const renderItem = ({ item }: { item: EntreeSortie }) => (
      <ListItem title={item.projet} subtitle={`${item.dateEntreeSortie}`}/>
  );

  return (
      <View style={{ flex: 1 }}>
        <Text h1>Hello</Text>
        <FlatList
            keyExtractor={keyExtractor}
            data={entreeSorties}
            renderItem={renderItem}
        />
      </View>

  );
};

export const EntreeSortieList = connect((state: State) => {
  return (state || initialState).entreeSorties;
})(EntreeSortieListComponent);
