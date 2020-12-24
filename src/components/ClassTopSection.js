import React, { Component } from 'react'
import TopSection from './TopSection'

export default class ClassTopSection extends Component {
  constructor(props){
    super(props);
    this.state  = {date : new Date()};
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, our world!</h1>
        <TopSection date={this.state.date} />
      </div>
    )
  }
}
