import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="about-div">
                <h1>About</h1>
                <h2>Namaste React</h2>
                <UserClass name={"Shashwat Chitransh"} location={"Bhopal"} />
            </div>
        );
    }
}

export default About;