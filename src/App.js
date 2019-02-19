import React, { Component } from "react";
import ReactPlayer from "react-player";

import "./App.css";

import User from "./User.js";

// Our first React COMPONENT
// (a class that extends from React's Component class and defines some content)
class App extends Component {
  // define a constructor() method if you want your component to have STATE
  constructor(props) {
    // you need this or you'll get error
    // (super calls React's Component constructor)
    super(props);

    // set the initial state object when the component is first created
    // (each key-value pair is a difference piece of state)
    this.state = {
      userInfo: {
        firstName: "Pablo",
        lastName: "Perez",
        address: {
          street1: "24 Rue Blah",
          zipcode: 75001
        },
        emails: ["blah@blah.com", "pablo@perez.com"],
        avatarUrl: "https://media2.giphy.com/media/HX58Bmu7W1XbO/200.webp"
      },
      colorScheme: "purple-scheme",
      colorChangeCount: 0
    };
  }

  handleClick() {
    alert("It's Weird AF");
  }

  changeScheme(color) {
    const schemeClass = color + "-scheme";
    // use React's built-in setState() method to change the state
    // (it will cause React to RENDER the component again)
    this.setState({
      colorScheme: schemeClass,
      colorChangeCount: this.state.colorChangeCount + 1
    });
  }

  randomScheme() {
    const colors = ["orange", "purple", "red", "green"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.changeScheme(colors[randomIndex]);
  }

  updateName() {
    // we are only using prompt() here because it's easy
    // (it's bad UX and you can't style it)
    const newFirst = prompt("First Name?");
    const newLast = prompt("Last Name?");

    // update the user object's properties
    const user = this.state.userInfo;
    user.firstName = newFirst;
    user.lastName = newLast;

    // use React's built-in setState() method to change the state
    // (it will cause React to RENDER the component again)
    this.setState({ userInfo: user });
  }

  addEmail() {
    const newEmail = prompt("New Email?");

    // update the user object's properties
    const user = this.state.userInfo;
    user.emails.push(newEmail);

    // use React's built-in setState() method to change the state
    // (it will cause React to RENDER the component again)
    this.setState({ userInfo: user });
  }

  // every component class needs a render() method
  // (defines the component's content with the return)
  render() {
    const { userInfo, colorScheme, colorChangeCount } = this.state;

    const cssClassList = "App container " + colorScheme;

    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling your HTML
      <div className={cssClassList}>
        <h2 onClick={() => this.handleClick()}>JSX is Weird</h2>

        <p>This is App component.</p>

        <p>You have changed your color scheme {colorChangeCount} times.</p>

        <button onClick={() => this.changeScheme("orange")}>
          Change to Orange
        </button>
        <button onClick={() => this.changeScheme("red")}>Change to Red</button>
        <button onClick={() => this.changeScheme("green")}>
          Change to Green
        </button>
        <button onClick={() => this.changeScheme("purple")}>
          Change to Purple
        </button>

        <button onClick={() => this.randomScheme()}>Random Color</button>

        {/* display User and send the "firstName", "lastName", etc. props */}
        <User
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
          email={userInfo.emails[0]}
          photo={userInfo.avatarUrl}
        />
        <button onClick={() => this.updateName()}>Change My Name</button>
        <button onClick={() => this.addEmail()}>Add an Email Address</button>

        {/* display User and send the "firstName", "lastName", etc. props */}
        <User firstName="Picasso" lastName="Pitusa" email="blah@blah.com" />

        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          volume={0.5}
          controls
        />
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like module.exports in Node.js)
export default App;
