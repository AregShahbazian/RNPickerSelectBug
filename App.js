/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>Choose a value</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          {label: 'Football', value: 'football'},
          {label: 'Baseball', value: 'baseball'},
          {label: 'Hockey', value: 'hockey'},
        ]}
      />
    </>
  );
};

export default App;
