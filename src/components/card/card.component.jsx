import "./card.styles.css";

const Card = ({ name, id, email }) => (
  <div key={id} className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=200x200`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
