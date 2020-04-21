/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StatusBar, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const App: () => React$Node = () => {
  const [value, setValue] = useState('baseball');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>Choose a value</Text>
      <RNPickerSelect
        value={value}
        onValueChange={async (newValue) => {
          // awaiting Promise simulates some async process like API call or redux action
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setValue(newValue);
        }}
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
