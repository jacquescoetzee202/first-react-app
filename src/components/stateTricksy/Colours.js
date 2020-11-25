import { Component } from "react";

class Colours extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorIndex: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const current = this.state.colorIndex;
        const next = current + 1;
        if ( next < this.props.colours.length ) {
            this.setState({ colorIndex: next });
        } else {
            this.setState({ colorIndex: 0 });
        }
    }

    render() {
        const currentColour =  this.props.colours[this.state.colorIndex];
        return (
            <div onClick={ this.handleClick } style={{
                backgroundColor: currentColour,
                width: 200,
                height: 200,
                marginTop: 30,
                marginBottom: 30,
            }}>
            </div>
        );
    }
}

export default Colours;