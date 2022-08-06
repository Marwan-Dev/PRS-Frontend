import { Component } from "react";
import IUser from "../types/user.type";
import AuthService from "../services/auth.service";

type Props = {};

type State = {
  redirect: string | null,
  userReady: boolean,
  currentUser: IUser & { accessToken: string }
}

export default class Profile extends Component<Props, State> {

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {

    return (
      <div className="container">
        {(this.state) ?
          <div>
            <header className="jumbotron">
              <h3>
                <strong>{this.state.currentUser.user_name}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong>{" "}
              {this.state.currentUser.accessToken.substring(0, 20)} ...{" "}
              {this.state.currentUser.accessToken.substr(this.state.currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {this.state.currentUser.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {this.state.currentUser.email}
            </p>
          </div> : null}
      </div>
    );
  }
}