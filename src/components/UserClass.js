import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        login: "xyz",
        avatar_url: "abc",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/god-ackerman");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    })
  }

  render() {
    const {name, login, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="github-avatar" src={avatar_url}></img>
        <div className="about-details-div">
          <h2>Name: {name}</h2>
          <h3>GIT ID: {login}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
