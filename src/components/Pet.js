import React from 'react'

class Pet extends React.Component {
  render() {

    const { pet, onAdoptPet } = this.props

    const symbol = {
      'female': '♀',
      'male': '♂'
    }

    let buttons; 

    if (pet.isAdopted === true) {
      buttons = <button className="ui disabled button">Already adopted</button>
    } else {
      buttons = <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>Adopt pet</button>
    } 

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {pet.name}
            {symbol[pet.gender]}
            {/* {pet.gender === "female" ? '♀' : '♂'} */}
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
          {buttons}
        </div>
      </div>
    )
  }
}

export default Pet
