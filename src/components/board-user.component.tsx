import { Component } from "react";

type Props = {};

type State = {
  content: string;
}

export default class BoardUser extends Component<Props, State> {
    render() {
        return (
          <div className="container">
            <header className="jumbotron">
              <h3>User Page</h3>
            </header>
          </div>
        );
    }
}