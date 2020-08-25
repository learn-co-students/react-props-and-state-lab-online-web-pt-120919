import React from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import Pet from "./Pet";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = e => {
    this.setState({
      filters: { ...this.state.filters, type: e.target.value }
    });
  };
  onAdoptPet = id => {
    const updatedPets = this.state.pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );

    this.setState({
      pets: updatedPets
    });
  };
  onFindPetsClick = () => {
    let BASE_URL =
      this.state.filters.type === "all"
        ? "/api/pets"
        : `/api/pets?type=${this.state.filters.type}`;
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(pets =>
        this.setState({
          pets: pets
        })
      );
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
