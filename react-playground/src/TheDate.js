import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
      super(props)
      this.state = { datetime: new Date() };
    }
    componentDidMount() {
      setInterval(() => {
        console.log('tick')
      }, 1000)
    }
    render() {
      return (
        <div> { this.state.datetime.toLocaleString() } </div>
      )
    }
  }

    export default TheDate;
