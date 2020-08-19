class Counter extends React.Component {
    state = {
      count: 0
    };
    render() {
        return (
          <div>
            <p>The current count: {this.state.count}</p>
            <button
              onClick={function() { console.log('clicked!') }}
            >
              Add 1
            </button>
          </div>
        )
      }
  }

  export default Counter;