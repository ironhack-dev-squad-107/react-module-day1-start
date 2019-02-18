// "import" is the official JS syntax that's like the Node.js "require"
// (doesn't work on browsers yet though)
import React from "react";
import ReactDOM from "react-dom";

// HTML in JS WITHOUT a string -> JSX syntax
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
