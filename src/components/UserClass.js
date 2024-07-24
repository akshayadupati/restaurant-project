import React from "react";
import NestedChild from "./NestedChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log("Child render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="usercard-container">
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Social Media: @akshayadupati</h4>
        <NestedChild />
      </div>
    );
  }
}

export default UserClass;
