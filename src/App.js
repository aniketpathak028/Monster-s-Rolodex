import { Component } from "react"; // importing Component class from react library
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // the constructor is invoked first whenever the class is instantiated
  constructor() {
    console.log("constructor");
    super(); // call super method
    // defines the state of the component
    this.state = {
      monsters: [],
      searchField: "" // initially the searchField is empty, hence all monsters are displayed
    };
  }

  // lifecycle method that runs when the component first mounts
  componentDidMount() {
    console.log("componentDidMount");
    // native fetch that returns a promise on success
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json()) // transforms response into json
      .then((users) => {
        // setState method is used to change the state of the component asynchronously
        this.setState({
          monsters: users,
        });
      });
  }

  // render method, renders the JSX immediatedly after constructor is called
  render() {
    // creating a new list of filtered monsters based on the input-text
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    console.log("render");
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onChange={(event) => {
          // convert the input text into lowercase
          const searchField = event.target.value.toLocaleLowerCase();
          // change the searchString property to re-render the component
          this.setState(() => {
            return {
              searchField
            };
          })
        }}/>
        {
          // display filtered list of monsters all the time, to preserve the original list
          filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
