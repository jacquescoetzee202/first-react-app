import { Component} from "react";


class Clicked extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickStatus: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clickStatus: true });
    }



    render() {
        return (
            <p onClick={ this.handleClick }>{ this.state.clickStatus ? "Clicked" : "Not Clicked" }</p>
        );
    }
}

export default Clicked;