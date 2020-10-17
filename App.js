import 'react-native-gesture-handler';

import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';

import { storeThunk } from './src/redux/storeThunk';
import { Navigation } from './src/navigation';

import { theme } from './src/assets/themes';
import { default as mapping } from './src/assets/mapping.json';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={storeThunk}>
        <ApplicationProvider
          {...eva}
          theme={theme.light}
          customMapping={mapping}>
          <Navigation />
        </ApplicationProvider>
      </Provider>
    </>
  );
};

export default App;
