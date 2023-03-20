import { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <input
        type="search"
        className={`searchbox ${this.props.className}`}
        placeholder={this.props.placeHolder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
