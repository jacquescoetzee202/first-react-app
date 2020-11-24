import { Component} from "react";

class People extends Component {
    
    handleClick() {
        console.log("Hello, world")
    }

    render() {
        let { names } = this.props;

        return (
            !names ? <p>Nothing to see here</p> : 
                <ul 
                    className="list-group"
                    onClick={ this.handleClick }
                >
                    {names.map((name, index) => (
                        <li key={ index } className="list-group-item">
                            {name}
                        </li>
                    ))}
                </ul>
        );
    }
}


export default People;
