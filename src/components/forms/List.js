import { Component } from "react";

class List extends Component {
    constructor() {
        super();

        this.state = {
            input: "",
            inputList: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const value = event.currentTarget.value;
        this.setState({ input: value });
    }

    handleClick () {
        const currentlist = this.state.inputList;
        const input = this.state.input;
        this.setState ({
            inputList: [ ...currentlist, input ]
        });
    }

    render() {

        const list = this.state.inputList;
        const input = this.state.input

        return (
            <>
                <h2>Make your own list !</h2>
                <div className="form-group">
                    <label>List Item</label>
                    <input
                        className = "form-control"
                        value = { input }
                        onChange = { this.handleChange }
                    />
                    <button onClick={ this.handleClick } >Add</button>
                </div>
                <h4>User generated list :</h4>
                <ul className="list-group">
                    {list.map((item, index) => (
                        <li key={ index } className="list-group-item">
                            {item}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default List;