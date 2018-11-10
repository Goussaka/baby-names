import React, { Component } from "react";
import "./App.css";
import NamesList from "./components/NamesList";
import Credit from "./components/Credit";
import Search from "./components/Search";
import ShortList from "./components/ShortList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      favourites: [],
      errormsg: ""
    };
  }
  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  addFavourites(id) {
    const favList = this.state.favourites.concat([id]);
    if (favList[id] === id) {
      this.setState({
        errormsg: "This name is on the List"
      });
    } else {
      this.setState({
        favourites: favList
      });
      this.setState({
        errormsg: ""
      });
    }
  }

  removeFavourites(id) {
    const newItems = this.state.favourites.filter(_item => {
      return _item !== id;
    });
    this.setState({ favourites: newItems });
  }

  render() {
    const { errormsg } = this.state;
    return (
      <div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <ShortList
            favourites={this.state.favourites}
            errormsg={this.state.errormsg}
            data={this.props.data}
            removeFavourites={this.removeFavourites.bind(this)}
          />
          <NamesList
            data={this.props.data}
            addFavourites={this.addFavourites.bind(this)}
            filterText={this.state.filterText}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
