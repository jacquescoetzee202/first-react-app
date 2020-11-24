import { Component} from "react";

class Counter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.initial,
        };

        this.increaseClick = this.increaseClick.bind(this);

        this.decreaseClick = this.decreaseClick.bind(this);
    }

    increaseClick() {
        let current = this.state.count;
        if(current < this.props.max){
            this.setState({ count: current + 1 });
        }
    } 

    decreaseClick() {
        let current = this.state.count;
        if(current >= 1){
            this.setState({ count: current - 1 });
        }
    } 

    render() {
        let currentVal = this.state.count; 

        return (
            <>
                <p>Count : { currentVal } </p>
                <button onClick={ this.increaseClick }>+</button>
                <button onClick={ this.decreaseClick }>-</button>
            </>
        );
    }


}

Counter.defaultProps = {
    initial: 0,
    max: 1000,
};

export default Counter;
