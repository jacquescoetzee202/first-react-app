import { Component } from "react";

class PasswordStrength extends Component {
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
        const length = this.state.input.length;
        
        let color;

        if(length > 16 ){
            color = "green";
        } else if (length > 9){
            color = "orange";
        } else if (length > 0){
            color = "red";
        } else {
            color = "none";
        }

        return (
            <div className="form-group">
                <input
                    type = "password" 
                    className = "form-control"
                    value = {this.state.input}
                    onChange = { this.handleChange }
                    style = {{
                        backgroundColor: color
                    }}
                />
            </div>
        );
    }
}

export default PasswordStrength;