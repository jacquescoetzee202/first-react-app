import { Component } from "react";

class Length extends Component {
    constructor() {
        super();

        this.state = {
            input: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.currentTarget.value })
    }

    render() {
        return (
            <div className="form-group">
                <input 
                    value={this.state.input}
                    className="form-control"
                    onChange={ this.handleChange }
                />
                <p className="form-text text-muted">
                    Length :  { this.state.input.length } characters
                </p>
            </div>
        );
    }
}

export default Length;
