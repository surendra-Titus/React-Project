import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    return <h1>Profile class component!</h1>;
  }
}

export default Profile;
