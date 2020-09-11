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

  onChangeType = (event) => {
    const type = event.target.value;
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = (event) => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(pets => this.setState({
        pets: pets
      }))
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then( res => this.setState({pets: res})
      )
    }
  }

  onAdoptPet = (id) => {
    this.state.pets.filter(pet => pet.id === id)[0].isAdopted = true;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
