import React from 'react'

class Pet extends React.Component {
  render() {
    const {pet, onAdoptPet} = this.props; 
    //rec pet as a prop so destructuring to use as props
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === 'female' ? '♀' : '♂'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>Adopt pet</button> }
           {/* when callback prop recieves arg use arrow function  */}
        </div>
      </div>
    )
  }
}

export default Pet
