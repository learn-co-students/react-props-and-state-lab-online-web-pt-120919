import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  // step1 just make an event handler(handling event)
  onChangeType = (event) => {
    // debugger throw debugger in to see if it works and to see what event is
    const type = event.target.value;
    // change the state to what the event value is
    this.setState({
      // this.setState({ filters: { ...this.state.filters, type: value } });
      // another way to do it
      filters: {
        type: type
      }
    })
  }
  // create pet event handler and pass it down to filters

  onFindPetsClick = (event) => {
    // debugger put debugger in to make sure it is working
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(pets => this.setState({
        pets: pets
        // sets the pets array in the state to all the pets
      }))
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      // have to customize the url based on the filter
      // look in readme for how to do this
      .then(res => res.json())
      .then( res => this.setState({pets: res})
       // sets the pets array in the state to all the pets of the specific breed
      )
    }
  }

  onAdoptPet = (id) => {
    // console.log(id) make sure it is working 
 
    
     this.state.pets.find(pet => pet.id === id).isAdopted = true;
     
    // this.state.pets.filter(pet => pet.id === id)[0].isAdopted = true;
    // filter returns a whole array so maybe there is a better method
  }

  render() {
    // console.log(this.state) -----check to see if state changes for onChangeType
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
              {/* pass the event handlers down to filters */}
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
              {/* pass in the list of pets to the petBrowser/ */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
