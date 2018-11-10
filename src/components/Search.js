import React, { Component } from "react";

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val);
  }
  render() {
    return (
      <header>
        <form>
          <input
            placeholder="type name"
            ref={value => (this.myValue = value)}
            type="text"
            onChange={this.filterUpdate.bind(this)}
          />
        </form>
      </header>
    );
  }
}

export default Search;
