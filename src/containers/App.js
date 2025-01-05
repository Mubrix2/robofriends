import React, { Component } from "react";
import Cardlist from "../components/cardlist";
// import { robots } from "./robot";
import SearchBox from "../components/searchbox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component {
  constructor() {
   super()
   this.state = {
      robots: [],
     searchField: ''
   }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response =>Response.json())
    .then(users => this.setState({robots: users}))
  }


  onSearchChange = (event) => {
   this.setState({searchField: event.target.value }) 
  }
 render() {
  const {robots, searchField } = this.state
  const filteredRobots = robots.filter(robot => {
   return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

// if (!robots.length) {
//   return <h1>Loading</h1>
// } else {
  return (
    <div className="tc">
       <h1 className="f1">RoboFriends</h1>
       <SearchBox searchChange={this.onSearchChange}/> 
       <Scroll> 
        <ErrorBoundary>
         <Cardlist robots={filteredRobots}/>
         </ErrorBoundary> 
      </Scroll>   
    </div>
   )
}
 
 }
//  }


 

export default App 