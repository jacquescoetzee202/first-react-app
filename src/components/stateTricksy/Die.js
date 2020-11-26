import { Component } from "react";

class Die extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentNum: "Click to roll!",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const roll = Math.floor(Math.random() * (parseInt(this.props.sides) + 1));
        this.setState({ currentNum: roll });
    }

    render() {
        return (
            <>
                <p>Roll the {this.props.sides} sided Dice!</p>
                <button type="button" className="btn btn-default" onClick={ this.handleClick } style={{
                    border: "solid grey", 
                }}>
                    { this.state.currentNum }
                </button>
            </>
        );
    }
}

export default Die;