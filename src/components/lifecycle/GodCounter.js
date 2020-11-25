import { Component } from "react";

class GodCounter extends Component {
    constructor() {
        super();

        this.state = {
            clickCount: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click" , this.handleClick );
    }
    
    componentWillUnmount() {
        window.removeEventListener("click" , this.handleClick );
    }
    
    handleClick() {
        const updated = this.state.clickCount + 1;
        this.setState({ clickCount: updated })
    }

    render() {
        const count = this.state.clickCount;
        return (
            <p>God Count : { count }</p>
        );
    }

}

export default GodCounter;