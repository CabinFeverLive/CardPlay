import React, { Component } from 'react';
import Card from './Card'
import { robots } from './robots'
import SearchBox from './SearchBox'
import { render } from 'react-dom';


class App extends Component {
    constructor(){
      super()
      this.state = {
        robots: robots,
        searchfield: ''
      }
    }

    onSearchChange = (event) => {
      
      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
      })

      this.setState({ searchfield: event.target.value , robots: filteredRobots })


    }

  render(){
    
    const CardComponent = this.state.robots.map((user, i) =>{
      return <Card 
      key={i}
      id={this.state.robots[i].id} 
      name={this.state.robots[i].name} 
      email={this.state.robots[i].email} 
      />
    })
    return (
      <main className='App'>
        <div className='tc mt0'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          {CardComponent}
        </div>
      </main>
  )
}
}


export default App;
