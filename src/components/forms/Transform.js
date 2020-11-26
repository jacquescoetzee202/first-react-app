import { Component } from "react";

class Transform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange (event) {
        const value = event.currentTarget.value;
        this.setState({ input: value });
    }

    transformer () {
        const input = this.state.input;
        if( input ) {
            return this.props.transform(parseInt(this.state.input)); 
        } else {
            return "Add a number to the input field to get a result";
        }
    }

    render() {
        const input = this.state.input;
        const result = `Result : ${this.transformer()}`;

        return (
            <>
                <h2>Number Transformer</h2>
                <p>Transformer : { this.props.description }</p>
                <div className="form-group">
                    <label>Add a number to be transformed!!</label>
                    <input
                        type = "number"
                        className = "form-control"
                        value = { input }
                        onChange = { this.handleChange }
                    />
                </div>
                <p>{ result }</p>
            </>
        );
    }
}

export default Transform;