import { Component } from "react";

class CardList extends Component {
    render() {
    const { monsters } = this.props; // destructure props
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
            return (
              <div key={id} className="card-container">
                <img
                  alt={`monster ${name}`}
                  src={`https://robohash.org/${id}?set=set2`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default CardList;
