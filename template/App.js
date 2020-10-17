import "react-native-gesture-handler";

import React from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";
import { mapping, light, dark } from "@eva-design/eva";
import { theme } from "./src/assets/themes";
import { default as customMap } from "./src/assets/mapping.json";

import { storeThunk } from "./src/redux/storeThunk";
import { Navigation } from "./src/navigation";

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={storeThunk}>
        <ApplicationProvider
          mapping={mapping}
          theme={theme.light}
          customMapping={customMap}
        >
          <Navigation />
        </ApplicationProvider>
      </Provider>
    </>
  );
};

export default App;
