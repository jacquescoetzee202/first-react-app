import { Component } from "react";
import { Form } from 'react-bootstrap';



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
            color = "transparent";
        }

        return (
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        );
    }
}

export default PasswordStrength;