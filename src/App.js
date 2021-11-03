import React, {Component} from 'react';
import CardList from './CardList';
import SearchBoxx from './searchBoxx';
import {robot} from './robot';


class App extends Component{
    constructor(){
        super();
        this.state={
            robot: robot,
            searchfiled: ''
        }

    }

//allows searching 
    onSearchChange = (event)=>{
        this.setState({searchfiled: event.target.value})
       
    }
render(){
    const filteredRobot = this.state.robot.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
    })

    return(
        <div className ='tc'>
                   
        <h1>RoboFriends</h1>
    <SearchBoxx  searchChange ={this.onSearchChange} />
    <CardList robot ={filteredRobot}/>
    </div>
    );
}
}
export default App;