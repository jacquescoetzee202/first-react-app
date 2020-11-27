import { Component } from "react";
import { Button, ProgressBar } from 'react-bootstrap';


class Progress extends Component {
    constructor(){
        super();

        this.state = {
            progress: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const updated = this.state.progress + 10;
        this.setState({ progress: updated });
    }

    render() {
        const progress = this.state.progress;
        return (
            <>
                <ProgressBar animated now={progress} label={`${progress}%`} max={100} />
                <Button
                    disabled={progress === 100 ? true : false}  
                    onClick={ this.handleClick }
                    variant="primary"
                >
                    More
                </Button>
            </>
        );
    }
}

export default Progress;