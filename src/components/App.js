import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedStatus: true,
      filters: {
        type: 'all'
      }
    }
  }
  //App passes a callback prop (below), onChangeType, to <Filters />
  //function/callbackprop is a Change Handler (forms - selection, input, radio...) that updates <App />'s state.filters.type
  onChangeType = (event) => {
    this.setState( {
      filters: {...this.state.filters,
      type: event.target.value
    }})
  }

  //<Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().
  onFindPetsClick = () => {
    let BASE_URL = '/api/pets'

    if (this.state.filters.type !== 'all'){
      BASE_URL = `${BASE_URL}?type=${this.state.filters.type}`
    }
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(pets => this.setState({
      pets: pets //Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
    }))
  }

  onAdoptPet = (id) => {
    const p = this.state.pets.map(pet => { return pet.id === id ? {...pet, isAdopted: true} : pet })
    this.setState ({
      pets: p
    })

    // const p = this.state.pets.map(pet => {
    //   if (pet.id === id) {
    //     pet.isAdopted = true;
    //   }
    //   return pet;
    // })
    // this.setState ({
    //   pets: p
    // })
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/> {/*pass in pets too*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
