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

  handleChangeType = event => {
    const type = event.target.value;
    this.setState({
      filters: {
        type: type,
      }
    })
  }

  handleFindPetsClick = event => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then( res => this.setState({pets: res}, () => console.log(this.state))
      )
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then( res => this.setState({pets: res}, () => console.log(this.state))
      )
    }
  }

  handleAdoptPet(id) {
    this.state.pets.filter(p => p.id === id)[0].isAdopted = true;
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
            <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
            <PetBrowser onAdoptPet={this.handleAdoptPet.bind(this)} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
