import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Memory Game (04-06/2019)',
          id: 1,
          skill1: '· built a complete browser-based card matching game using JavaScript',
          skill2: '· designed and implemented matching logic, winning condition (e.g. congratulations popup), and functionality like restart button, star rating, timer, move counter'
        },
        {
          name: 'Arcade Game (05-07/2019)',
          id: 2,
          skill1: '· applied JavaScript object-oriented programming features to recreate the classic arcade game by creating the key interactive objects including player and enemy instances',
          skill2: '· ensured the error-free game functionality, e.g. Vehicle-player collision resets the game'
        },
        {
          name: 'Feed Reader Testing (06-07/2019)',
          id: 3,
          skill1: '· wrote a number of tests against a pre-existing web-based app with Jasmine',
          skill2: '· tested the underlying business logic of the app as well as the event handling and DOM manipulation'
        },
        /*
        {
          name: 'SPA -- What are you interested in today? (07/2019)',
          id: 4,
          skill1: 'skill1',
          skill2: 'skill2'
        },
        */
        {
          name: 'REACT App -- Monsters Rolodex (07/2019)',
          id: 5,
          skill1: '· built a SPA using Create React App, IDE, Bash, NodeJS, NPM',
          skill2: '· implemented cards with monsters in that have my recent projects and a search box to filter out the monsters with CSS3, JavaScript, JSON'
        },
        {
          name: 'Restaurant Review App (07-08/2019)',
          id: 6,
          skill1: '· converted a static webpage to a mobile-ready web application that is responsive on different sized displays and accessible for screen reader use, using CSS framework',
          skill2: '· implemented accessibility features in the site HTML',
          skill3: '· enhanced the application to a Progressive Web Application by adding a Service Worker script to cache all of the site’s assets for user offline use'
        },
        {
          name: 'E-commerce Platform (REACT) (08-present)',
          id: 7,
          skill1: 'skill1',
          skill2: 'skill2'
        }
      ],
      searchField:''
    };

    this.handleChange = this.handleChange.bind(this);

  }
  
  componentDidMount() {
    //fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => response.json())
      //.then(users => this.setState({ monsters: users }));
  }


  handleChange(e){
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters,searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Qingyi Dong's Monsters Rolodex</h1>
        <SearchBox
          placeHolder= 'search monsters'
          handleChange= {this.handleChange}
        />
        <CardList monsters={ filteredMonsters }/>
      </div>
    );

  }
}

export default App;
