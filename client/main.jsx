import React from 'react';

import ReactDOM from "react-dom";
import { onPageLoad } from "meteor/server-render";

onPageLoad(async () => {
  const App = (await import("/imports/ui/App")).default;
  ReactDOM.hydrate(
    <App />,
    document.getElementById("react-target")
  );
});
