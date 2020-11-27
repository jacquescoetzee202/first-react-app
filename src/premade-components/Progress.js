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
        const currentProgress = this.state.progress;
        if (currentProgress < 100) {
            const updated = this.state.progress + 10;
            this.setState({ progress: updated });
        } else {
            this.setState({ progress: 100 });
        }
    }

    render() {
        const progress = this.state.progress;
        return (
            <>
                <ProgressBar animated now={progress} label={`${progress}%`} max={100} />
                <Button  
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