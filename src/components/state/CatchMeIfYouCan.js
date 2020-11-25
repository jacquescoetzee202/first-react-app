import { Component } from "react";


class CatchMeIfYouCan extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentPos: 0,
        };

        this.jumpClick = this.jumpClick.bind(this);
    }

    jumpClick() {
        const current = this.state.currentPos;
        const next = this.props.jump + current;
        this.setState({ currentPos: next });
    } 

    render() {
        let position = this.state.currentPos; 

        return (
            <button onClick={ this.jumpClick } style={{
                display: "block",
                position: "relative",
                top: position,
                marginTop: 50,
                marginBottom: 50,
            }}>Catch me if you can !!</button>
        );
    }
}

CatchMeIfYouCan.defaultProps = {
    jump: 200,
};

export default CatchMeIfYouCan;