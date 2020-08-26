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
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          dui vitae tellus lobortis egestas. Curabitur lacinia pretium odio eget
          dignissim. Vivamus in tincidunt velit.
        </Text>
      </View>
    </CustomBottomSheet>
  );
};

export default App;
