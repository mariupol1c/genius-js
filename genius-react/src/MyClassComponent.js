import { Component } from "react";
class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kostya",
      comment: "I'm new class component",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.comment}</h1>
      </div>
    );
  }
}

export default MyClassComponent;
