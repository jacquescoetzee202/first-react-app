import { Component } from "react";

class Adder extends Component {
    constructor() {
        super();

        this.state = {
            input: 0,
            inputList: [],
            total: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const value = event.currentTarget.value;
        this.setState({ input: value });
    }

    handleClick () {
        const currentList = this.state.inputList;
        const input = parseInt(this.state.input);
        const newTotal = input + this.state.total;

        this.setState ({
            inputList: [ ...currentList, input ],
            total: newTotal,
        });
    }

    render() {

        const list = this.state.inputList;
        const input = this.state.input;
        const total = this.state.total;

        return (
            <>
                <h2>Adder List</h2>
                <div className="form-group">
                    <label>Add a number to the list!</label>
                    <input
                        type = "number"
                        className = "form-control"
                        value = { input }
                        onChange = { this.handleChange }
                    />
                    <button 
                        onClick={ this.handleClick }
                        className="btn btn-primary" 
                    >
                        Add
                    </button>
                </div>
                <h4>User generated list :</h4>
                <ul className="list-group">
                    {list.map((item, index) => (
                        <li key={ index } className="list-group-item">
                            {item}
                        </li>
                    ))}
                    <li className="list-group-item" >List sum : { total }</li>
                </ul>
            </>
        );
    }
}

export default Adder;