/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import CustomBottomSheet from './src/components/templates/CustomBottomSheet';

const App = () => {
  return (
    <CustomBottomSheet title={'Como acessar os dados do cartão?'}>
      <View>
        <Text>Olá Mundo1</Text>
      </View>
    </CustomBottomSheet>
  );
};

export default App;
