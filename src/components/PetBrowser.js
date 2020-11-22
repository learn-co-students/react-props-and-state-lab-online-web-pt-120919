import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">{this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id}/>)}</div>
    // map over pets rendering a pet component for each pet pass it the onAdoptPet, the pet and don't forget the key!!
    // you need the key to get rid of the error key should be unique, pet.id is a great one to use
  }
}

export default PetBrowser
