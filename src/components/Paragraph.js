import { Component} from "react";


class Paragraph extends Component {

    render() {
        let { children } = this.props;

        return (
            <p>{ children }</p>
        );
    }
}

Paragraph.defaultProps = {
    message: "Hello, world"
};

export default Paragraph;



