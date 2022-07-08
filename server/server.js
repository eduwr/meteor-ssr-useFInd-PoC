import React from "react";
import { onPageLoad } from "meteor/server-render";
import { renderToString } from "react-dom/server";

import { App } from "/imports/ui/App";

onPageLoad(sink => {
    console.log("Sink call")
    const html = renderToString(<App />);
    sink.renderIntoElementById("react-target", html);
});