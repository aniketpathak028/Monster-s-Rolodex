import { Component } from "react"; // importing Component class from react library
import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/card-list/card-list.component";

class App extends Component {
  // the constructor is invoked first whenever the class is instantiated
  constructor() {
    console.log("constructor");
    super(); // call super method
    // defines the state of the component
    this.state = {
      monsters: [],
      searchField: "", // initially the searchField is empty, hence all monsters are displayed
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

  // define the onChange handler for input outside the render method to optimize performance
  onChangeHandler = (event) => {
    // convert the input text into lowercase
    const searchField = event.target.value.toLocaleLowerCase();
    // change the searchString property to re-render the component
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  // render method, renders the JSX immediatedly after constructor is called
  render() {
    // destructure state properties (code-readability)
    const { monsters, searchField } = this.state;
    const { onChangeHandler } = this;

    // creating a new list of filtered monsters based on the input-text
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onChangeHandler}
        />
        {/* {
          // display filtered list of monsters all the time, to preserve the original list
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        } */}
        <CardList />
      </div>
    );
  }
}

export default App;
