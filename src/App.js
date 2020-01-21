import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import { Scroll } from './components/scroll/scroll.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({ monsters }))
  }

  onChangeSearch = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    const { monsters, searchTerm } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox searchTerm={searchTerm} onChangeSearch={this.onChangeSearch} placeholder="Search the monsters" />
        <Scroll> <CardList monsters={filteredMonsters} /></Scroll>
      </div>
    );
  }
}

export default App;
