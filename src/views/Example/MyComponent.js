import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Leo Messi',
        channel: 'Barcelona'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            <>
                <input type="text" value={this.state.name}
                    onChange={(event) => this.handleOnChangeName(event)}
                />
                <div>My name { this.state['name'] }</div>
            </>
        )
    }
}

export default MyComponent