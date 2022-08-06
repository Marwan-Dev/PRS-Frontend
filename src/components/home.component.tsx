import { Component } from "react";
import Card from 'react-bootstrap/Card';

type Props = {};

type State = {
  content: string;
}

export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
          content: ""
        };
    }

    componentDidMount() {
        console.log('Welcome Home component')
    }

    render() {
        return (
          <div className="container">
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </div>
        );
    }
}