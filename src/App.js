import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  state = {
    isLoading: true
  }
  render() {
    return (
      <div>
        {this.props.houses.map(
          (house) => (
            <div key= {house.url}>
              {house.name}
              {house.swornMembers.map(member => <div>{member.name}</div>)}
            </div>
          ) 
        )}
      </div>
    );
  }
  
  componentDidMount() {
    this.loadHouses()
  }
  
  async loadHouses() {
   await this.props.fetchHouses();
  }
}

function mapStateToProps({houses}) {
  return {
    houses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHouses: () => dispatch(fetchHouses)
  }
}

async function fetchHouses(dispatch) {
  let response = await fetch('https://www.anapioficeandfire.com/api/houses');
  let houses = await response.json();
  let memberRef = []
  let swornMembers = [];
  houses.forEach(house => {
    let currentHouse = {...house,swornMembers: []};
    house.swornMembers.forEach(swornMember => {
      currentHouse.swornMembers.push(fetchCharacter(swornMember))
    })
    memberRef.push(currentHouse);
  });
  dispatch(actions.populateHouses(memberRef));
  dispatch(actions.populateCharacters(swornMembers));
}

async function fetchCharacter(url) {
  let response = await fetch(url);
  let character = await response.json();
  return character;
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
