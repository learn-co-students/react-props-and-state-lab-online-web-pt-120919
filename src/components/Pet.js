import React from 'react'

class Pet extends React.Component {

  // replace all the things with what the props of the pet
  // {this.props.pet.name} this is an expression anything with a value needs to be wrapped in curly brackets 
  // const {pet} = this.props if you want to deeconstruct it
  render() {
    let callback = () => this.props.onAdoptPet(this.props.pet.id)
    let symbol = '♂';
    if(this.props.pet.gender === 'female'){
      symbol = '♀';
    }
    let button;
    if (this.props.pet.isAdopted === true){
      button = <button className="ui disabled button">Already adopted</button>;
    } else {
      button = <button className="ui primary button" onClick={callback}>Adopt Pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {symbol}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
