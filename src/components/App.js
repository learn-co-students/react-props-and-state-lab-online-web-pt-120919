import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = e => {
    const animal = e.target.value;

    this.setState({ filters: { ...this.state.filters, type: animal } });

    console.log(animal);
  };

  onFindPetsClick = () => {
    let endpoint = "/api/pets";
    if (this.state.filters.type !== "all") {
      endpoint = `${endpoint}?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(resp => resp.json())

      .then(animals => this.setState({ pets: animals }));
  };

  onAdoptPet = id => {
    const p = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({
      pets: p
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
