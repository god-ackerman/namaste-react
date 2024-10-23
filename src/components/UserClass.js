import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/god-ackerman");
    const json = await data.json();
    console.log(json);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: god-ackerman</h4>
      </div>
    );
  }
}

export default UserClass;
