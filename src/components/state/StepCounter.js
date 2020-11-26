import { Component} from "react";

class StepCounter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.increaseClick = this.increaseClick.bind(this);

        this.decreaseClick = this.decreaseClick.bind(this);
    }

    increaseClick() {
        const current = this.state.count;
        const next = parseInt(this.props.step) + current;
        if(next <= parseInt(this.props.max)){
            this.setState({ count: next });
        }
    } 

    decreaseClick() {
        const current = this.state.count;
        const next = current - parseInt(this.props.step);
        if(next >= 0){
            this.setState({ count: next });
        }
    } 

    render() {
        let currentVal = this.state.count; 

        return (
            <>
                <p>StepCount : { currentVal } (step: { this.props.step })</p>
                <button onClick={ this.increaseClick }>+</button>
                <button onClick={ this.decreaseClick }>-</button>
            </>
        );
    }


}

StepCounter.defaultProps = {
    max: 10,
    step: 1,
};

export default StepCounter;
