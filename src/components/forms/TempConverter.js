import { Component } from "react";

class TempConverter extends Component {
    constructor() {
        super();

        this.state = {
            celcius: "",
            farhenhiet: "",
        }
        this.celciusChange = this.celciusChange.bind(this);
        this.farhenhietChange = this.farhenhietChange.bind(this);
    }

    celciusChange(event) {
        let value = event.currentTarget.value;
        let convertedVal = value * (9 / 5) + 32;
        this.setState({ farhenhiet: convertedVal,
            celcius: value, 
        });
    }

    farhenhietChange(event) {
        let value = event.currentTarget.value;
        let convertedVal = (value - 32) * (5 / 9);
        this.setState({ celcius: convertedVal,
            farhenhiet: value
        });
    }

    render() {
        return (
            <div className="form-group">
                <label>Celcius</label>
                <input
                    className = "form-control"
                    value = {this.state.celcius}
                    onChange = { this.celciusChange }
                />
                <label>Fahrenhiet</label>
                <input
                    className = "form-control"
                    value = {this.state.farhenhiet}
                    onChange = { this.farhenhietChange }
                />
            </div>
        );
    }

}

export default TempConverter;