import React from 'react'

class ClassCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <>
                <h1>This is ClassCounter</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}
export default ClassCounter
