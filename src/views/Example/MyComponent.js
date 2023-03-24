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

    handleClickButton = () => {
        alert('Click me')
    }

    render() {

        return (
            <>
                <input type="text" value={this.state.name}
                    onChange={(event) => this.handleOnChangeName(event)}
                />
                <div>My name { this.state['name'] }</div>
                <div className="second">My youtube channel: {this.state.channel}</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent