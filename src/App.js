import React, { Component } from "react";

import "./App.css";

const user = {
  firstName: "Pablo",
  lastName: "Perez",
  address: {
    street1: "24 Rue Blah",
    zipcode: 75001
  },
  emails: ["blah@blah.com", "pablo@perez.com"],
  avatarUrl: "https://media2.giphy.com/media/HX58Bmu7W1XbO/200.webp"
};

function displayAvatar() {
  if (user.avatarUrl) {
    // no quotes when using {} with HTML attributes
    return <img src={user.avatarUrl} />;
  } else {
    return (
      <img src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />
    );
  }
}

// Our first React COMPONENT
// (a class that extends from React's Component class and defines some content)
class App extends Component {
  handleClick() {
    alert("It's Weird AF");
  }

  // every component class needs a render() method
  // (defines the component's content with the return)
  render() {
    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling your HTML
      <div className="App container">
        <h2 onClick={() => this.handleClick()}>JSX is Weird</h2>

        <p>This is App component.</p>
        <p>
          Welcome, {user.firstName} {user.lastName}! You live at{" "}
          {user.address.street1}. This is your email: {user.emails[0]}.
        </p>
        {/* call a function in {} to display its result */}
        {displayAvatar()}
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like module.exports in Node.js)
export default App;
