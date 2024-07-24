import React from "react";

class NestedChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nestec Child",
    };
    console.log("Nested Child Constructor!");
  }

  componentDidMount() {
    console.log("Nested child componentDidMount");
    this.setState({
      name: "Akshaya",
    });
  }
  render() {
    {
      console.log("Nested Child render");
    }
    return (
      <div>
        <p>Nested Component!</p>
      </div>
    );
  }
}

export default NestedChild;
