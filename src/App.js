import React, { Component } from "react";

import "./App.css";

// Our first React COMPONENT
// (a class that extends from React's Component class and defines some content)
class App extends Component {
  // every component class needs a render() method
  // (defines the component's content with the return)
  render() {
    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling your HTML
      <div className="App container">
        <h2>JSX is Weird</h2>
        <p>This is App component.</p>
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like module.exports in Node.js)
export default App;
