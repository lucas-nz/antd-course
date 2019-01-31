import React from 'react';

// 生命周期方法示例
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }
    componentDitMount() {
        console.log('componentDitMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


export default Clock;