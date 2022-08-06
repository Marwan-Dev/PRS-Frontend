import { Component } from "react";
import IUser from "../types/user.type";

type Props = {};

type State = {
  redirect: string | null,
  userReady: boolean,
  currentUser: IUser & { accessToken: string }
}

export default class Profile extends Component<Props, State> {
    render() {
        return (
          <div className="container">
            <header className="jumbotron">
              <h3>Profile Page</h3>
            </header>
          </div>
        );
    }
}