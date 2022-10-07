import { Component } from "react";

// importing css file
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <input
        className= {className}
        type="search"
        placeholder= {placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
