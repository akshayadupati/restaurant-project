import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countt: 0,
    };
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
    this.setState({
      count: this.state.countt + 1,
    });
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <p>Parent count: {this.state.countt}</p>
        <button
          onClick={() => this.setState({ countt: this.state.countt + 1 })}
        >
          Click
        </button>
        <UserClass />
        <UserClass />
      </>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>Welcome to our restaurant page.!</h1>
//       <User />
//       <UserClass name="Akshaya-Class" location="Canada-Class" />
//     </div>
//   );
// };

export default About;

/*

Parent Constructor
Parent Render

Child constructor
Child render

Nested Child constructor
Nested Child render

Child constructor
Child render

Nested Child constructor
Nested Child render

Nested Child componentDidMount
Child componentDidMount
Nested Child componentDidMount
Child componentDidMount


Parent componentDidMount

*/
