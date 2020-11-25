import { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };

        this.nextClick = this.nextClick.bind(this);
    }

    nextClick() {
        const current = this.state.currentIndex;
        const next = current + 1;
        if(next < this.props.names.length){
            this.setState({ currentIndex: next });
        } else {
            this.setState({ currentIndex: 0 });
        }
    }

    render() {
        const name = this.props.names[this.state.currentIndex];
        return (
            <>
                <h1>{ name }</h1>
                <button onClick={ this.nextClick }>Next</button>
            </>
        );
    }


}

RollCall.defaultProps = {
    names: ["Empty roll call - pls populate"],
};

export default RollCall;

